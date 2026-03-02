export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create a Free Account",
      description:
        "Register in under 60 seconds. No payment information required. Your data is encrypted and never shared.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 6L21 9M21 6L18 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Run Your Analysis",
      description:
        "Answer 12 questions about a new client prospect, or paste your contract and a message to trigger a ScopeGuard check. Results delivered in seconds.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M9 5H7C5.895 5 5 5.895 5 7V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7C19 5.895 18.105 5 17 5H15"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 5C9 3.895 9.895 3 11 3H13C14.105 3 15 3.895 15 5V6H9V5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12H15M9 16H12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Decide. Protect. Earn.",
      description:
        "Armed with your risk score, red flags, and professional templates, make confident decisions. Protect your scope. Invoice without hesitation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 3L20 7V12C20 16.4 16.5 20.1 12 21C7.5 20.1 4 16.4 4 12V7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-50 dark:bg-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Up and Running in Minutes.
            <br />
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Protecting You for the Long Term.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center group">
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-cyan-300 dark:group-hover:border-cyan-700/50 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-600 dark:bg-cyan-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>

                {/* Step label */}
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            Start Your Free Account
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
      </div>
    </section>
  );
}
