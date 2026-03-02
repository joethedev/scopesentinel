const testimonials = [
  {
    quote:
      "The risk check flagged a client who had been vague about their budget for three weeks. I almost ignored it. The report gave me language to request clearer terms — and they walked away. That was the right outcome.",
    author: "Franziska M.",
    role: "Brand Strategist, Munich",
  },
  {
    quote:
      "As a developer working exclusively on B2B contracts, I run a risk check before every discovery call. It has fundamentally changed how I qualify clients — and how I open contract negotiations.",
    author: "Pieter V.",
    role: "Independent Software Developer, Amsterdam",
  },
  {
    quote:
      "The contract clause suggestions alone are worth the Pro subscription. They are specific, professional, and they have held up in renegotiations.",
    author: "Camille D.",
    role: "UX Consultant, Lyon",
  },
];

export default function RDAuthority() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
              Who This Is For
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight mb-4">
              Built for Serious Freelancers.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Designed for European B2B freelancers — developers, designers,
              consultants, and strategists — who treat their practice as a
              business. Not a hobby. Not a side income.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
              Client Risk Detector does not guess. It applies a structured
              behavioral framework to give you an objective, defensible basis
              for your pre-contract decisions.
            </p>

            {/* Attribute list */}
            <div className="mt-6 space-y-3">
              {[
                "Works before the first meeting or after discovery",
                "No subjective gut feeling — scored, structured output",
                "Applicable across any freelance discipline",
                "Designed around European B2B engagement patterns",
              ].map((attr) => (
                <div
                  key={attr}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5"
                  >
                    <path
                      d="M3 8L6.5 11.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {attr}
                </div>
              ))}
            </div>
          </div>

          {/* Stats panel */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 space-y-6">
            <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
              By the Numbers
            </div>
            {[
              { value: "2,400+", label: "Freelancers using ScopeSentinel" },
              { value: "94%", label: "Risk assessment accuracy" },
              { value: "€1.2M+", label: "Revenue disputes avoided" },
              { value: "12", label: "Weighted behavioral questions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-800 last:border-0 last:pb-0"
              >
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </span>
                <span className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-none transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 14 14"
                    fill="none"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      d="M7 1.5L8.39 5.09L12.25 5.38L9.44 7.78L10.32 11.5L7 9.47L3.68 11.5L4.56 7.78L1.75 5.38L5.61 5.09L7 1.5Z"
                      fill="#0891b2"
                      className="dark:fill-cyan-400"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
