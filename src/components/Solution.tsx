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

const steps = [
  {
    number: "01",
    label: "Paste your contract",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
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
    number: "02",
    label: "Paste your client\u2019s message",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
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
    label: "Get a clear answer + professional reply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
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

const results = [
  {
    label: "If the request is in scope",
    icon: "✓",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/40",
  },
  {
    label: "Or if it crosses the line",
    icon: "✕",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/40",
  },
];

export default function Solution() {
  const headerRef = useScrollReveal();
  const stepsRef = useScrollReveal(0.1);
  const resultsRef = useScrollReveal(0.15);
  const closingRef = useScrollReveal(0.2);

  return (
    <section id="solution" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
            Know exactly where the line is —{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
              instantly.
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            ScopeGuard removes the guesswork.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="reveal mb-14">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-8">
            Just:
          </p>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden sm:block absolute top-8 left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)] h-px bg-linear-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800" />
            <div className="grid sm:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col items-center text-center gap-3">
                  <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm z-10">
                    {step.icon}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-600 dark:bg-cyan-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {step.number.replace("0", "")}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* In seconds, you'll know */}
        <div ref={resultsRef} className="reveal mb-12">
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
            In seconds, you&apos;ll know:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((r) => (
              <div
                key={r.label}
                className={`flex items-center gap-4 rounded-xl border p-5 ${r.bg}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${r.color}`}>
                  {r.icon}
                </div>
                <p className={`font-semibold ${r.color}`}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* No stress tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["No stress.", "No overthinking.", "No awkward wording."].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-sm text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Closing */}
        <div ref={closingRef} className="reveal text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
            You stay professional —{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              while protecting your time.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

