import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { Rocket, Bug, Sparkles, ArrowUp } from "lucide-react";

export const metadata = createMetadata({
  title: "Changelog",
  description: "Every update to PropFlow, documented. We ship new features and improvements every month.",
  path: "/changelog",
});

const changes = [
  {
    date: "June 28, 2026",
    version: "v1.5.0",
    items: [
      { type: "feature" as const, text: "AI Lead Scoring — automatic priority scoring for every lead based on WhatsApp conversations." },
      { type: "feature" as const, text: "WhatsApp message templates — save and reuse common property descriptions." },
      { type: "improvement" as const, text: "20x faster document loading in property packages." },
      { type: "fix" as const, text: "Fixed contact sync issue with Google Contacts." },
    ],
  },
  {
    date: "May 30, 2026",
    version: "v1.4.0",
    items: [
      { type: "feature" as const, text: "Property package sharing — share photos, documents, and location in one WhatsApp message." },
      { type: "feature" as const, text: "Dark mode toggle in web dashboard." },
      { type: "improvement" as const, text: "Redesigned property details page with better photo gallery." },
      { type: "fix" as const, text: "Fixed issue with duplicate lead creation from WhatsApp." },
    ],
  },
  {
    date: "April 25, 2026",
    version: "v1.3.0",
    items: [
      { type: "feature" as const, text: "WhatsApp Business API integration — two-way sync with WhatsApp Business." },
      { type: "feature" as const, text: "Custom follow-up reminders with WhatsApp notifications." },
      { type: "improvement" as const, text: "Improved search — now searches across properties, contacts, and documents." },
      { type: "fix" as const, text: "Fixed timezone issues in follow-up scheduling." },
    ],
  },
  {
    date: "March 20, 2026",
    version: "v1.2.0",
    items: [
      { type: "feature" as const, text: "Document management — upload, organise, and share Aadhaar, PAN, sale deeds." },
      { type: "feature" as const, text: "Contact groups — organise buyers, sellers, and partners separately." },
      { type: "improvement" as const, text: "Performance improvements across dashboard." },
    ],
  },
  {
    date: "February 15, 2026",
    version: "v1.1.0",
    items: [
      { type: "feature" as const, text: "Property listing management with photo uploads and location tagging." },
      { type: "feature" as const, text: "Basic analytics dashboard — property views, lead sources." },
      { type: "improvement" as const, text: "Mobile-responsive web interface." },
    ],
  },
  {
    date: "January 10, 2026",
    version: "v1.0.0",
    items: [
      { type: "feature" as const, text: "Public launch! WhatsApp lead capture, contact management, and deal tracking." },
    ],
  },
];

const typeConfig = {
  feature: { icon: Sparkles, label: "New Feature", color: "text-brand-500 bg-brand-500/10" },
  improvement: { icon: ArrowUp, label: "Improvement", color: "text-brand-alt-500 bg-brand-alt-500/10" },
  fix: { icon: Bug, label: "Bug Fix", color: "text-success bg-success-bg" },
};

export default function ChangelogPage() {
  return (
    <>
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Changelog</span>
          <h1 className="section-title">What's new at PropFlow.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            We ship every month. Here&apos;s everything we&apos;ve been working on.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {changes.map((release) => (
              <div key={release.version}>
                <div className="mb-4 flex items-baseline gap-3">
                  <h2 className="text-lg font-bold text-fg">{release.version}</h2>
                  <span className="text-sm text-fg-muted">{release.date}</span>
                </div>
                <div className="space-y-3">
                  {release.items.map((item, i) => {
                    const config = typeConfig[item.type];
                    const Icon = config.icon;
                    return (
                      <div key={i} className="flex gap-3 rounded-xl border border-border bg-bg p-4">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${config.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <span className={`text-[10px] font-semibold uppercase tracking-wider ${config.color.split(" ")[0]}`}>
                            {config.label}
                          </span>
                          <p className="mt-0.5 text-sm text-fg-secondary">{item.text}</p>
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
