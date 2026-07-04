import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
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
        title: "WhatsApp Business API Integration",
        description:
          "Deeper WhatsApp integration with message templates, broadcast lists, and analytics.",
        status: "in-progress" as const,
      },
      {
        title: "Mobile App (Android & iOS)",
        description: "Dedicated mobile app for brokers to manage everything on the go.",
        status: "in-progress" as const,
      },
      {
        title: "Multi-Language Support",
        description:
          "Hindi, Marathi, Gujarati, Tamil, and Bengali UI — choose your preferred language.",
        status: "planned" as const,
      },
      {
        title: "AI Property Recommendations",
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
        title: "Payment Collection",
        description:
          "Collect booking amounts, token payments, and commissions directly within PropFlow.",
        status: "planned" as const,
      },
      {
        title: "Document E-Signature",
        description:
          "Clients can sign agreements digitally. No more printing, scanning, and WhatsApp-ing PDFs.",
        status: "planned" as const,
      },
      {
        title: "Advanced Analytics Dashboard",
        description:
          "Deal conversion funnels, team performance metrics, and revenue forecasting.",
        status: "planned" as const,
      },
      {
        title: "RERA Compliance Module",
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
        title: "Channel Partner Portal",
        description:
          "Builders and developers can list properties directly and track broker performance.",
        status: "planned" as const,
      },
      {
        title: "API & Webhooks",
        description:
          "Integrate PropFlow with your existing tools via REST API and webhooks.",
        status: "planned" as const,
      },
      {
        title: "Team Collaboration",
        description:
          "Shared pipelines, task assignment, internal chat, and deal-level team notes.",
        status: "planned" as const,
      },
      {
        title: "Marketplace for Add-ons",
        description: "Third-party integrations and extensions marketplace.",
        status: "planned" as const,
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  shipped: "bg-success-bg text-success",
  "in-progress": "bg-brand-500/10 text-brand-500",
  planned: "bg-surface-tertiary text-fg-muted",
};

export default function RoadmapPage() {
  return (
    <>
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Roadmap</span>
          <h1 className="section-title">What&apos;s coming next.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            We ship every month based on broker feedback. Here&apos;s what we&apos;re
            building.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {roadmapItems.map((quarter) => (
              <div key={quarter.quarter}>
                <div className="mb-8 flex items-center gap-3">
                  <Timer className="text-brand-500 h-5 w-5" />
                  <h2 className="text-fg text-xl font-bold">{quarter.quarter}</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {quarter.items.map((item) => (
                    <div
                      key={item.title}
                      className="border-border bg-bg rounded-2xl border p-6 transition-all duration-200 hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-fg text-sm font-semibold">{item.title}</h3>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-medium capitalize ${statusStyles[item.status]}`}
                        >
                          {item.status === "in-progress" ? "In Progress" : item.status}
                        </span>
                      </div>
                      <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
