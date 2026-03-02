import { SignUp } from "@clerk/nextjs";

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
    title: "5 Free Scope Checks",
    body: "Start immediately — no credit card required. Paste your contract and client message and get your first analysis in under 15 seconds.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M21 21V19.5C21 18.1 20.1 17 18.87 16.65"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15.87 3.65C17.1 4 18 5.1 18 6.5C18 7.9 17.1 9 15.87 9.35"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Client Risk Detector Included",
    body: "Screen any prospect before signing. Our AI flags the communication patterns that predict scope creep, disputes, and late payments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Get Results in Seconds",
    body: "No setup, no training, no project management overhead. Paste two inputs, get a classification and a ready-to-send reply.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Upgrade When It Pays for Itself",
    body: "One caught scope creep on a typical project more than covers a full year of Pro. Unlimited checks, advanced interpretation, full history.",
  },
];

export default function SignUpPage() {
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
            Your revenue is worth
            <br />
            protecting.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Join freelancers who use ScopeSentinel to catch scope creep before
            it costs them — and start every project with clarity.
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
          No credit card required &mdash; free account takes under 30 seconds.
        </p>
      </div>

      {/* Right — Clerk sign-up */}
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

        <SignUp />
      </div>
    </main>
  );
}
