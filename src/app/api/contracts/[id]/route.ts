/**
 * DELETE /api/contracts/[id]  — delete a contract owned by the current user
 */
import { auth } from "@clerk/nextjs/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

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
  const { error } = await (supabase as any)
    .from("contracts")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id); // ensures ownership

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return new Response(null, { status: 204 });
}
