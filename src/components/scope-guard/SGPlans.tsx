export default function SGPlans() {
  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "forever",
      description: "Test ScopeGuard on your current project before committing.",
      cta: "Start Free",
      ctaStyle:
        "border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-300 dark:hover:border-cyan-700 hover:text-cyan-700 dark:hover:text-cyan-400",
      features: [
        "5 scope checks per month",
        "In-scope / out-of-scope verdict",
        "Confidence score",
        "Basic draft reply",
        "Standard processing",
      ],
      limitations: [
        "No contract clause reference",
        "No advanced interpretation",
        "No revision history",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "€19",
      period: "per month",
      description:
        "Full protection for active freelancers managing ongoing client relationships.",
      cta: "Get Pro Access",
      ctaStyle:
        "bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20",
      features: [
        "Unlimited scope checks",
        "Advanced contract interpretation",
        "Contract clause citation in results",
        "Polished multi-paragraph reply",
        "Tone selector (formal / neutral / firm)",
        "Full revision history per project",
        "Priority processing",
      ],
      limitations: [],
      highlighted: true,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            Start Free. Upgrade When It Pays for Itself.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            One caught scope creep on a 3-day project covers a year of Pro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-7 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-slate-900 dark:bg-slate-800 border border-cyan-500/30 dark:border-cyan-600/30 shadow-2xl shadow-cyan-900/30"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-xs font-bold bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="text-sm font-semibold uppercase tracking-widest mb-2 ${plan.highlighted ? 'text-cyan-400' : 'text-slate-500 dark:text-slate-400'}">
                  <span
                    className={
                      plan.highlighted
                        ? "text-cyan-400"
                        : "text-slate-500 dark:text-slate-500"
                    }
                  >
                    {plan.name}
                  </span>
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-4xl font-black tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900 dark:text-slate-100"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm pb-1 ${plan.highlighted ? "text-slate-400" : "text-slate-400 dark:text-slate-500"}`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="w-3.5 h-3.5 shrink-0 text-cyan-500 dark:text-cyan-400"
                    >
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted
                          ? "text-slate-300"
                          : "text-slate-600 dark:text-slate-400"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
                {plan.limitations.map((l) => (
                  <li
                    key={l}
                    className="flex items-center gap-3 text-sm opacity-50"
                  >
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="w-3.5 h-3.5 shrink-0 text-slate-400"
                    >
                      <path
                        d="M11 3L3 11M3 3L11 11"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted
                          ? "text-slate-400"
                          : "text-slate-400 dark:text-slate-500"
                      }
                    >
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
          All plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}
