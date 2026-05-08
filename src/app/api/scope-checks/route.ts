/**
 * GET /api/scope-checks  — paginated list of the current user's scope checks
 */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
  const perPage = 20;
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

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
  const { data, error, count } = await (supabase as any)
    .from("scope_checks")
    .select(
      "id, client_message, result_status, confidence_score, ai_explanation, suggested_reply, created_at",
      { count: "exact" }
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({
    checks: data ?? [],
    total: count ?? 0,
    page,
    perPage,
  });
}
