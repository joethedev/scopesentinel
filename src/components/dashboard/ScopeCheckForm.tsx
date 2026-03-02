"use client";

import { useState, useRef } from "react";

type ResultStatus = "in_scope" | "out_of_scope" | "unclear";
type ContractInputMode = "paste" | "pdf";

interface AnalysisResult {
  result_status: ResultStatus;
  confidence_score: number;
  ai_explanation: string;
  suggested_reply: string;
}

interface LimitInfo {
  limitReached: true;
  checksUsed: number;
  limit: number;
  error: string;
}

const STATUS_CONFIG: Record<
  ResultStatus,
  { label: string; color: string; bg: string; border: string; dot: string }
> = {
  out_of_scope: {
    label: "Out of Scope",
    color: "text-red-500 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-900/50",
    dot: "bg-red-500 dark:bg-red-400",
  },
  in_scope: {
    label: "In Scope",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-900/50",
    dot: "bg-emerald-500 dark:bg-emerald-400",
  },
  unclear: {
    label: "Unclear",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-900/50",
    dot: "bg-amber-500 dark:bg-amber-400",
  },
};

export default function ScopeCheckForm() {
  const [contractText, setContractText] = useState("");
  const [clientMessage, setClientMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [limitInfo, setLimitInfo] = useState<LimitInfo | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // PDF upload state
  const [contractMode, setContractMode] = useState<ContractInputMode>("paste");
  const [pdfFileName, setPdfFileName] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canSubmit =
    contractText.trim().length > 20 && clientMessage.trim().length > 5;

  async function handleAnalyze() {
    if (!canSubmit || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    setLimitInfo(null);

    try {
      const res = await fetch("/api/scope-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contract_text: contractText,
          client_message: clientMessage,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 402 && data.limitReached) {
        setLimitInfo(data as LimitInfo);
        return;
      }

      if (!res.ok) {
        throw new Error(data.error ?? `Request failed (${res.status})`);
      }

      setResult(data as AnalysisResult);

      // Scroll result into view on mobile
      setTimeout(
        () =>
          resultRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        80,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(file: File) {
    if (!file) return;
    setPdfLoading(true);
    setPdfError(null);
    setContractText("");
    setPdfFileName(null);

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await fetch("/api/parse-pdf", { method: "POST", body: form });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Failed to parse PDF.");
      setContractText(body.text);
      setPdfFileName(file.name);
    } catch (err) {
      setPdfError(err instanceof Error ? err.message : "Failed to parse PDF.");
    } finally {
      setPdfLoading(false);
    }
  }

  function clearPdf() {
    setContractText("");
    setPdfFileName(null);
    setPdfError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function copyReply() {
    if (!result?.suggested_reply) return;
    await navigator.clipboard.writeText(result.suggested_reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const status = result ? STATUS_CONFIG[result.result_status] : null;

  return (
    <div className="space-y-6">
      {/* Input grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Contract text */}
        <div className="flex flex-col gap-2">
          {/* Label + tab toggle */}
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Contract Text
            </label>
            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-0.5 gap-0.5">
              {(["paste", "pdf"] as ContractInputMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setContractMode(mode);
                    if (mode === "paste") clearPdf();
                  }}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                    contractMode === mode
                      ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  {mode === "paste" ? "Paste text" : "Upload PDF"}
                </button>
              ))}
            </div>
          </div>

          {contractMode === "paste" ? (
            <textarea
              id="contract"
              value={contractText}
              onChange={(e) => setContractText(e.target.value)}
              placeholder="Paste the relevant section of your signed contract — deliverables clause, scope statement, or full agreement."
              rows={12}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/40 dark:focus:ring-cyan-500/30 focus:border-cyan-400 dark:focus:border-cyan-700 transition-colors leading-relaxed"
            />
          ) : (
            <div className="flex flex-col gap-2">
              {/* Drop zone */}
              <label
                className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer transition-colors h-52 px-4 text-center ${
                  pdfLoading
                    ? "border-cyan-300 dark:border-cyan-800 bg-cyan-50/30 dark:bg-cyan-950/10"
                    : pdfFileName
                      ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/10"
                      : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:border-cyan-300 dark:hover:border-cyan-700 hover:bg-cyan-50/20 dark:hover:bg-cyan-950/10"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload(f);
                  }}
                  disabled={pdfLoading}
                />

                {pdfLoading ? (
                  <>
                    <svg
                      className="w-6 h-6 text-cyan-500 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Extracting text&hellip;
                    </p>
                  </>
                ) : pdfFileName ? (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7 text-emerald-500 dark:text-emerald-400"
                    >
                      <path
                        d="M9 12L11.5 14.5L15.5 10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="14,2 14,8 20,8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 truncate max-w-48">
                        {pdfFileName}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        Text extracted successfully
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7 text-slate-400 dark:text-slate-500"
                    >
                      <path
                        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="14,2 14,8 20,8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="18"
                        x2="12"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <polyline
                        points="9,15 12,12 15,15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        Click to upload or drag &amp; drop
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        PDF only &mdash; max 5 MB
                      </p>
                    </div>
                  </>
                )}
              </label>

              {/* PDF actions row */}
              {(pdfFileName || pdfError) && (
                <div className="flex items-center justify-between gap-3">
                  {pdfError && (
                    <p className="text-xs text-red-600 dark:text-red-400">
                      {pdfError}
                    </p>
                  )}
                  {pdfFileName && !pdfError && (
                    <p className="text-xs text-slate-400 dark:text-slate-500 truncate">
                      {contractText.length.toLocaleString()} characters
                      extracted
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={clearPdf}
                    className="ml-auto text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Client message */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest"
          >
            Client Message
          </label>
          <textarea
            id="message"
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
            placeholder="Paste the client's email, Slack message, or meeting note that you need to evaluate."
            rows={12}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/40 dark:focus:ring-cyan-500/30 focus:border-cyan-400 dark:focus:border-cyan-700 transition-colors leading-relaxed"
          />
        </div>
      </div>

      {/* Analyze button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleAnalyze}
          disabled={!canSubmit || loading}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-cyan-600 dark:disabled:hover:bg-cyan-500 transition-all duration-200 shadow-md shadow-cyan-500/15 hover:shadow-cyan-500/25 hover:-translate-y-px active:translate-y-0"
        >
          {loading ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Analysing&hellip;
            </>
          ) : (
            <>
              Analyse Scope
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                <path
                  d="M4 10H16M10 4L16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>

        {!canSubmit && !loading && (
          <p className="text-xs text-slate-400 dark:text-slate-600">
            Paste both inputs to continue.
          </p>
        )}
      </div>

      {/* Error state */}
      {error && (
        <div className="rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 px-5 py-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Free-tier limit reached */}
      {limitInfo && (
        <div className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/20 overflow-hidden">
          <div className="px-6 py-5 flex items-start gap-4">
            {/* Lock icon */}
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-5 h-5 text-amber-600 dark:text-amber-400"
              >
                <rect
                  x="4"
                  y="9"
                  width="12"
                  height="9"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 9V6a3 3 0 016 0v3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="13.5" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm">
                Free check limit reached
              </p>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-400/80">
                You&rsquo;ve used all {limitInfo.limit} free scope checks.
                Upgrade to Pro for unlimited analyses, priority support, and
                advanced reporting.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="/scope-guard#pricing"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-500 transition-colors shadow-sm shadow-amber-500/20"
                >
                  Upgrade to Pro
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M3 8H13M8 3L13 8L8 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
        <div
          ref={resultRef}
          className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 overflow-hidden"
        >
          {/* Status header */}
          <div
            className={`flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800 ${status.bg}`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${status.dot}`}
              />
              <span
                className={`text-lg font-bold tracking-tight ${status.color}`}
              >
                {status.label}
              </span>
            </div>

            {/* Confidence */}
            <div className="flex flex-col items-end gap-1.5 min-w-25">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
                  {result.confidence_score.toFixed(0)}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  % confidence
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${status.dot}`}
                  style={{ width: `${result.confidence_score}%` }}
                />
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
              Analysis
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {result.ai_explanation}
            </p>
          </div>

          {/* Suggested reply */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                Suggested Reply
              </p>
              <button
                onClick={copyReply}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                {copied ? (
                  <>
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="w-3.5 h-3.5 text-emerald-500"
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="w-3.5 h-3.5"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="8"
                        height="8"
                        rx="1.2"
                        stroke="currentColor"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M2 10V2H10"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 px-5 py-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                {result.suggested_reply}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
