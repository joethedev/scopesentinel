"use client";

export default function SGHeader() {
  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo + feature badge */}
        <div className="flex items-center gap-2 select-none">
          <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 shrink-0">
            <path
              d="M16 4L28 10V18C28 22.4 22.7 26.5 16 28C9.3 26.5 4 22.4 4 18V10L16 4Z"
              stroke="#0891b2"
              className="dark:stroke-cyan-400"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M11 16L14.5 19.5L21 13"
              stroke="#0891b2"
              className="dark:stroke-cyan-400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            ScopeSentinel
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-900/50 tracking-wide uppercase">
            ScopeGuard
          </span>
        </div>

        {/* Theme toggle only */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {/* Sun — visible in dark mode (click to go light) */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 hidden dark:block"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {/* Moon — visible in light mode (click to go dark) */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 block dark:hidden"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
