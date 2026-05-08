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

const clientMessages = [
  "Quick change.",
  "Small addition.",
  "Shouldn\u2019t take long.",
];

const consequences = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-red-500 dark:text-red-400">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v5M12 16v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    text: "You\u2019re doing extra work for free",
    color: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/40",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-amber-500 dark:text-amber-400">
        <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H21V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "The project scope keeps expanding",
    color: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/40",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-slate-500 dark:text-slate-400">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9.5C8 8.12 9.343 7 11 7h2c1.657 0 3 1.12 3 2.5 0 1.38-1.343 2.5-3 2.5H12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="17.5" r="0.75" fill="currentColor"/>
      </svg>
    ),
    text: "Saying \u201cno\u201d feels uncomfortable or risky",
    color: "bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60",
  },
];

export default function Problem() {
  const headerRef = useScrollReveal();
  const narrativeRef = useScrollReveal(0.1);
  const messagesRef = useScrollReveal(0.1);
  const cardsRef = useScrollReveal(0.1);
  const closingRef = useScrollReveal(0.2);

  return (
    <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight">
            It always starts with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500">
              &ldquo;just one small thing&hellip;&rdquo;
            </span>
          </h2>
        </div>

        {/* Narrative intro */}
        <div ref={narrativeRef} className="reveal text-center mb-10 space-y-2">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            You finish the agreed work.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Then comes the message.
          </p>
        </div>

        {/* Client message bubbles */}
        <div ref={messagesRef} className="reveal flex flex-col items-end gap-3 mb-12 max-w-xs ml-auto mr-0 sm:mr-8">
          {clientMessages.map((msg, i) => (
            <div
              key={msg}
              className="px-4 py-3 rounded-2xl rounded-tr-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm shadow-sm"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              &ldquo;{msg}&rdquo;
            </div>
          ))}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 mt-1">
            <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
              <path d="M6 3.5V6L7.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            from: client@email.com
          </div>
        </div>

        {/* And suddenly + consequence cards */}
        <div ref={cardsRef} className="reveal mb-12">
          <p className="text-center text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">
            And suddenly:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {consequences.map((item) => (
              <div
                key={item.text}
                className={`rounded-xl border p-5 flex flex-col gap-3 ${item.color}`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/60 dark:bg-slate-900/40 flex items-center justify-center border border-white/80 dark:border-slate-700/40">
                  {item.icon}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative */}
        <div className="text-center mb-10 space-y-2">
          <p className="text-slate-600 dark:text-slate-400">
            So you say yes.{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Again.
            </span>
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
            Not because you want to —
            <br />
            but because you don&apos;t want to damage the relationship.
          </p>
        </div>

        {/* Closing */}
        <div ref={closingRef} className="reveal text-center">
          <div className="inline-block px-8 py-5 rounded-2xl bg-slate-900 dark:bg-slate-800/80 border border-slate-700 dark:border-slate-700">
            <p className="text-base font-medium text-slate-300 dark:text-slate-400">
              Scope creep isn&apos;t just annoying.
            </p>
            <p className="text-cyan-400 font-bold text-xl mt-1">
              It&apos;s expensive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
