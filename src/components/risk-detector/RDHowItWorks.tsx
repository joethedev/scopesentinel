const steps = [
  {
    number: "01",
    title: "Answer Structured Behavioral Questions",
    description:
      "12 carefully designed questions covering payment history patterns, communication quality, scope definition, contract willingness, and deadline realism. Each answer carries a weighted score.",
    detail: "Takes approximately 2 minutes.",
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
          d="M9 11H15M9 15H12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Calculate a Weighted Risk Score",
    description:
      "Our model weighs each response against behavioral research on freelance client disputes. High-signal answers — like contract resistance or vague deliverables — receive stronger weighting.",
    detail: "Scored across 5 risk dimensions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M3 3V21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3 17L9 11L13 15L21 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3H15M21 3V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive Red Flags and Boundary Recommendations",
    description:
      "Your report identifies specific risk indicators, explains why each matters, and provides targeted contract clauses and communication templates designed to protect your scope and revenue.",
    detail: "Report available immediately after submission.",
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

const questions = [
  "Has the client provided a written brief?",
  "Are payment terms clearly defined?",
  "Is the client willing to sign a contract?",
  "How was the deadline communicated?",
  "Have they worked with freelancers before?",
];

export default function RDHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
            The Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            Structured Assessment.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              Clear Output.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6.75 top-14 w-px h-[calc(100%-24px)] bg-slate-200 dark:bg-slate-800" />
                )}

                <div className="flex gap-5 pb-10">
                  {/* Step icon circle */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-600 dark:bg-cyan-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-1">
                      Step {step.number}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 5V8.5L10 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {step.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Question preview card */}
          <div className="lg:sticky lg:top-20">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900 overflow-hidden shadow-sm">
              {/* Card header */}
              <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                    Question Preview
                  </div>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    Client Risk Assessment
                  </div>
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-600">
                  5 of 12 shown
                </div>
              </div>

              {/* Questions list */}
              <div className="p-5 space-y-3">
                {questions.map((q, i) => (
                  <div
                    key={q}
                    className={`flex items-start gap-3 rounded-xl p-3.5 border transition-colors ${
                      i === 2
                        ? "bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800/50"
                        : "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        i === 2
                          ? "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400"
                          : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <p
                      className={`text-sm leading-snug pt-0.5 ${
                        i === 2
                          ? "text-cyan-800 dark:text-cyan-300 font-medium"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {q}
                    </p>
                  </div>
                ))}

                {/* Ellipsis */}
                <div className="flex justify-center gap-1.5 py-2">
                  {[0, 1, 2].map((dot) => (
                    <div
                      key={dot}
                      className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"
                    />
                  ))}
                </div>

                <div className="text-center text-xs text-slate-400 dark:text-slate-600">
                  7 more questions covering scope, timeline, and references
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <button className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white text-sm font-semibold transition-colors">
                  Start the 12-Question Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
