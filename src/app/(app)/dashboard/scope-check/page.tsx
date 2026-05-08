"use client";

import { useState, useEffect, useRef } from "react";

interface Contract {
  id: string;
  title: string;
  client_name: string | null;
  project_name: string | null;
  created_at: string;
}

interface AnalysisResult {
  result_status: "in_scope" | "out_of_scope" | "unclear";
  confidence_score: number;
  ai_explanation: string;
  suggested_reply: string;
}

const STATUS_CONFIG = {
  in_scope: {
    label: "In Scope",
    color: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
  },
  out_of_scope: {
    label: "Out of Scope",
    color: "text-red-700 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/20",
    dot: "bg-red-500",
    bar: "bg-red-500",
  },
  unclear: {
    label: "Unclear",
    color: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
  },
};

export default function ScopeCheckPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [contractsLoading, setContractsLoading] = useState(true);

  const [selectedContractId, setSelectedContractId] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [limitInfo, setLimitInfo] = useState<{
    checksUsed: number;
    limit: number;
  } | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/contracts")
      .then((r) => r.json())
      .then((d) => setContracts(d.contracts ?? []))
      .finally(() => setContractsLoading(false));
  }, []);

  useEffect(() => {
    if (result) {
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    }
  }, [result]);

  async function handleAnalyze() {
    setError("");
    setResult(null);
    setLimitInfo(null);
    setLoading(true);

    try {
      const res = await fetch("/api/scope-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contract_id: selectedContractId || undefined,
          client_message: clientMessage,
        }),
      });

      const data = await res.json();

      if (res.status === 402) {
        setLimitInfo({ checksUsed: data.checksUsed, limit: data.limit });
        return;
      }
      if (!res.ok) throw new Error(data.error ?? "Analysis failed.");

      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function copyReply() {
    if (!result?.suggested_reply) return;
    navigator.clipboard.writeText(result.suggested_reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const canSubmit = selectedContractId && clientMessage.trim().length > 10;
  const status = result ? STATUS_CONFIG[result.result_status] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Scope Check
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Select a contract, paste the client&apos;s message, and get an instant answer.
        </p>
      </div>

      <div className="space-y-5">
        {/* Contract selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
            Contract
          </label>
          {contractsLoading ? (
            <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 py-3">
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading contracts…
            </div>
          ) : contracts.length === 0 ? (
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 px-4 py-4 flex items-center gap-3">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-slate-400 shrink-0">
                <path d="M4 2h5l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                No contracts yet.{" "}
                <a href="/dashboard/contracts" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
                  Add one first
                </a>
              </span>
            </div>
          ) : (
            <select
              value={selectedContractId}
              onChange={(e) => setSelectedContractId(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
            >
              <option value="">Select a contract…</option>
              {contracts.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}{c.client_name ? ` — ${c.client_name}` : ""}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Client message */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
            Client Message
          </label>
          <textarea
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
            rows={5}
            placeholder="Paste the client's message or request here…"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-3 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
          />
        </div>

        {/* Analyze button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleAnalyze}
            disabled={!canSubmit || loading}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-cyan-500/15 hover:shadow-cyan-500/25 hover:-translate-y-px active:translate-y-0"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analysing&hellip;
              </>
            ) : (
              <>
                Analyse Scope
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M4 10H16M10 4L16 10L10 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
          {!canSubmit && !loading && (
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Select a contract and paste a message to continue.
            </p>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 px-5 py-4 text-sm text-red-700 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Free limit */}
        {limitInfo && (
          <div className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/20 overflow-hidden">
            <div className="px-6 py-5 flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-amber-600 dark:text-amber-400">
                  <rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="13.5" r="1" fill="currentColor" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm">Free check limit reached</p>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-400/80">
                  You&rsquo;ve used all {limitInfo.limit} free scope checks. Upgrade to Pro for unlimited analyses.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href="/scope-guard#pricing"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 transition-colors shadow-sm shadow-amber-500/20"
                  >
                    Upgrade to Pro
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path d="M3 8H13M8 3L13 8L8 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <span className="text-xs text-amber-600/70 dark:text-amber-500/70">
                    {limitInfo.checksUsed} / {limitInfo.limit} checks used
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Result card */}
        {result && status && (
          <div ref={resultRef} className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 overflow-hidden">
            {/* Top accent */}
            <div className={`h-0.5 w-full ${status.bar}`} />

            {/* Status header */}
            <div className={`flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 ${status.bg}`}>
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${status.dot}`} />
                <span className={`text-lg font-bold tracking-tight ${status.color}`}>{status.label}</span>
              </div>
              <div className="flex flex-col items-end gap-1.5 min-w-[6rem]">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
                    {result.confidence_score.toFixed(0)}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">% confidence</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${status.bar}`}
                    style={{ width: `${result.confidence_score}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Analysis</p>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{result.ai_explanation}</p>
            </div>

            {/* Suggested reply */}
            <div className="px-6 py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Suggested Reply</p>
                <button
                  onClick={copyReply}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
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
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 px-5 py-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {result.suggested_reply}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
