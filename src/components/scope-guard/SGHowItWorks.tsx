export default function SGHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Paste Your Contract",
      description:
        "Copy and paste the relevant section of your signed contract — the deliverables clause, scope statement, or full agreement. ScopeGuard uses this as the ground truth.",
      detail: "PDF, plain text, or direct paste — any format works.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="14,2 14,8 20,8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="13"
            x2="8"
            y2="13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="16"
            y1="17"
            x2="8"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Paste the Client Message",
      description:
        "Add the email, Slack message, or meeting note where the client makes their request. ScopeGuard reads context and intent — not just keywords.",
      detail:
        "Works with informal language, vague phrasing, and indirect asks.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path
            d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Receive Classification + Response",
      description:
        "Within seconds, get a clear in-scope / out-of-scope determination, the confidence level, the specific clause violated, and a professional reply you can send immediately.",
      detail: "Editable reply template included. No back-and-forth needed.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path
            d="M9 11L12 14L22 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
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
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            Three Inputs. One Clear Answer.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            No setup. No training. No project management overhead. Just the two
            documents that define what was agreed — and the message that may be
            changing it.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-linear-to-b from-slate-100 via-cyan-200 to-slate-100 dark:from-slate-800 dark:via-cyan-800/40 dark:to-slate-800 -translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Step card */}
                <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 hover:border-cyan-200 dark:hover:border-cyan-800 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-100 dark:border-cyan-900/50 shrink-0">
                      {step.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-500 uppercase">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          className="w-3 h-3 text-cyan-500 dark:text-cyan-500 shrink-0"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {step.detail}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center node — desktop */}
                <div className="hidden lg:flex w-10 shrink-0 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center z-10 shadow-md shadow-cyan-500/10">
                    <span className="text-xs font-black text-cyan-600 dark:text-cyan-400">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer — mirrors card on opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
