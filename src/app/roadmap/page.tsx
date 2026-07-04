import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Timer } from "lucide-react";

export const metadata = createMetadata({
  title: "Roadmap",
  description:
    "See what's coming next to PropFlow. We ship new features every month based on broker feedback.",
  path: "/roadmap",
});

const roadmapItems = [
  {
    quarter: "Q3 2026",
    items: [
      {
        title: "WhatsApp Business API integration",
        description:
          "Deeper WhatsApp integration with message templates, broadcast lists, and analytics.",
        status: "in-progress" as const,
      },
      {
        title: "Mobile app (Android & iOS)",
        description:
          "Dedicated mobile app for brokers to manage everything on the go.",
        status: "in-progress" as const,
      },
      {
        title: "Multi-language support",
        description:
          "Hindi, Marathi, Gujarati, Tamil, and Bengali UI — choose your preferred language.",
        status: "planned" as const,
      },
      {
        title: "AI property recommendations",
        description:
          "AI suggests properties to buyers based on their WhatsApp conversations and preferences.",
        status: "planned" as const,
      },
    ],
  },
  {
    quarter: "Q4 2026",
    items: [
      {
        title: "Payment collection",
        description:
          "Collect booking amounts, token payments, and commissions directly within PropFlow.",
        status: "planned" as const,
      },
      {
        title: "Document e-signature",
        description:
          "Clients can sign agreements digitally. No more printing, scanning, and WhatsApp-ing PDFs.",
        status: "planned" as const,
      },
      {
        title: "Advanced analytics dashboard",
        description:
          "Deal conversion funnels, team performance metrics, and revenue forecasting.",
        status: "planned" as const,
      },
      {
        title: "RERA compliance module",
        description:
          "Automated compliance reporting and document management for RERA requirements.",
        status: "planned" as const,
      },
    ],
  },
  {
    quarter: "H1 2027",
    items: [
      {
        title: "Channel partner portal",
        description:
          "Builders and developers can list properties directly and track broker performance.",
        status: "planned" as const,
      },
      {
        title: "API & webhooks",
        description:
          "Integrate PropFlow with your existing tools via REST API and webhooks.",
        status: "planned" as const,
      },
      {
        title: "Team collaboration",
        description:
          "Shared pipelines, task assignment, internal chat, and deal-level team notes.",
        status: "planned" as const,
      },
      {
        title: "Marketplace for add-ons",
        description: "Third-party integrations and extensions marketplace.",
        status: "planned" as const,
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  shipped: "bg-success-bg text-success",
  "in-progress": "bg-warning-bg text-warning",
  planned: "bg-surface-tertiary text-fg-muted",
};

export default function RoadmapPage() {
  return (
    <>
      <JsonLd
        id="ld-roadmap-page"
        schema={[
          webPageSchema({
            title: "PropFlow Roadmap",
            description: "See what's coming next to PropFlow.",
            path: "/roadmap",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Roadmap", href: "/roadmap" }]),
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Roadmap"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Roadmap</span>
          <h1 className="font-display section-title">What&apos;s coming next.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            We ship every month based on broker feedback. Here&apos;s what we&apos;re
            building.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {roadmapItems.map((quarter) => (
              <div key={quarter.quarter}>
                <div className="mb-8 flex items-center gap-3">
                  <div className="border-border bg-surface-secondary flex h-9 w-9 items-center justify-center rounded-xl border">
                    <Timer className="text-fg h-4 w-4" />
                  </div>
                  <h2 className="font-display text-fg text-xl font-semibold tracking-[-0.025em]">
                    {quarter.quarter}
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {quarter.items.map((item) => (
                    <article
                      key={item.title}
                      className="border-border bg-surface hover:border-fg/20 rounded-2xl border p-6 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-fg text-base font-semibold tracking-[-0.018em]">
                          {item.title}
                        </h3>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium capitalize tracking-wide ${statusStyles[item.status]}`}
                        >
                          {item.status === "in-progress"
                            ? "In progress"
                            : item.status}
                        </span>
                      </div>
                      <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
