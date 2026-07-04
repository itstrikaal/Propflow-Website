import { HeroSection } from "@/components/sections/hero";
import { PressMentionsSection } from "@/components/sections/press-mentions";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { FeaturesGridSection } from "@/components/sections/features-grid";
import { WhatsAppShowcaseSection } from "@/components/sections/whatsapp-showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { SecurityBadgesSection } from "@/components/sections/trust/security-badges";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PressMentionsSection />
      <TrustedBySection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGridSection />
      <WhatsAppShowcaseSection />
      <HowItWorksSection />
      <SecurityBadgesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
