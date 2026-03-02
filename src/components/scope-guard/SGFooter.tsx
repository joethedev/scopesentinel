export default function SGFooter() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/60 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
          <svg
            viewBox="0 0 18 18"
            fill="none"
            className="w-4 h-4 shrink-0 text-cyan-500 dark:text-cyan-400"
          >
            <path
              d="M9 1.5L2 4.5V10c0 4 3 7.2 7 8 4-0.8 7-4 7-8V4.5L9 1.5Z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            &copy; {new Date().getFullYear()} ScopeSentinel. All rights
            reserved.
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <a
            href="/privacy"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
}
