import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { FeaturesGridSection } from "@/components/sections/features-grid";
import { WhatsAppShowcaseSection } from "@/components/sections/whatsapp-showcase";
import { HowItWorksSection } from "@/components/sections/how-it-works";
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
      <TrustedBySection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGridSection />
      <WhatsAppShowcaseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
