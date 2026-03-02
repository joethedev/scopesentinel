export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
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
              </div>
              <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-tight">
                ScopeSentinel
              </span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-xs">
              AI-powered protection for freelancers. Detect risky clients. Guard
              your scope. Invoice with confidence.
            </p>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-600">
              Built for European Freelancers
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-4">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Client Risk Detector", href: "#solution" },
                { label: "ScopeGuard", href: "#solution" },
                { label: "Pricing", href: "#pricing" },
                { label: "How It Works", href: "#how-it-works" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Freelancer Guide", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Client Red Flags", href: "#" },
                { label: "Scope Templates", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            &copy; {currentYear} ScopeSentinel. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-400 dark:text-slate-600">
              All systems operational
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-600">
            <svg
              viewBox="0 0 14 14"
              fill="none"
              className="w-3.5 h-3.5 shrink-0"
            >
              <path
                d="M7 2L11.5 4.5V8C11.5 10.2 9.5 12 7 13C4.5 12 2.5 10.2 2.5 8V4.5L7 2Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M5 8L6.5 9.5L9.5 6.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            GDPR Compliant
          </div>
        </div>
      </div>
    </footer>
  );
}
