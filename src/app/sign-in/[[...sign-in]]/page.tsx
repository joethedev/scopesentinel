import { SignIn } from "@clerk/nextjs";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 2L3 7V13C3 17.97 7.02 22.67 12 24C16.98 22.67 21 17.97 21 13V7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11.5 14.5L15.5 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Contract-Grade Protection",
    body: "ScopeGuard cross-references every client message against your signed contract in seconds — no manual comparison needed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M11 8V11L13 13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M16 16L21 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Instant Scope Analysis",
    body: "Know within seconds whether a client request is in scope or out — before you've written a single word in reply.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Professional Reply Drafts",
    body: "Get a polished, firm, and calm reply template with every analysis — so you never have to find the right words under pressure.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 21H16M12 17V21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Client Risk Detection",
    body: "Analyse a prospect before signing. Identify red-flag communication patterns that predict scope creep, late payment, and disputes.",
  },
];

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-stretch">
      {/* Left — feature pitch */}
      <div className="hidden lg:flex flex-col justify-between w-full max-w-lg xl:max-w-xl px-12 py-14 bg-slate-900 dark:bg-slate-900">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 shrink-0">
            <path
              d="M16 4L28 10V18C28 22.4 22.7 26.5 16 28C9.3 26.5 4 22.4 4 18V10L16 4Z"
              stroke="#0891b2"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M11 16L14.5 19.5L21 13"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-semibold text-white tracking-tight">
            ScopeSentinel
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight">
            Stop losing money
            <br />
            to scope creep.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            AI-powered protection for freelancers. Spot risky clients before
            signing, and protect your scope during every project.
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-6">
          {features.map((f) => (
            <li key={f.title} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                {f.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200 mb-0.5">
                  {f.title}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Social proof */}
        <p className="text-xs text-slate-600">
          Trusted by freelancers protecting over €2M in project revenue.
        </p>
      </div>

      {/* Right — Clerk sign-in */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-14">
        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-2 mb-8">
          <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6 shrink-0">
            <path
              d="M16 4L28 10V18C28 22.4 22.7 26.5 16 28C9.3 26.5 4 22.4 4 18V10L16 4Z"
              stroke="#0891b2"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M11 16L14.5 19.5L21 13"
              stroke="#0891b2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
            ScopeSentinel
          </span>
        </div>

        <SignIn />
      </div>
    </main>
  );
}
