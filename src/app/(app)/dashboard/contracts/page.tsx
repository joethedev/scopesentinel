"use client";

import { useState, useEffect, useRef } from "react";

interface Contract {
  id: string;
  title: string;
  client_name: string | null;
  project_name: string | null;
  created_at: string;
}

// ── New contract modal ────────────────────────────────────────────────────────
function NewContractModal({ onClose, onCreated }: { onClose: () => void; onCreated: (c: Contract) => void }) {
  const [tab, setTab] = useState<"text" | "pdf">("text");
  const [title, setTitle] = useState("");
  const [contractText, setContractText] = useState("");
  const [clientName, setClientName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handlePdfUpload(file: File) {
    setPdfLoading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/parse-pdf", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "PDF parsing failed.");
      setContractText(data.text);
      if (!title) setTitle(file.name.replace(/\.pdf$/i, ""));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed.");
    } finally {
      setPdfLoading(false);
    }
  }

  async function handleSave() {
    setError("");
    if (!title.trim()) { setError("Please enter a contract title."); return; }
    if (!contractText.trim()) { setError("Please add contract text."); return; }
    setSaving(true);
    try {
      const res = await fetch("/api/contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          contract_text: contractText.trim(),
          client_name: clientName.trim() || null,
          project_name: projectName.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to save contract.");
      onCreated(data.contract);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">New Contract</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M4 4l8 8M12 4L4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 space-y-4 overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">
              Contract Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Website Redesign — Client ABC"
              maxLength={200}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-2.5 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
            />
          </div>

          {/* Client / Project row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">
                Client Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-2.5 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">
                Project Name
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-2.5 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
              />
            </div>
          </div>

          {/* Tab selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1.5">
              Contract Text <span className="text-red-400">*</span>
            </label>
            <div className="flex gap-2 mb-3">
              {(["text", "pdf"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTab(t); setError(""); }}
                  className={[
                    "px-4 py-1.5 rounded-lg text-sm font-medium transition-colors",
                    tab === t
                      ? "bg-cyan-600 text-white dark:bg-cyan-500"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700",
                  ].join(" ")}
                >
                  {t === "pdf" ? "Upload PDF" : "Paste Text"}
                </button>
              ))}
            </div>

            {tab === "text" ? (
              <textarea
                value={contractText}
                onChange={(e) => setContractText(e.target.value)}
                rows={8}
                placeholder="Paste your contract or scope-of-work document here…"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 px-4 py-3 placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
              />
            ) : (
              <>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const file = e.dataTransfer.files[0];
                    if (file?.type === "application/pdf") { setPdfFile(file); handlePdfUpload(file); }
                  }}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 px-6 py-8 cursor-pointer hover:border-cyan-400 dark:hover:border-cyan-600 transition-colors"
                >
                  {pdfLoading ? (
                    <svg className="w-5 h-5 animate-spin text-cyan-500" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : pdfFile ? (
                    <>
                      <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6 text-violet-500">
                        <path d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{pdfFile.name}</p>
                      {contractText && <p className="text-xs text-emerald-500">✓ Text extracted</p>}
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6 text-slate-400">
                        <path d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M10 8v6M7 11l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Drop your PDF here or <span className="text-cyan-600 dark:text-cyan-400">click to browse</span></p>
                      <p className="text-xs text-slate-400 dark:text-slate-600">PDF only · max 5 MB</p>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) { setPdfFile(file); handlePdfUpload(file); }
                  }}
                />
              </>
            )}
          </div>

          {error && (
            <p className="text-xs text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || pdfLoading}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm shadow-cyan-500/20"
          >
            {saving ? (
              <>
                <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving…
              </>
            ) : "Save Contract"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ContractsPage() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/contracts")
      .then((r) => r.json())
      .then((d) => setContracts(d.contracts ?? []))
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: string) {
    setDeletingId(id);
    try {
      await fetch(`/api/contracts/${id}`, { method: "DELETE" });
      setContracts((prev) => prev.filter((c) => c.id !== id));
    } finally {
      setDeletingId(null);
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Contracts</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Save your contracts to reuse them in scope checks.</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-colors shadow-sm shadow-cyan-500/20 shrink-0"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            New Contract
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24 text-slate-400">
            <svg className="w-5 h-5 animate-spin mr-2" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Loading…
          </div>
        ) : contracts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="none" className="w-7 h-7 text-slate-400 dark:text-slate-500">
                <path d="M5 3h7l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 3v4h4M7 9h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">No contracts yet</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">Add your first contract to start doing scope checks.</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Add Contract
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-cyan-300" />
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {contracts.map((contract) => (
                <li key={contract.id} className="flex items-center gap-4 px-6 py-4 group">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-slate-500 dark:text-slate-400">
                      <path d="M4 2h5l4 4v8a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                      <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">{contract.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {contract.client_name && (
                        <span className="text-xs text-slate-400 dark:text-slate-500">{contract.client_name}</span>
                      )}
                      {contract.client_name && contract.project_name && (
                        <span className="text-xs text-slate-300 dark:text-slate-700">·</span>
                      )}
                      {contract.project_name && (
                        <span className="text-xs text-slate-400 dark:text-slate-500">{contract.project_name}</span>
                      )}
                      {!contract.client_name && !contract.project_name && (
                        <span className="text-xs text-slate-400 dark:text-slate-500">{formatDate(contract.created_at)}</span>
                      )}
                    </div>
                  </div>
                  {(contract.client_name || contract.project_name) && (
                    <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">{formatDate(contract.created_at)}</span>
                  )}
                  <button
                    onClick={() => handleDelete(contract.id)}
                    disabled={deletingId === contract.id}
                    className="ml-1 p-1.5 rounded-lg text-slate-300 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 opacity-0 group-hover:opacity-100 transition-all disabled:opacity-30"
                    title="Delete contract"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                      <path d="M3 4h10M5 4V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V4M6 7v5M10 7v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      <path d="M4 4l.6 9a.5.5 0 00.5.5h6.8a.5.5 0 00.5-.5L13 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {showModal && (
        <NewContractModal
          onClose={() => setShowModal(false)}
          onCreated={(c) => setContracts((prev) => [c, ...prev])}
        />
      )}
    </>
  );
}
