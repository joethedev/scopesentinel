const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Get started with structured risk assessment at no cost.",
    cta: "Start Free Risk Check",
    highlight: false,
    features: [
      { text: "3 Client Risk Checks per month", included: true },
      { text: "Overall risk score (0–100)", included: true },
      { text: "Risk category (Low / Medium / High)", included: true },
      { text: "Top red flags identified", included: true },
      { text: "Suggested contract clauses", included: false },
      { text: "Recommended client boundaries", included: false },
      { text: "Risk dimension breakdown", included: false },
      { text: "Export report as PDF", included: false },
    ],
  },
  {
    name: "Pro",
    price: "19",
    period: "per month",
    description:
      "Unlimited checks and full protective output for professionals.",
    cta: "Upgrade to Pro",
    badge: "Most Value",
    highlight: true,
    features: [
      { text: "Unlimited Client Risk Checks", included: true },
      { text: "Overall risk score (0–100)", included: true },
      { text: "Risk category (Low / Medium / High)", included: true },
      { text: "Top red flags identified", included: true },
      { text: "Advanced contract clause suggestions", included: true },
      { text: "Recommended client boundaries", included: true },
      { text: "Full risk dimension breakdown", included: true },
      { text: "Export report as PDF", included: true },
    ],
  },
];

export default function RDPlans() {
  return (
    <section id="plans" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
            Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Start Free.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              Upgrade When You Need More.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            A single avoided bad-client situation covers a full year of Pro
            subscription.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 gap-7 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlight
                  ? "bg-slate-900 dark:bg-slate-800 border-2 border-cyan-500 dark:border-cyan-400 shadow-2xl shadow-cyan-500/10 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-sm whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="p-7">
                {/* Plan name */}
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-1 ${plan.highlight ? "text-cyan-400" : "text-slate-400 dark:text-slate-500"}`}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900 dark:text-slate-100"}`}
                  >
                    €{plan.price}
                  </span>
                  <span
                    className={`text-sm pb-1 ${plan.highlight ? "text-slate-400" : "text-slate-400 dark:text-slate-500"}`}
                  >
                    / {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mb-6 ${plan.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-500"}`}
                >
                  {plan.description}
                </p>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 mb-6 ${
                    plan.highlight
                      ? "bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-slate-900 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                      : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Divider */}
                <div
                  className={`h-px mb-5 ${plan.highlight ? "bg-slate-700/60" : "bg-slate-100 dark:bg-slate-800"}`}
                />

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-cyan-500/20" : "bg-cyan-100 dark:bg-cyan-900/30"}`}
                        >
                          <svg
                            viewBox="0 0 10 10"
                            fill="none"
                            className="w-2.5 h-2.5"
                          >
                            <path
                              d="M2 5L4 7.5L8.5 2.5"
                              stroke={plan.highlight ? "#22d3ee" : "#0891b2"}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100 dark:bg-slate-800">
                          <svg
                            viewBox="0 0 10 10"
                            fill="none"
                            className="w-2.5 h-2.5"
                          >
                            <path
                              d="M2.5 7.5L7.5 2.5M2.5 2.5L7.5 7.5"
                              stroke="#94a3b8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? plan.highlight
                              ? "text-slate-200"
                              : "text-slate-700 dark:text-slate-300"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8">
          Cancel anytime. No contracts. Secure payment via Stripe.
        </p>
      </div>
    </section>
  );
}
