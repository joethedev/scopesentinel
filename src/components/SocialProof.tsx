const testimonials = [
  {
    quote:
      "I used to second-guess every new client. Now I run a risk check before the first call. It caught a red flag I would have ignored — saved me a €4,200 project dispute.",
    author: "Marta K.",
    role: "Brand Designer, Warsaw",
    rating: 5,
  },
  {
    quote:
      "The ScopeGuard module alone is worth it. A client tried adding a full CMS to a landing page project. I had a professional response ready in 30 seconds.",
    author: "Tobias S.",
    role: "Frontend Developer, Hamburg",
    rating: 5,
  },
  {
    quote:
      "As a legal consultant who also freelances, I appreciate the contract clause suggestions. They're genuinely useful and save me from drafting protective language from scratch.",
    author: "Anais B.",
    role: "Independent Consultant, Paris",
    rating: 5,
  },
];

const logos = [
  "Toptal",
  "Malt",
  "Upwork",
  "Freelancer.com",
  "LinkedIn ProFinder",
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-medium mb-6">
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Built for Serious Freelancers.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Trusted by independent professionals across Europe who value their
            time, revenue, and reputation.
          </p>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 py-6 border-y border-slate-100 dark:border-slate-800">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Used by freelancers active on
          </span>
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-none transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4"
                  >
                    <path
                      d="M8 1.5L9.59 5.74L14.1 6.09L10.85 8.9L11.88 13.29L8 10.97L4.12 13.29L5.15 8.9L1.9 6.09L6.41 5.74L8 1.5Z"
                      fill="#0891b2"
                      className="dark:fill-cyan-400"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Country distribution */}
        <div className="mt-12 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Trusted by freelancers across Europe
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              { country: "Germany", count: "420+" },
              { country: "France", count: "310+" },
              { country: "Netherlands", count: "280+" },
              { country: "Poland", count: "240+" },
              { country: "Spain", count: "195+" },
              { country: "Sweden", count: "160+" },
              { country: "Other EU", count: "800+" },
            ].map((item) => (
              <div key={item.country} className="text-center">
                <div className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {item.count}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  {item.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
