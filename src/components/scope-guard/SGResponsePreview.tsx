export default function SGResponsePreview() {
  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-8">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                className="w-3.5 h-3.5 shrink-0"
              >
                <path
                  d="M2 10L6 11.5L12 3L2 6.5L5 7.5L2 10Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              Professionally drafted reply
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-5 leading-tight">
              Professional Reply.
              <br />
              No Emotion. No Conflict.
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              The hardest part isn&apos;t knowing the request is out of scope.
              It&apos;s finding the right words to say so — without sounding
              defensive, losing the client, or starting a dispute.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  heading: "Polite",
                  copy: "The tone is professional and collaborative, never confrontational.",
                },
                {
                  heading: "Firm",
                  copy: "It clearly references the scope clause, leaving no room for ambiguity.",
                },
                {
                  heading: "Actionable",
                  copy: "It suggests a path forward — a change order, a new quote, or a follow-up call.",
                },
              ].map((item) => (
                <div key={item.heading} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3 h-3 text-cyan-600 dark:text-cyan-400"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                      {item.heading} —{" "}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {item.copy}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-500">
              Every reply is fully editable. Adjust the tone before you hit
              send.
            </p>
          </div>

          {/* Right: email card mockup */}
          <div className="relative">
            <div className="absolute inset-4 bg-cyan-400/6 dark:bg-cyan-400/5 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
              {/* Email header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-cyan-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    SG
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      ScopeGuard Reply
                    </div>
                    <div className="text-[11px] text-slate-400 dark:text-slate-500">
                      Generated — ready to send
                    </div>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/40">
                    DRAFT
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-slate-400 dark:text-slate-500 w-10">
                      To:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      michael@clientcompany.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px]">
                    <span className="text-slate-400 dark:text-slate-500 w-10">
                      Re:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300">
                      Project scope &mdash; request clarification
                    </span>
                  </div>
                </div>
              </div>

              {/* Email body */}
              <div className="px-6 py-5 space-y-3 text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>Hi Michael,</p>
                <p>
                  Thank you for your message. I&apos;ve reviewed your request
                  and wanted to clarify based on our signed agreement (Project
                  Brief v1.2, Section 2 &mdash; Deliverables).
                </p>
                <p>
                  The current scope covers a web application with three defined
                  screens. A mobile application constitutes a separate platform
                  requiring independent design, development, and testing
                  resources, and falls outside the deliverables we agreed upon.
                </p>
                <p>
                  I&apos;d be happy to scope this separately and provide a
                  revised quote if this is something you&apos;d like to proceed
                  with. I can have a proposal ready by end of week.
                </p>
                <p>Let me know how you&apos;d like to move forward.</p>
                <p className="pt-1">
                  Best,
                  <br />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </span>
                </p>
              </div>

              {/* Footer action bar */}
              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    className="w-3 h-3 text-cyan-500 shrink-0"
                  >
                    <path
                      d="M6 1L7.5 4.3H11L8.3 6.3L9.3 9.8L6 7.9L2.7 9.8L3.7 6.3L1 4.3H4.5L6 1Z"
                      stroke="currentColor"
                      strokeWidth="1.1"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Clause 2.1 referenced
                </div>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors">
                  Edit &amp; Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
