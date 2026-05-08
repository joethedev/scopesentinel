/**
 * GET  /api/contracts   — list current user's contracts
 * POST /api/contracts   — create a contract
 */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// ── GET ──────────────────────────────────────────────────────────────────────
export async function GET() {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = createSupabaseServerClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: user, error: userError } = await (supabase as any)
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (userError || !user)
    return Response.json({ error: "User not found." }, { status: 404 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabase as any)
    .from("contracts")
    .select("id, title, client_name, project_name, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ contracts: data ?? [] });
}

// ── POST ─────────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

  let title: string;
  let contract_text: string;
  let description: string | null;
  let client_name: string | null;
  let project_name: string | null;

  try {
    const body = await req.json();
    title = (body.title ?? "").trim();
    contract_text = (body.contract_text ?? "").trim();
    description = body.description ? String(body.description).trim() : null;
    client_name = body.client_name ? String(body.client_name).trim() : null;
    project_name = body.project_name ? String(body.project_name).trim() : null;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!title || !contract_text)
    return Response.json(
      { error: "title and contract_text are required." },
      { status: 422 }
    );

  if (title.length > 200)
    return Response.json(
      { error: "Contract title must be 200 characters or fewer." },
      { status: 422 }
    );

  const supabase = createSupabaseServerClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: user, error: userError } = await (supabase as any)
    .from("users")
    .select("id")
    .eq("clerk_id", userId)
    .single();

  if (userError || !user)
    return Response.json({ error: "User not found." }, { status: 404 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (supabase as any)
    .from("contracts")
    .insert({ user_id: user.id, title, contract_text, description, client_name, project_name })
    .select("id, title, client_name, project_name, created_at")
    .single();

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ contract: data }, { status: 201 });
}
