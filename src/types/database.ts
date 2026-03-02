/**
 * Auto-generate this file from your Supabase project:
 *   npx supabase gen types typescript --project-id <your-project-id> > src/types/database.ts
 *
 * Until then, this stub keeps TypeScript happy.
 */
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          clerk_id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          clerk_id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      scope_checks: {
        Row: {
          id: string;
          user_id: string;
          contract_text: string;
          client_message: string;
          result_status: "in_scope" | "out_of_scope" | "unclear";
          ai_explanation: string | null;
          suggested_reply: string | null;
          confidence_score: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          contract_text: string;
          client_message: string;
          result_status: "in_scope" | "out_of_scope" | "unclear";
          ai_explanation?: string | null;
          suggested_reply?: string | null;
          confidence_score?: number | null;
          created_at?: string;
        };
        Update: {
          contract_text?: string;
          client_message?: string;
          result_status?: "in_scope" | "out_of_scope" | "unclear";
          ai_explanation?: string | null;
          suggested_reply?: string | null;
          confidence_score?: number | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      current_user_id: {
        Args: Record<string, never>;
        Returns: string;
      };
    };
    Enums: Record<string, never>;
  };
};
