import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 lg:flex">
      <Sidebar />
      <main className="flex-1 min-h-screen overflow-y-auto">{children}</main>
    </div>
  );
}
