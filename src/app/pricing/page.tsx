import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description: "Simple, transparent pricing for Indian property brokers. Start with a 14-day free trial. No credit card required.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Pricing</span>
          <h1 className="section-title">Simple pricing for every brokerage.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            Whether you&apos;re a solo broker or a growing agency, PropFlow has a plan that scales with you.
          </p>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
