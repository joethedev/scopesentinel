export default function RDFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 shrink-0">
            <path
              d="M12 3L20 7V12C20 16.4 16.5 20.1 12 21C7.5 20.1 4 16.4 4 12V7L12 3Z"
              stroke="#0891b2"
              className="dark:stroke-cyan-400"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M8.5 12L11 14.5L15.5 9.5"
              stroke="#0891b2"
              className="dark:stroke-cyan-400"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs text-slate-500 dark:text-slate-500">
            &copy; {currentYear} ScopeSentinel — Client Risk Detector
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-600">
          <span>Privacy Policy</span>
          <span className="w-px h-3 bg-slate-200 dark:bg-slate-800" />
          <span>Terms of Service</span>
          <span className="w-px h-3 bg-slate-200 dark:bg-slate-800" />
          <span>Built for European Freelancers</span>
        </div>
      </div>
    </footer>
  );
}
