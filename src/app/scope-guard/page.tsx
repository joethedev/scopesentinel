import type { Metadata } from "next";
import SGHeader from "@/components/scope-guard/SGHeader";
import SGHero from "@/components/scope-guard/SGHero";
import SGPain from "@/components/scope-guard/SGPain";
import SGHowItWorks from "@/components/scope-guard/SGHowItWorks";
import SGFeatures from "@/components/scope-guard/SGFeatures";
import SGResponsePreview from "@/components/scope-guard/SGResponsePreview";
import SGPlans from "@/components/scope-guard/SGPlans";
import SGFinalCTA from "@/components/scope-guard/SGFinalCTA";
import SGFooter from "@/components/scope-guard/SGFooter";

export const metadata: Metadata = {
  title: "ScopeGuard — Detect Scope Creep Before It Costs You | ScopeSentinel",
  description:
    "Paste your contract and client message. ScopeGuard instantly classifies the request as in-scope or out-of-scope and drafts a professional response — so you never lose revenue to scope creep again.",
};

export default function ScopeGuardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      <SGHeader />
      <SGHero />
      <SGPain />
      <SGHowItWorks />
      <SGFeatures />
      <SGResponsePreview />
      <SGPlans />
      <SGFinalCTA />
      <SGFooter />
    </main>
  );
}
