import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/schema";
import { faqItems } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Indian property brokers. Start with a 14-day free trial. No credit card required.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        id="ld-pricing-page"
        schema={[
          webPageSchema({
            title: "PropFlow Pricing",
            description:
              "Simple, transparent pricing for Indian property brokers.",
            path: "/pricing",
            type: "PricingPage",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]),
          // Software application with all three offers — Google uses this
          // for rich snippets in pricing-related searches.
          softwareApplicationSchema(),
        ]}
      />
      <JsonLd id="ld-faq-pricing" schema={faqSchema(faqItems)} />

      {/* Page hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Pricing"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Pricing</span>
          <h1 className="font-display section-title">
            Simple pricing for every brokerage.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            Whether you&apos;re a solo broker or a growing agency, PropFlow has a plan
            that scales with you.
          </p>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
