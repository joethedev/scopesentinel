"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ScopeCheck {
  id: string;
  client_message: string;
  result_status: "in_scope" | "out_of_scope" | "unclear";
  confidence_score: number | null;
  ai_explanation: string | null;
  suggested_reply: string | null;
  created_at: string;
}

const STATUS_CONFIG = {
  in_scope: {
    label: "In Scope",
    badgeClass: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50",
    dot: "bg-emerald-500",
  },
  out_of_scope: {
    label: "Out of Scope",
    badgeClass: "bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/50",
    dot: "bg-red-500",
  },
  unclear: {
    label: "Unclear",
    badgeClass: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/50",
    dot: "bg-amber-500",
  },
};

function StatusBadge({ status }: { status: keyof typeof STATUS_CONFIG }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.badgeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function ScoreBar({ score }: { score: number | null }) {
  if (score === null) return <span className="text-xs text-slate-400">—</span>;
  return (
    <div className="flex items-center gap-2">
      <div className="w-20 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs tabular-nums font-semibold text-slate-700 dark:text-slate-300">
        {score.toFixed(0)}%
      </span>
    </div>
  );
}

// Expandable row for check details
function CheckRow({ check }: { check: ScopeCheck }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function copyReply() {
    if (!check.suggested_reply) return;
    navigator.clipboard.writeText(check.suggested_reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const snippet =
    check.client_message.length > 120
      ? check.client_message.slice(0, 120) + "…"
      : check.client_message;

  return (
    <li className="border-b border-slate-100 dark:border-slate-800 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
      >
        {/* Chevron */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        >
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Message snippet */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-700 dark:text-slate-300 truncate">{snippet}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {formatDate(check.created_at)}
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="hidden sm:block shrink-0">
          <ScoreBar score={check.confidence_score} />
        </div>

        {/* Status */}
        <div className="shrink-0">
          <StatusBadge status={check.result_status} />
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="px-14 pb-5 space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
              Client Message
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {check.client_message}
            </p>
          </div>

          {check.ai_explanation && (
            <div>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                Analysis
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {check.ai_explanation}
              </p>
            </div>
          )}

          {check.suggested_reply && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Suggested Reply
                </p>
                <button
                  onClick={copyReply}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5 text-emerald-500">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
                        <rect x="4" y="4" width="8" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
                        <path d="M2 10V2H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 px-4 py-3">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {check.suggested_reply}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function HistoryPage() {
  const [checks, setChecks] = useState<ScopeCheck[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const perPage = 20;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/scope-checks?page=${page}`)
      .then((r) => r.json())
      .then((d) => {
        setChecks(d.checks ?? []);
        setTotal(d.total ?? 0);
      })
      .finally(() => setLoading(false));
  }, [page]);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            History
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            All your past scope checks — click any row to expand.
          </p>
        </div>
        {total > 0 && (
          <span className="text-xs text-slate-400 dark:text-slate-500 pt-1 shrink-0">
            {total} check{total !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24 text-slate-400">
          <svg className="w-5 h-5 animate-spin mr-2" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading…
        </div>
      ) : checks.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="none" className="w-7 h-7 text-slate-400 dark:text-slate-500">
              <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No checks yet</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">Run your first scope check to see results here.</p>
          </div>
          <Link
            href="/dashboard/scope-check"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 transition-colors"
          >
            Run a Check
          </Link>
        </div>
      ) : (
        <>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            {/* Accent bar */}
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-cyan-300" />

            {/* Column headers */}
            <div className="hidden sm:flex items-center gap-4 px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30">
              <div className="w-4 shrink-0" />
              <div className="flex-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                Client Message
              </div>
              <div className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 w-28 text-right">
                ScopeGuard Score
              </div>
              <div className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 w-28 text-right">
                Status
              </div>
            </div>

            <ul>
              {checks.map((check) => (
                <CheckRow key={check.id} check={check} />
              ))}
            </ul>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </button>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
