export default function Problem() {
  const problems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 7V13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16.5" r="0.75" fill="currentColor" />
        </svg>
      ),
      stat: "42%",
      statLabel: "of freelancers report delayed or non-payment",
      title: "Late Payments",
      description:
        "You deliver quality work on time. Then the invoices pile up. Payment requests that go unanswered cost real money — and erode the professional value you bring.",
      color: "text-red-500 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-100 dark:border-red-900/40",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M4 4H20V16H4V4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 20H16M12 16V20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 9L12 11L16 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11V14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      stat: "68%",
      statLabel: "of projects exceed their original revision count",
      title: "Endless Revisions",
      description:
        "One round of feedback becomes five. The project grows. Your time shrinks. Without clear boundaries, clients mistake your professionalism for unlimited availability.",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-100 dark:border-amber-900/40",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
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
      stat: "3.1x",
      statLabel: "average scope expansion on fixed-price projects",
      title: "Scope Creep as 'Small Changes'",
      description:
        "\"It's just a small addition.\" Every professional freelancer has heard it. What starts as a logo becomes a full brand system. The contract doesn't protect you — you need a system that does.",
      color: "text-cyan-600 dark:text-cyan-400",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      borderColor: "border-cyan-100 dark:border-cyan-900/40",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
            Freelancing Shouldn&apos;t Feel
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">
              Like Gambling.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            Every project carries risk. Most freelancers find out too late —
            after the contract is signed, the work is done, and the damage is
            real.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${problem.bgColor} border ${problem.borderColor} flex items-center justify-center ${problem.color} mb-5`}
              >
                {problem.icon}
              </div>

              {/* Stat */}
              <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className={`text-3xl font-bold ${problem.color}`}>
                  {problem.stat}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 leading-relaxed">
                  {problem.statLabel}
                </p>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
