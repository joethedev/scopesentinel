"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

const NAV_ITEMS = [
  {
    href: "/dashboard/contracts",
    label: "Contracts",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path
          d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 3v4h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 9h6M7 12h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/dashboard/scope-check",
    label: "Scope Check",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <path
          d="M10 2L4 5v5c0 3.866 2.686 7.29 6 8 3.314-.71 6-4.134 6-8V5L10 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7 10l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/dashboard/history",
    label: "History",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6v4l2.5 2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────────────────────── */}
      <div className="lg:hidden flex items-center justify-between px-4 h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <span className="font-bold text-slate-900 dark:text-white tracking-tight">
          Scope<span className="text-cyan-500">Guard</span>
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile overlay ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Sidebar ────────────────────────────────────────────────── */}
      <aside
        className={[
          "fixed top-0 left-0 z-50 h-full w-64 flex flex-col",
          "bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800",
          "transition-transform duration-300 ease-in-out",
          "lg:translate-x-0 lg:static lg:h-screen",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-6 h-16 border-b border-slate-100 dark:border-slate-800/60 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-white">
              <path
                d="M8 1L2 4v4c0 3.31 2.457 6.25 6 7 3.543-.75 6-3.69 6-7V4L8 1z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M5.5 8l2 2 3-3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-tight">
            Scope<span className="text-cyan-500">Guard</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600">
            Workspace
          </p>
          <ul className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200",
                    ].join(" ")}
                  >
                    <span
                      className={
                        active
                          ? "text-cyan-600 dark:text-cyan-400"
                          : "text-slate-400 dark:text-slate-500"
                      }
                    >
                      {item.icon}
                    </span>
                    {item.label}
                    {active && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-8 h-8",
              },
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              My account
            </p>
          </div>
          <Link
            href="/"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            title="Back to home"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path
                d="M2 8h9M6 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </aside>
    </>
  );
}
