"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-slate-950">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-100 bg-slate-400/5 dark:bg-slate-600/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              AI-Powered Freelancer Protection
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-[1.08] tracking-tight mb-6 animate-fade-in-up delay-100">
              Stop Losing Money
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
                to Bad Clients.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-200">
              ScopeSentinel helps freelancers detect risky clients before
              signing and protect their scope during projects — with the
              confidence of a professional system behind every decision.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 animate-fade-in-up delay-300">
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Analyze My Next Client
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-500 animate-fade-in-up delay-400">
              No credit card required.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-100 dark:border-slate-800 animate-fade-in-up delay-400">
              {[
                { value: "2,400+", label: "Freelancers Protected" },
                { value: "€1.2M", label: "Revenue Saved" },
                { value: "94%", label: "Risk Accuracy" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-float">
            <div className="relative grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {/* Glow effect behind cards */}
              <div className="absolute inset-4 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-2xl blur-2xl" />

              {/* Card 1: Risk Score */}
              <div className="relative col-span-1 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Risk Score
                  </div>
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </div>

                {/* Score ring */}
                <div className="flex justify-center my-2">
                  <div className="relative w-24 h-24">
                    <svg viewBox="0 0 80 80" className="w-24 h-24 -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="6"
                        className="dark:stroke-slate-700"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="220"
                        strokeDashoffset="88"
                        className="score-circle"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        67
                      </span>
                      <span className="text-[10px] text-amber-500 font-medium">
                        Medium
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 mt-3">
                  {[
                    {
                      label: "Payment History",
                      color: "bg-red-500",
                      w: "w-4/5",
                    },
                    {
                      label: "Scope Clarity",
                      color: "bg-amber-400",
                      w: "w-1/2",
                    },
                    {
                      label: "Contract Terms",
                      color: "bg-emerald-500",
                      w: "w-3/4",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-500 mb-0.5">
                        <span>{item.label}</span>
                      </div>
                      <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} ${item.w} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Red Flags */}
              <div className="relative col-span-1 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl p-5">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Red Flags
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Vague deliverables", severity: "high" },
                    { label: "No milestone plan", severity: "med" },
                    { label: "Unclear budget", severity: "high" },
                    { label: "Rush timeline", severity: "med" },
                  ].map((flag) => (
                    <div key={flag.label} className="flex items-start gap-1.5">
                      <div
                        className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${flag.severity === "high" ? "bg-red-500" : "bg-amber-400"}`}
                      />
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                        {flag.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[10px] text-red-500 font-semibold">
                    2 critical flags detected
                  </div>
                </div>
              </div>

              {/* Card 3: ScopeGuard — full width */}
              <div className="col-span-2 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                        <path
                          d="M8 3L13 6V10C13 12.2 10.85 13.75 8 14C5.15 13.75 3 12.2 3 10V6L8 3Z"
                          stroke="#0891b2"
                          strokeWidth="1.5"
                          fill="none"
                          className="dark:stroke-cyan-400"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      ScopeGuard Analysis
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-medium border border-red-100 dark:border-red-900/50">
                    Out of Scope
                  </span>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 mb-3 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-700/50">
                  &ldquo;Can you also add a mobile app version? It should only
                  take a few days and it&apos;s basically the same
                  thing...&rdquo;
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Professional reply drafted
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3 h-3 shrink-0"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Contract clause identified
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
