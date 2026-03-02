/**
 * POST /api/scope-check
 *
 * Accepts { contract_text, client_message }, calls analyzeScope() via OpenAI,
 * saves the result to Supabase, and returns the result to the client.
 */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { analyzeScope } from "@/lib/ai/analyze-scope";
import type { Database } from "@/types/database";

type ResultStatus =
  Database["public"]["Tables"]["scope_checks"]["Row"]["result_status"];

interface AnalysisResult {
  result_status: ResultStatus;
  confidence_score: number;
  ai_explanation: string;
  suggested_reply: string;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let contract_text: string;
  let client_message: string;

  try {
    const body = await req.json();
    contract_text = (body.contract_text ?? "").trim();
    client_message = (body.client_message ?? "").trim();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!contract_text || !client_message) {
    return Response.json(
      { error: "Both contract_text and client_message are required." },
      { status: 422 },
    );
  }

  // Resolve internal user id from clerk_id (needed for limit check + insert)
  const supabase = createSupabaseServerClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: user, error: userError } = await (supabase as any)
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (userError || !user) {
    console.error(
      "[scope-check] User not found in Supabase:",
      userError?.message,
    );
    return Response.json({ error: "User record not found." }, { status: 404 });
  }

  // Free-tier limit: 5 scope checks total
  const FREE_LIMIT = 5;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { count } = await (supabase as any)
    .from("scope_checks")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  if (count !== null && count >= FREE_LIMIT) {
    return Response.json(
      {
        error: "You have used all 5 free scope checks.",
        limitReached: true,
        checksUsed: count,
        limit: FREE_LIMIT,
      },
      { status: 402 },
    );
  }

  // Run analysis
  let analysis: AnalysisResult;
  try {
    const result = await analyzeScope(contract_text, client_message);
    // Map analyzeScope() field names → internal / DB field names
    analysis = {
      result_status: result.status as ResultStatus,
      confidence_score: result.confidence,
      ai_explanation: result.explanation,
      suggested_reply: result.suggested_reply,
    };
  } catch (err) {
    console.error("[scope-check] AI analysis failed:", err);
    return Response.json(
      { error: "Analysis failed. Please try again." },
      { status: 502 },
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error: insertError } = await (supabase as any)
    .from("scope_checks")
    .insert({
      user_id: user.id,
      contract_text,
      client_message,
      result_status: analysis.result_status,
      ai_explanation: analysis.ai_explanation,
      suggested_reply: analysis.suggested_reply,
      confidence_score: analysis.confidence_score,
    });

  if (insertError) {
    // Non-fatal — return result even if save fails
    console.error("[scope-check] Failed to save result:", insertError.message);
  }

  return Response.json(analysis);
}
