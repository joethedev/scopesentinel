export default function SGHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden bg-white dark:bg-slate-950">
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 bg-cyan-500/5 dark:bg-cyan-400/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-125 h-100 bg-slate-300/8 dark:bg-slate-700/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              Real-Time Scope Protection
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 dark:text-slate-50 leading-[1.1] tracking-tight mb-5 animate-fade-in-up delay-100">
              Detect Scope Creep
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
                Before It Costs You &euro;3,000.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              Paste your contract and the client&apos;s latest message.
              ScopeGuard instantly determines whether the request falls outside
              your agreed scope — and drafts a professional response.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 animate-fade-in-up delay-300">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 text-[15px]">
                Check My Contract
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Free limited checks. No credit card required.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              {[
                "Instant classification",
                "Professional reply template",
                "Contract clause reference",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0"
                  >
                    <path
                      d="M3 8L6.5 11.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Split UI Mockup */}
          <div className="relative animate-float">
            <div className="absolute inset-4 bg-cyan-400/8 dark:bg-cyan-400/6 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="ml-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  ScopeGuard — Scope Analysis
                </span>
              </div>

              <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-800">
                {/* Left: client message */}
                <div className="p-5">
                  <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Client Message
                  </div>
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 p-3.5 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-[9px] font-bold text-white">
                        M
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-500">
                        Michael, 10:42
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      &ldquo;Hey, while you&apos;re at it — can you also build
                      out the mobile app version? It should only take a few days
                      and it&apos;s basically the same logic...&rdquo;
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-200 dark:border-slate-700 p-3 text-center">
                    <div className="text-[10px] text-slate-400 dark:text-slate-500">
                      Contract: Project Brief v1.2.pdf
                    </div>
                    <div className="text-[9px] text-slate-300 dark:text-slate-600 mt-0.5">
                      Web application — 3 screens
                    </div>
                  </div>
                </div>

                {/* Right: result */}
                <div className="p-5">
                  <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                    Analysis Result
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/50">
                      OUT OF SCOPE
                    </span>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 dark:text-slate-500">
                        Confidence
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        87%
                      </div>
                    </div>
                  </div>

                  {/* Reasoning */}
                  <div className="space-y-2 mb-4">
                    {[
                      { label: "Mobile app", note: "Not in contract scope" },
                      { label: "Additional screens", note: "Exceeds agreed 3" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 mt-1 shrink-0" />
                        <div>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {item.label}
                          </span>
                          <span className="text-slate-400 dark:text-slate-500">
                            {" "}
                            — {item.note}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Suggested reply indicator */}
                  <div className="rounded-xl border border-cyan-100 dark:border-cyan-900/40 bg-cyan-50 dark:bg-cyan-950/20 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0"
                      >
                        <path
                          d="M2 9L6 10.5L10 2L2 5.5L5 6.5L2 9Z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[10px] font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                        Reply drafted
                      </span>
                    </div>
                    <p className="text-[10px] text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      &ldquo;Thank you for the suggestion — this falls outside
                      our current scope. I&apos;d be happy to...&rdquo;
                    </p>
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
