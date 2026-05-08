"use client";

import { useEffect, useRef } from "react";

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const features = [
  {
    title: "Instant out-of-scope detection",
    description:
      "Know immediately if a request goes beyond your agreement. No more second-guessing or digging through your contract manually.",
    label: "Detection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8V11M11 14V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-900/40",
    accent: "from-cyan-500 to-cyan-300",
  },
  {
    title: "Professional replies, ready to send",
    description:
      "Say no — or renegotiate — without sounding rude or defensive. ScopeGuard writes the perfect message for every situation.",
    label: "Responses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path
          d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 9H16M8 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/40",
    accent: "from-emerald-500 to-emerald-300",
  },
  {
    title: "Contract vs. request comparison",
    description:
      "See exactly what was agreed — and what wasn't. ScopeGuard highlights the specific clauses that apply to each client message.",
    label: "Clarity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="3" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="3" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 18H21M3 21H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-900/40",
    accent: "from-violet-500 to-violet-300",
  },
  {
    title: "A clear documentation trail",
    description:
      "Keep records of every scope decision. If a dispute ever arises, you have a professional, timestamped log to back you up.",
    label: "Protection",
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
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/40",
    accent: "from-amber-500 to-amber-300",
  },
];

export default function HowItWorks() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.08);
  const closingRef = useScrollReveal(0.2);

  return (
    <section
      id="how-it-works"
      className="py-24 bg-slate-50 dark:bg-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            Everything you need to handle scope creep
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              like a pro.
            </span>
          </h2>
        </div>

        {/* Feature grid */}
        <div ref={gridRef} className="reveal grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-none overflow-hidden"
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${feature.bg} ${feature.color}`}
                >
                  {feature.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-1.5 ${feature.color}`}>
                    {feature.label}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div ref={closingRef} className="reveal mt-14 text-center">
          <p className="text-base text-slate-600 dark:text-slate-400">
            Less unpaid work.{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">More control.</span>{" "}
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Better client relationships.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

