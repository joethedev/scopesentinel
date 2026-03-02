const pains = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 14H10M14 14H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Late Payments",
    description:
      "The invoice deadline passes. Follow-up emails go unanswered. You have delivered the work — but chasing payment becomes a second job you never agreed to.",
    quote: '"I\'ll pay you as soon as the client pays me."',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M4 4H20V16H4V4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 20H15M12 16V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 9H16M8 12H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Endless Revisions",
    description:
      "One round of feedback. Then another. Then five more. Without clear boundaries defined up front, your time becomes unlimited and your rate becomes unprofitable.",
    quote: '"Just one more small change."',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M14 3H21V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 3L12 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 5H5C3.895 5 3 5.895 3 7V19C3 20.105 3.895 21 5 21H17C18.105 21 19 20.105 19 19V13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Contract Avoidance",
    description:
      "A client who resists a written agreement is a client who plans to dispute it later. Reluctance to commit in writing is one of the highest-signal risk indicators.",
    quote: '"We don\'t really need all that formal stuff."',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15 12L17 10M17 10L19 8M17 10L19 12M17 10L15 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Emotional Manipulation",
    description:
      'Urgency pressure. Guilt-based appeals. Implied promises of "future projects." These patterns appear before signing — and they do not stop after.',
    quote: '"I really believed in you. I thought you were different."',
  },
];

export default function RDPain() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
            The Cost of Getting It Wrong
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            One Wrong Client Can Cost You
            <br />
            <span className="text-slate-500 dark:text-slate-400 font-medium">
              Months of Stress.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            These are not edge cases. They are patterns — and they are
            detectable before you sign.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-none transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 mb-5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:border-cyan-200 dark:group-hover:border-cyan-800 transition-colors duration-300">
                {pain.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {pain.description}
              </p>

              {/* Client quote */}
              <div className="rounded-lg bg-slate-50 dark:bg-slate-800/60 border-l-2 border-slate-300 dark:border-slate-600 pl-3 py-2 pr-2">
                <p className="text-xs text-slate-500 dark:text-slate-500 italic">
                  {pain.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition bridge */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Every one of these outcomes correlates with specific behavioral
            signals visible before the contract is signed.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 -rotate-12" />
            Client Risk Detector surfaces those signals systematically.
          </div>
        </div>
      </div>
    </section>
  );
}
