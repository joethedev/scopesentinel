const plans = [
  {
    name: "Free",
    price: "0",
    description: "Get started with essential protection at no cost.",
    cta: "Start Free",
    ctaHref: "#",
    highlight: false,
    features: [
      { text: "3 Client Risk Checks per month", included: true },
      { text: "5 Scope Analyses per month", included: true },
      { text: "Standard risk score", included: true },
      { text: "Red flag identification", included: true },
      { text: "Advanced contract suggestions", included: false },
      { text: "Priority AI analysis", included: false },
      { text: "Scope documentation history", included: false },
      { text: "Dedicated support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "19",
    description:
      "Unlimited protection for professionals serious about their revenue.",
    cta: "Upgrade to Pro",
    ctaHref: "#",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Unlimited Client Risk Checks", included: true },
      { text: "Unlimited Scope Analyses", included: true },
      { text: "Detailed risk score breakdown", included: true },
      { text: "Red flag identification", included: true },
      { text: "Advanced contract clause suggestions", included: true },
      { text: "Priority AI analysis", included: true },
      { text: "Full scope documentation history", included: true },
      { text: "Priority email support", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Protection Without{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              Limits.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            One bad client project can cost more than a year of Pro
            subscription. Invest in protection before you feel the pain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-slate-900 dark:bg-slate-800 border-2 border-cyan-500 dark:border-cyan-400 shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-400/10 scale-[1.02]"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-none"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 shadow-sm">
                  {plan.badge}
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div
                  className={`text-sm font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-cyan-400" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900 dark:text-slate-100"}`}
                  >
                    €{plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-500"}`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500 dark:text-slate-500"}`}
                >
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 ${
                  plan.highlight
                    ? "bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-white dark:text-slate-900 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
                    : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div
                className={`h-px mb-6 ${plan.highlight ? "bg-slate-700" : "bg-slate-100 dark:bg-slate-800"}`}
              />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-cyan-500/20" : "bg-cyan-100 dark:bg-cyan-900/30"}`}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="w-3 h-3"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke={plan.highlight ? "#22d3ee" : "#0891b2"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-100 dark:bg-slate-800">
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="w-3 h-3"
                        >
                          <path
                            d="M3 9L9 3M3 3L9 9"
                            stroke="#94a3b8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                    <span
                      className={`text-sm ${feature.included ? (plan.highlight ? "text-slate-200" : "text-slate-700 dark:text-slate-300") : "text-slate-400 dark:text-slate-600"}`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8">
          Cancel anytime. No contracts. Regular payment cycles. Payments secured
          via Stripe.
        </p>
      </div>
    </section>
  );
}
