import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Bug, Sparkles, ArrowUp } from "lucide-react";

export const metadata = createMetadata({
  title: "Changelog",
  description:
    "Every update to PropFlow, documented. We ship new features and improvements every month.",
  path: "/changelog",
});

const changes = [
  {
    date: "June 28, 2026",
    version: "v1.5.0",
    items: [
      {
        type: "feature" as const,
        text: "AI lead scoring — automatic priority scoring for every lead based on WhatsApp conversations.",
      },
      {
        type: "feature" as const,
        text: "WhatsApp message templates — save and reuse common property descriptions.",
      },
      {
        type: "improvement" as const,
        text: "20× faster document loading in property packages.",
      },
      { type: "fix" as const, text: "Fixed contact sync issue with Google Contacts." },
    ],
  },
  {
    date: "May 30, 2026",
    version: "v1.4.0",
    items: [
      {
        type: "feature" as const,
        text: "Property package sharing — share photos, documents, and location in one WhatsApp message.",
      },
      { type: "feature" as const, text: "Dark mode toggle in web dashboard." },
      {
        type: "improvement" as const,
        text: "Redesigned property details page with better photo gallery.",
      },
      {
        type: "fix" as const,
        text: "Fixed issue with duplicate lead creation from WhatsApp.",
      },
    ],
  },
  {
    date: "April 25, 2026",
    version: "v1.3.0",
    items: [
      {
        type: "feature" as const,
        text: "WhatsApp Business API integration — two-way sync with WhatsApp Business.",
      },
      {
        type: "feature" as const,
        text: "Custom follow-up reminders with WhatsApp notifications.",
      },
      {
        type: "improvement" as const,
        text: "Improved search — now searches across properties, contacts, and documents.",
      },
      { type: "fix" as const, text: "Fixed timezone issues in follow-up scheduling." },
    ],
  },
  {
    date: "March 20, 2026",
    version: "v1.2.0",
    items: [
      {
        type: "feature" as const,
        text: "Document management — upload, organise, and share Aadhaar, PAN, sale deeds.",
      },
      {
        type: "feature" as const,
        text: "Contact groups — organise buyers, sellers, and partners separately.",
      },
      {
        type: "improvement" as const,
        text: "Performance improvements across dashboard.",
      },
    ],
  },
  {
    date: "February 15, 2026",
    version: "v1.1.0",
    items: [
      {
        type: "feature" as const,
        text: "Property listing management with photo uploads and location tagging.",
      },
      {
        type: "feature" as const,
        text: "Basic analytics dashboard — property views, lead sources.",
      },
      { type: "improvement" as const, text: "Mobile-responsive web interface." },
    ],
  },
  {
    date: "January 10, 2026",
    version: "v1.0.0",
    items: [
      {
        type: "feature" as const,
        text: "Public launch! WhatsApp lead capture, contact management, and deal tracking.",
      },
    ],
  },
];

const typeConfig = {
  feature: {
    icon: Sparkles,
    label: "New feature",
    color: "text-fg",
    bg: "bg-fg/10",
  },
  improvement: {
    icon: ArrowUp,
    label: "Improvement",
    color: "text-accent-700",
    bg: "bg-accent-50 dark:bg-accent-900/20 dark:text-accent-300",
  },
  fix: { icon: Bug, label: "Bug fix", color: "text-success", bg: "bg-success-bg" },
};

export default function ChangelogPage() {
  return (
    <>
      <JsonLd
        id="ld-changelog-page"
        schema={[
          webPageSchema({
            title: "PropFlow Changelog",
            description: "Every update to PropFlow, documented.",
            path: "/changelog",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Changelog", href: "/changelog" }]),
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Changelog"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Changelog</span>
          <h1 className="font-display section-title">What&apos;s new at PropFlow.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            We ship every month. Here&apos;s everything we&apos;ve been working on.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {changes.map((release) => (
              <div key={release.version}>
                <div className="mb-5 flex items-baseline gap-3 border-b border-[color:var(--border)] pb-3">
                  <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
                    {release.version}
                  </h2>
                  <span className="text-fg-muted text-sm">{release.date}</span>
                </div>
                <div className="space-y-3">
                  {release.items.map((item, i) => {
                    const config = typeConfig[item.type];
                    const Icon = config.icon;
                    return (
                      <div
                        key={i}
                        className="border-border bg-surface hover:border-fg/15 flex gap-3 rounded-2xl border p-4 transition-all duration-300 sm:p-5"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${config.bg}`}
                        >
                          <Icon className={`h-4 w-4 ${config.color}`} />
                        </div>
                        <div className="flex-1">
                          <span
                            className={`text-[10px] font-semibold tracking-wider uppercase ${config.color}`}
                          >
                            {config.label}
                          </span>
                          <p className="text-fg-secondary mt-1 text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
