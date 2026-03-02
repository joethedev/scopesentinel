import type { Metadata } from "next";
import RDHeader from "@/components/risk-detector/RDHeader";
import RDHero from "@/components/risk-detector/RDHero";
import RDPain from "@/components/risk-detector/RDPain";
import RDHowItWorks from "@/components/risk-detector/RDHowItWorks";
import RDOutputPreview from "@/components/risk-detector/RDOutputPreview";
import RDAuthority from "@/components/risk-detector/RDAuthority";
import RDPlans from "@/components/risk-detector/RDPlans";
import RDFinalCTA from "@/components/risk-detector/RDFinalCTA";
import RDFooter from "@/components/risk-detector/RDFooter";

export const metadata: Metadata = {
  title: "Client Risk Detector — ScopeSentinel",
  description:
    "Answer 12 structured questions and receive a professional risk score before signing with a new client. Detect red flags, get contract clauses, protect your revenue.",
};

export default function ClientRiskDetectorPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <RDHeader />
      <RDHero />
      <RDPain />
      <RDHowItWorks />
      <RDOutputPreview />
      <RDAuthority />
      <RDPlans />
      <RDFinalCTA />
      <RDFooter />
    </main>
  );
}
