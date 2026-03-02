import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { syncUserToSupabase } from "@/lib/user-sync";

/**
 * Protected route group layout — all routes inside /app/(app)/ require auth.
 *
 * On every render:
 *  - Redirects unauthenticated users to /sign-in (belt-and-suspenders; middleware handles this first)
 *  - Syncs the Clerk user to Supabase (idempotent upsert — fast no-op after first login)
 */
export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Fetch full user object for sync (only hits Clerk API once per request)
  const user = await currentUser();

  if (user) {
    const primaryEmail =
      user.emailAddresses.find((e) => e.id === user.primaryEmailAddressId)
        ?.emailAddress ?? user.emailAddresses[0]?.emailAddress;

    if (primaryEmail) {
      try {
        await syncUserToSupabase({
          clerkId: user.id,
          email: primaryEmail,
          fullName:
            [user.firstName, user.lastName].filter(Boolean).join(" ").trim() ||
            null,
          avatarUrl: user.imageUrl ?? null,
        });
      } catch (err) {
        // Non-fatal: log and continue — don't block the user from accessing the app
        console.error("[AppLayout] User sync failed:", err);
      }
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      {children}
    </div>
  );
}
