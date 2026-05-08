export default function FinalCTA() {
  const benefits = [
    "Set clear boundaries",
    "Communicate with confidence",
    "Stay professional in every situation",
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-cyan-950 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-75 h-50 bg-cyan-400/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-75 h-50 bg-slate-600/10 rounded-full blur-2xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Shield icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-8">
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
            <path
              d="M16 3L27 8.5V16C27 21.5 22.3 26.2 16 28C9.7 26.2 5 21.5 5 16V8.5L16 3Z"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M11 16L14.5 19.5L21 13"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Stop overdelivering{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200">
            for free.
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          You deserve to be paid for your work — all of it.
        </p>

        <p className="text-slate-400 mb-6">
          ScopeGuard helps you:
        </p>

        <ul className="flex flex-col items-center gap-3 mb-10">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-slate-300">
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {benefit}
            </li>
          ))}
        </ul>

        <p className="text-slate-500 mb-8 text-sm">
          No more guessing. No more overthinking. No more unpaid extras.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/30 hover:-translate-y-0.5 text-base"
          >
            Create your free account
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
        </div>

        <p className="text-sm text-slate-500">
          Takes less than a minute to get started. No credit card required.
        </p>
      </div>
    </section>
  );
}

