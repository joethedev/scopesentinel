export default function SGFeatures() {
  const features = [
    {
      title: "New Feature Requests",
      description:
        "Detects when a client asks for functionality, screens, integrations, or deliverables not specified in the signed agreement.",
      example: '"Can you also add a reporting dashboard?"',
      flag: "Deliverable not in scope",
    },
    {
      title: "Timeline Compression",
      description:
        "Identifies requests to accelerate delivery windows or move deadlines that were mutually agreed and baked into your project plan.",
      example: '"We need this live by Thursday instead."',
      flag: "Deadline change detected",
    },
    {
      title: "Hidden Deliverables",
      description:
        "Catches indirect asks buried inside status updates, feedback threads, or casual conversation that quietly expand what you&apos;re expected to produce.",
      example:
        '"Just include the onboarding flow too while you&apos;re there."',
      flag: "Implicit scope addition",
    },
    {
      title: "Payment Structure Changes",
      description:
        "Spots language that attempts to renegotiate payment terms, defer invoices, or tie completion milestones to undefined criteria.",
      example: '"Let&apos;s settle payment after we launch."',
      flag: "Contract payment term conflict",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight mb-4">
            What ScopeGuard Detects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Scope creep takes many forms. ScopeGuard recognises all of them —
            from direct requests to subtle linguistic patterns clients use when
            they sense you won&apos;t push back.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 p-7 flex flex-col gap-5 hover:border-cyan-200 dark:hover:border-cyan-800 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/40 shrink-0 whitespace-nowrap">
                  {feature.flag}
                </span>
              </div>

              <p
                className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />

              <div className="mt-auto rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/40 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 dark:bg-amber-500 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Example trigger
                  </span>
                </div>
                <p
                  className="text-sm text-slate-600 dark:text-slate-300 italic"
                  dangerouslySetInnerHTML={{ __html: feature.example }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
