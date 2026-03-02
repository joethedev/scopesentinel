import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

/**
 * Browser-side Supabase client using the anon key.
 * Safe to use in Client Components.
 * RLS policies control what data is accessible.
 */
export function createSupabaseBrowserClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
