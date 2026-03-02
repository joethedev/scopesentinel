/**
 * POST /api/scope-check
 *
 * Accepts { contract_text, client_message }, runs AI analysis,
 * saves the result to Supabase, and returns the result to the client.
 *
 * AI integration: replace the `runAnalysis()` stub below with your
 * preferred model (OpenAI, Anthropic, etc.).
 */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
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
// AI stub — swap this for a real model call
// ---------------------------------------------------------------------------
async function runAnalysis(
  contractText: string,
  clientMessage: string,
): Promise<AnalysisResult> {
  // Inputs are forwarded to the AI model.
  // TODO: replace with OpenAI / Anthropic call, e.g.:
  //   const prompt = buildPrompt(contractText, clientMessage);
  void contractText;
  void clientMessage;
  //
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // const completion = await openai.chat.completions.create({ ... });
  // return parseResult(completion);

  return {
    result_status: "out_of_scope",
    confidence_score: 87,
    ai_explanation:
      "The client is requesting a mobile application, which is not included in the agreed deliverables. Section 2 of your contract specifies a web application consisting of three screens. A mobile app constitutes a separate platform requiring independent design, development, and testing resources.",
    suggested_reply:
      "Hi,\n\nThank you for your message. I've reviewed your request against our signed agreement (Project Brief v1.2, Section 2 — Deliverables).\n\nThe current scope covers a web application with three defined screens. A mobile application falls outside the agreed deliverables.\n\nI'd be happy to scope this separately and provide a revised quote. I can have a proposal ready by end of week — let me know if you'd like to proceed.\n\nBest regards",
  };
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

  // Run analysis
  let analysis: AnalysisResult;
  try {
    analysis = await runAnalysis(contract_text, client_message);
  } catch (err) {
    console.error("[scope-check] AI analysis failed:", err);
    return Response.json(
      { error: "Analysis failed. Please try again." },
      { status: 502 },
    );
  }

  // Persist to Supabase
  const supabase = createSupabaseServerClient();

  // Resolve internal user id from clerk_id
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
