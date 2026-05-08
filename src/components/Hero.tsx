"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const mockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mockRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(12px)";
      setTimeout(() => {
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 600 + i * 200);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-150 bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-125 h-100 bg-slate-400/5 dark:bg-slate-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              AI-Powered Scope Protection
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-[1.08] tracking-tight mb-6 animate-fade-in-up delay-100">
              Stop doing work
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-cyan-400 dark:from-cyan-400 dark:to-cyan-200">
                AI flags as out of scope.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-10 animate-fade-in-up delay-200">
              ScopeGuard&apos;s AI instantly detects if a client request falls
              outside your contract — and drafts the perfect professional
              response for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-in-up delay-300">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Create your free account
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-500 animate-fade-in-up delay-400">
              Protect your time. Protect your boundaries.
            </p>
          </div>

          {/* Right: ScopeGuard result mockup */}
          <div className="relative animate-float" ref={mockRef}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Glow */}
              <div className="absolute inset-4 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-2xl blur-2xl" />

              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Top accent */}
                <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-cyan-300" />

                <div className="p-6 space-y-5">
                  {/* Header */}
                  <div data-reveal className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400"
                      >
                        <path
                          d="M8 2L14 5V9C14 11.8 11.35 14.1 8 15C4.65 14.1 2 11.8 2 9V5L8 2Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M5.5 8L7.25 9.75L10.5 6.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      ScopeGuard Analysis
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Client message */}
                  <div data-reveal>
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-2">
                      Client message
                    </div>
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 p-3.5 text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                      &ldquo;Can we also add the CRM integration? It
                      shouldn&apos;t be much work...&rdquo;
                    </div>
                  </div>

                  {/* Result */}
                  <div data-reveal>
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-2">
                      ScopeGuard result
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 p-3.5">
                      <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center shrink-0">
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          className="w-4 h-4 text-red-500 dark:text-red-400"
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M5.5 5.5L10.5 10.5M10.5 5.5L5.5 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-red-700 dark:text-red-400">
                          Out of scope — not in contract
                        </div>
                        <div className="text-xs text-red-600/70 dark:text-red-400/60 mt-0.5">
                          CRM integration was not part of the original agreement
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ready-to-send reply */}
                  <div data-reveal>
                    <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-2">
                      Ready-to-send reply
                    </div>
                    <div className="rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/40 p-3.5">
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                        &ldquo;Hi [Client], thanks for the suggestion! CRM
                        integration wasn&apos;t included in our initial scope,
                        but I&apos;d be happy to discuss adding it as a separate
                        engagement...&rdquo;
                      </p>
                      <button className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          className="w-3 h-3"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="12"
                            height="12"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.3"
                          />
                          <path
                            d="M4 4H10M4 7H8"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Copy reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
