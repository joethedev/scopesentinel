export default function RDHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 bg-cyan-500/5 dark:bg-cyan-400/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-100 bg-slate-300/10 dark:bg-slate-700/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
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
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              Free Client Risk Assessment
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 dark:text-slate-50 leading-[1.1] tracking-tight mb-5 animate-fade-in-up delay-100">
              Is Your Next Client
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
                a Financial Risk?
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-200">
              Answer 12 structured behavioral questions. Receive a professional
              risk score, red flag report, and contract guidance — before you
              sign.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 animate-fade-in-up delay-300">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 text-[15px]">
                Run Free Risk Check
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
                Takes 2 minutes. No credit card required.
              </p>
            </div>

            {/* Credibility ticks */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 justify-center lg:justify-start animate-fade-in-up delay-400">
              {[
                "12 behavioral questions",
                "Instant risk score",
                "Contract clause guidance",
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

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-float">
            {/* Glow */}
            <div className="absolute inset-6 bg-cyan-400/8 dark:bg-cyan-400/6 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="ml-2 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  Risk Report — Client Assessment
                </span>
              </div>

              <div className="p-6 space-y-5">
                {/* Score row */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                      Overall Risk Score
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold text-slate-900 dark:text-slate-50">
                        72
                      </span>
                      <span className="text-lg text-slate-400 dark:text-slate-500 mb-1">
                        /100
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-sm font-bold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/50">
                      High Risk
                    </span>
                    <div className="text-xs text-slate-400 dark:text-slate-500">
                      Assessed Feb 2026
                    </div>
                  </div>
                </div>

                {/* Score bar */}
                <div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-linear-to-r from-amber-400 to-red-500 transition-all" />
                  </div>
                  <div className="flex justify-between mt-1.5">
                    <span className="text-[10px] text-slate-400 dark:text-slate-600">
                      Low
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-600">
                      High
                    </span>
                  </div>
                </div>

                {/* Category breakdown */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "Communication",
                      score: 55,
                      color: "bg-amber-400",
                    },
                    {
                      label: "Payment History",
                      score: 30,
                      color: "bg-red-500",
                    },
                    { label: "Scope Clarity", score: 42, color: "bg-red-400" },
                  ].map((cat) => (
                    <div
                      key={cat.label}
                      className="rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 p-3 text-center"
                    >
                      <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
                        {cat.score}
                      </div>
                      <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">
                        {cat.label}
                      </div>
                      <div className="mt-2 h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${cat.color} rounded-full`}
                          style={{ width: `${cat.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Red flags */}
                <div className="rounded-xl border border-red-100 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3.5 h-3.5 text-red-500 dark:text-red-400 shrink-0"
                    >
                      <path
                        d="M8 2L14 13H2L8 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6V9M8 11V11.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">
                      Red Flags Detected
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Resistance to written contract",
                      "Unrealistic delivery deadline",
                      "Vague scope description",
                    ].map((flag) => (
                      <div key={flag} className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 shrink-0" />
                        <span className="text-xs text-red-700 dark:text-red-300">
                          {flag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggested action */}
                <div className="flex items-start gap-3 rounded-xl border border-cyan-100 dark:border-cyan-900/40 bg-cyan-50 dark:bg-cyan-950/20 p-4">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5"
                  >
                    <path
                      d="M8 2L13 5V9C13 11.8 10.8 13.5 8 14C5.2 13.5 3 11.8 3 9V5L8 2Z"
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
                  <div>
                    <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mb-0.5">
                      Recommendation
                    </div>
                    <div className="text-xs text-cyan-700 dark:text-cyan-300 leading-relaxed">
                      Request a structured contract with milestone payments
                      before proceeding.
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
