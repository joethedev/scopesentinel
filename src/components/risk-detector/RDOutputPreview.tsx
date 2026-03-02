const reportItems = [
  {
    label: "Overall Risk Score",
    value: "72 / 100",
    badge: "High Risk",
    badgeColor:
      "bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/50",
    description:
      "A composite score calculated from 5 weighted risk dimensions based on your answers.",
    preview: (
      <div className="mt-3 h-2 w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
        <div className="h-full w-[72%] rounded-full bg-linear-to-r from-amber-400 to-red-500" />
      </div>
    ),
  },
  {
    label: "Risk Category",
    value: "High Risk",
    badge: "Action Required",
    badgeColor:
      "bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/40",
    description:
      "Categorized as Low, Medium, or High based on the score. High Risk clients require specific protective measures before proceeding.",
    preview: (
      <div className="mt-3 flex gap-2">
        {["Low", "Medium", "High"].map((cat) => (
          <div
            key={cat}
            className={`flex-1 py-1.5 rounded-lg text-center text-[11px] font-semibold border transition-colors ${
              cat === "High"
                ? "bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700/40"
                : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-700"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Top Red Flags",
    value: "3 detected",
    badge: "Critical",
    badgeColor:
      "bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/50",
    description:
      "Specific behavioral patterns that significantly elevate financial and scope risk, each explained with supporting context.",
    preview: (
      <div className="mt-3 space-y-1.5">
        {[
          "Resistance to written contract",
          "Unrealistic deadline",
          "Vague deliverables",
        ].map((f) => (
          <div
            key={f}
            className="flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400 shrink-0" />
            {f}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Suggested Contract Clauses",
    value: "4 clauses",
    badge: "Pro",
    badgeColor:
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/40",
    description:
      "Specific protective contract language tailored to your identified risk areas — ready to add to your agreement.",
    preview: (
      <div className="mt-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-3">
        <div className="text-[11px] text-slate-500 dark:text-slate-500 italic leading-relaxed">
          &ldquo;Client agrees to provide written scope approval before any work
          commences. Changes to agreed scope shall be subject to a written
          amendment...&rdquo;
        </div>
      </div>
    ),
  },
  {
    label: "Recommended Boundaries",
    value: "5 recommendations",
    badge: "Pro",
    badgeColor:
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/40",
    description:
      "Practical communication and project management boundaries to establish before work starts, based on detected risk patterns.",
    preview: (
      <div className="mt-3 space-y-1.5">
        {[
          "Require 50% upfront payment",
          "Weekly written status approval",
          "Maximum 2 revision rounds per deliverable",
        ].map((r) => (
          <div
            key={r}
            className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
          >
            <svg
              viewBox="0 0 12 12"
              fill="none"
              className="w-3 h-3 text-cyan-500 dark:text-cyan-400 shrink-0"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {r}
          </div>
        ))}
      </div>
    ),
  },
];

export default function RDOutputPreview() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
            Output Preview
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            What You Receive.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            A structured professional report — not a generic summary. Every
            section is actionable.
          </p>
        </div>

        {/* Report card layout */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
          {/* Report header bar */}
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-100 dark:border-cyan-900/50 flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path
                    d="M8 2L13 5V9C13 11.8 10.8 13.5 8 14C5.2 13.5 3 11.8 3 9V5L8 2Z"
                    stroke="#0891b2"
                    strokeWidth="1.5"
                    fill="none"
                    className="dark:stroke-cyan-400"
                  />
                  <path
                    d="M5.5 8L7.2 9.7L10.5 6.5"
                    stroke="#0891b2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="dark:stroke-cyan-400"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Client Risk Report
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-500">
                  ScopeSentinel — Client Risk Detector
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full border bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/40 font-semibold">
                72 / 100 — High Risk
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-600">
                Feb 2026
              </span>
            </div>
          </div>

          {/* Report sections */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {reportItems.map((item, i) => (
              <div
                key={item.label}
                className="px-6 py-5 grid sm:grid-cols-[1fr_2fr] gap-4 items-start"
              >
                {/* Left: label + badge */}
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      0{i + 1}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {item.label}
                  </h3>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                    {item.value}
                  </div>
                </div>

                {/* Right: description + preview */}
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                  {item.preview}
                </div>
              </div>
            ))}
          </div>

          {/* Report footer */}
          <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 dark:text-slate-500">
              Contract clauses and boundary recommendations are available on the
              Pro plan.
            </div>
            <button className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors whitespace-nowrap">
              Run Your Assessment &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
