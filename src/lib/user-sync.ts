import { createSupabaseServerClient } from "@/lib/supabase/server";

interface SyncUserPayload {
  clerkId: string;
  email: string;
  fullName?: string | null;
  avatarUrl?: string | null;
}

/**
 * Upserts a Clerk user into the Supabase `users` table.
 * Safe to call on every authenticated request — upsert is idempotent.
 *
 * Uses `clerk_id` as the conflict key so re-syncing is a no-op unless
 * the email, name, or avatar changed.
 */
export async function syncUserToSupabase({
  clerkId,
  email,
  fullName,
  avatarUrl,
}: SyncUserPayload): Promise<void> {
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.from("users").upsert(
    {
      clerk_id: clerkId,
      email,
      full_name: fullName ?? null,
      avatar_url: avatarUrl ?? null,
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: "clerk_id",
      ignoreDuplicates: false, // always update name/avatar if changed
    },
  );

  if (error) {
    console.error("[syncUserToSupabase] Upsert failed:", error.message);
    throw new Error(`User sync failed: ${error.message}`);
  }
}
