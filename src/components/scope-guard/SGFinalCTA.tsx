export default function SGFinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-950/60 via-slate-900 to-slate-950 dark:from-cyan-950/40 dark:via-slate-950 dark:to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Shield icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-8 mx-auto">
          <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden>
            <path
              d="M16 3L4 8V17C4 23.6 9.3 29.6 16 31C22.7 29.6 28 23.6 28 17V8L16 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 16L14.5 19.5L21 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
          Protect Your Revenue
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200">
            During Every Project.
          </span>
        </h2>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Every freelancer loses money to scope creep. Most don&apos;t realise
          it until the project is over. ScopeGuard catches it in the moment —
          when you can still act.
        </p>

        <div className="flex flex-col items-center gap-4">
          <button className="inline-flex items-center gap-2.5 px-10 py-4 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 text-[15px]">
            Start Free Scope Check
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <path
                d="M4 10H16M10 4L16 10L10 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-sm text-slate-500">
            5 free checks included. No credit card required.
          </p>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {[
            { value: "€3,200", label: "Average scope creep loss per project" },
            { value: "12 sec", label: "Time to get your first check result" },
            {
              value: "Free",
              label: "To start — upgrade when you&apos;re ready",
            },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-2xl font-black text-white mb-0.5">
                {stat.value}
              </div>
              <div
                className="text-xs text-slate-500 max-w-30 mx-auto leading-snug"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
