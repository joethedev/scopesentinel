export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
            One System.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              Total Protection.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Two precision tools built for the specific risks freelancers face —
            before a contract is signed and after work begins.
          </p>
        </div>

        {/* Solution cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1: Client Risk Detector */}
          <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-none">
            {/* Top accent bar */}
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-cyan-300" />

            <div className="p-8">
              {/* Module badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 5V9M8 11V11.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Module 1
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Before signing
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Client Risk Detector
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Answer 12 structured questions about your prospective client.
                Receive a calibrated risk score, specific red flags, and
                contract language suggestions — before you commit.
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {[
                  "12-question structured risk assessment",
                  "0–100 risk score with category breakdown",
                  "Specific red flag identification",
                  "AI-generated contract protection clauses",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#0891b2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="dark:stroke-cyan-400"
                        />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Mini dashboard preview */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Risk Assessment
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-medium border border-amber-200 dark:border-amber-800/40">
                    Medium Risk
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      label: "Communication clarity",
                      pct: 40,
                      color: "bg-red-400",
                    },
                    {
                      label: "Budget transparency",
                      pct: 70,
                      color: "bg-amber-400",
                    },
                    {
                      label: "Reference availability",
                      pct: 85,
                      color: "bg-emerald-400",
                    },
                    {
                      label: "Timeline realism",
                      pct: 55,
                      color: "bg-amber-400",
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 dark:text-slate-500 w-28 shrink-0">
                        {row.label}
                      </span>
                      <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${row.color} rounded-full transition-all`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 w-6 text-right">
                        {row.pct}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: ScopeGuard */}
          <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-none">
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-400 to-emerald-400" />

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                    <path
                      d="M8 2L14 5V9C14 11.8 11.5 13.5 8 14C4.5 13.5 2 11.8 2 9V5L8 2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M5.5 8L7.2 9.7L10.5 6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Module 2
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  During project
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                ScopeGuard
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Paste your contract and the client&apos;s latest message.
                ScopeGuard instantly analyzes whether the request falls outside
                your agreed scope — and drafts a firm, professional response.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Contract vs. request comparison engine",
                  "Out-of-scope request detection",
                  "Professional decline / renegotiate templates",
                  "Scope boundary documentation trail",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="#10b981"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="dark:stroke-emerald-400"
                        />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ScopeGuard preview */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 space-y-3">
                <div className="rounded-lg bg-slate-50 dark:bg-slate-700/50 p-3 border border-slate-100 dark:border-slate-600/50">
                  <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">
                    Client Message
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    &ldquo;Can we also add the CRM integration? It
                    shouldn&apos;t be much work...&rdquo;
                  </p>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path
                        d="M6 3V7M6 9V9.5"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600 dark:text-red-400">
                      Out of scope — not in contract
                    </div>
                    <div className="text-slate-500 dark:text-slate-500 mt-0.5">
                      Professional response ready to send
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
