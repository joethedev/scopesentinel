export default function SGPain() {
  const quotes = [
    {
      phrase: "&ldquo;It&apos;s just a small change.&rdquo;",
      phrase_raw: "\u201cIt\u2019s just a small change.\u201d",
      context:
        "The redesign request that turned a 2-hour task into a 3-day overhaul.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
          <path
            d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      phrase: "&ldquo;It won&apos;t take long.&rdquo;",
      phrase_raw: "\u201cIt won\u2019t take long.\u201d",
      context:
        "The &ldquo;quick integration&rdquo; that required three API accounts, two new libraries, and a weekend.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      phrase: "&ldquo;Can we add this quickly?&rdquo;",
      phrase_raw: "\u201cCan we add this quickly?\u201d",
      context:
        "The feature that wasn&apos;t discussed, wasn&apos;t quoted, and somehow became non-negotiable.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden>
          <path
            d="M12 5V19M5 12H19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            Scope Creep Is Rarely Obvious
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            It doesn&apos;t arrive as a demand. It arrives as a favour. A
            suggestion. A &ldquo;while you&apos;re in there&rdquo; request that
            slowly dismantles everything you quoted.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 flex flex-col gap-5 group hover:border-red-200 dark:hover:border-red-900/60 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 flex items-center justify-center border border-red-100 dark:border-red-900/40 shrink-0">
                {q.icon}
              </div>

              <div>
                <p
                  className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug mb-3"
                  dangerouslySetInnerHTML={{ __html: q.phrase }}
                />
                <p
                  className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: q.context }}
                />
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  className="w-3.5 h-3.5 text-red-400 dark:text-red-500 shrink-0"
                >
                  <path
                    d="M7 1L8.8 5.2H13L9.6 7.8L10.9 12L7 9.5L3.1 12L4.4 7.8L1 5.2H5.2L7 1Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {i === 0
                    ? "Most common pattern"
                    : i === 1
                      ? "Every freelancer has heard it"
                      : "The silent scope expansion"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tension block */}
        <div className="relative rounded-2xl border border-amber-200/60 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/10 p-8 sm:p-10 text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-amber-50/30 to-transparent dark:from-amber-950/10 dark:to-transparent pointer-events-none rounded-2xl" />
          <div className="relative">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              By the time you realise the project has grown beyond scope,
              you&apos;re already invested. Saying no feels confrontational. And
              the client knows it.
            </p>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500 font-medium">
              ScopeGuard removes the ambiguity — so the data says no, not you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
