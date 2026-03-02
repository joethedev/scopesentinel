export default function RDFinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-cyan-950 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950" />

      {/* Atmospheric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-75 h-50 bg-cyan-400/5 rounded-full blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-8">
          <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
            <path
              d="M14 3L24 7.5V14C24 19 19.7 23 14 24.5C8.3 23 4 19 4 14V7.5L14 3Z"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M10 14L13 17L18 11"
              stroke="#22d3ee"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
          Make Confident Decisions
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200">
            Before You Sign.
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Uncertainty is expensive. Every contract you sign without a structured
          risk assessment is a calculated exposure. Make that calculation work
          for you.
        </p>

        <div className="flex flex-col items-center gap-3">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5 text-base">
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
          </button>
          <p className="text-sm text-slate-500">No credit card required.</p>
        </div>

        {/* Reassurance row */}
        <div className="mt-14 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { icon: "clock", text: "Ready in 2 minutes" },
            { icon: "shield", text: "GDPR Compliant" },
            { icon: "lock", text: "Data encrypted" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              {item.icon === "clock" && (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 text-slate-600 shrink-0"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M8 5V8.5L10 10"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {item.icon === "shield" && (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 text-slate-600 shrink-0"
                >
                  <path
                    d="M8 2L13 4.5V8C13 11 10.8 13.2 8 14C5.2 13.2 3 11 3 8V4.5L8 2Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    fill="none"
                  />
                  <path
                    d="M5.5 8L7 9.5L10.5 6"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.icon === "lock" && (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="w-4 h-4 text-slate-600 shrink-0"
                >
                  <rect
                    x="3"
                    y="7"
                    width="10"
                    height="7"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M5.5 7V5.5C5.5 4.119 6.619 3 8 3C9.381 3 10.5 4.119 10.5 5.5V7"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="10.5" r="1" fill="currentColor" />
                </svg>
              )}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
