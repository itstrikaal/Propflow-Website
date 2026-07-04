import { FeaturesGridSection } from "@/components/sections/features-grid";
import { SolutionSection } from "@/components/sections/solution";
import { WhatsAppShowcaseSection } from "@/components/sections/whatsapp-showcase";
import { CTASection } from "@/components/sections/cta";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Features",
  description:
    "PropFlow combines WhatsApp CRM, AI lead scoring, document management, analytics, and automation into one platform for Indian property brokers.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd
        id="ld-features-page"
        schema={[
          webPageSchema({
            title: "PropFlow Features",
            description:
              "PropFlow combines WhatsApp CRM, AI lead scoring, document management, analytics, and automation into one platform.",
            path: "/features",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Features", href: "/features" }]),
        ]}
      />

      {/* Page hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Features"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Features</span>
          <h1 className="font-display section-title">
            Everything your brokerage needs.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            PropFlow replaces five separate tools with one intelligent platform. Every
            feature is built for the way Indian property brokers actually work.
          </p>
        </div>
      </section>
      <FeaturesGridSection />
      <SolutionSection />
      <WhatsAppShowcaseSection />
      <CTASection />
    </>
  );
}
