import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import ScopeCheckForm from "@/components/dashboard/ScopeCheckForm";

export const metadata = {
  title: "Scope Check — ScopeSentinel",
};

export default async function DashboardPage() {
  await auth.protect();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Page header */}
      <div className="flex items-start justify-between gap-4 mb-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Scope Check
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            Paste your contract and the client&apos;s message. Get an instant
            classification and a professional reply.
          </p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <ScopeCheckForm />
    </main>
  );
}
