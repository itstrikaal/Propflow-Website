import { CTASection } from "@/components/sections/cta";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { companyStats, trustSignals } from "@/lib/constants";
import {
  Building2,
  Target,
  Users,
  Shield,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About",
  description:
    "PropFlow is building the operating system for Indian real estate. Founded by engineers and real estate professionals who saw the gap.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Built for India",
    description:
      "Every feature is designed for the Indian real estate market — WhatsApp integration, local compliance, regional language support, and Rupee-first pricing.",
  },
  {
    icon: Users,
    title: "Broker-first",
    description:
      "We exist to make brokers successful. Every product decision starts with the question 'Does this help our users close more deals?'",
  },
  {
    icon: Shield,
    title: "Trust & security",
    description:
      "Handling sensitive data like Aadhaar and property documents means security is our foundation. End-to-end encryption and Indian data centres.",
  },
  {
    icon: Heart,
    title: "Customer obsession",
    description:
      "Our support team includes former brokers who understand your workflow. WhatsApp support in Hindi, Marathi, Gujarati, and English.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        id="ld-about-page"
        schema={[
          webPageSchema({
            title: "About PropFlow",
            description:
              "PropFlow is building the operating system for Indian real estate.",
            path: "/about",
            type: "AboutPage",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "About", href: "/about" }]),
        ]}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24"
        aria-label="About PropFlow"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">About</span>
          <h1 className="font-display section-title">
            We&apos;re building the operating system
            <br />
            <span className="text-fg-tertiary">for Indian real estate.</span>
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            PropFlow was founded in {trustSignals.founded} by engineers and real estate
            professionals who experienced firsthand the chaos of managing a brokerage
            with disconnected tools.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="border-border bg-surface-secondary mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border">
            <Building2 className="text-fg h-6 w-6" />
          </div>
          <h2 className="font-display text-fg mt-6 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
            Our mission
          </h2>
          <p className="text-fg-tertiary mt-5 text-base leading-relaxed sm:text-lg">
            India has over 1 million property brokers, yet most run their business on
            WhatsApp, Gallery, Google Drive, and their phone contacts. That&apos;s five
            apps to manage one deal. We&apos;re building the single platform that brings
            it all together — so brokers can focus on what matters: closing deals and
            serving clients.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-surface-secondary relative overflow-hidden">
        <div className="mesh-section-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface flex flex-col items-center px-6 py-10 text-center"
              >
                <span className="text-fg font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  {stat.value.toLocaleString("en-IN")}
                  <span className="ml-0.5 text-fg-tertiary text-3xl font-normal">
                    {stat.suffix ?? ""}
                  </span>
                </span>
                <span className="text-fg-tertiary mt-3 text-sm tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-border border-y">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="flex items-start gap-3">
            <div className="border-border bg-surface-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
              <MapPin className="text-fg h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-fg text-sm font-semibold">
                Headquartered in {trustSignals.headquarters}
              </p>
              <p className="text-fg-muted mt-0.5 text-xs">
                Data stored in {trustSignals.dataResidency}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="border-border bg-surface-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
              <Shield className="text-fg h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-fg text-sm font-semibold">{trustSignals.encryption}</p>
              <p className="text-fg-muted mt-0.5 text-xs">
                {trustSignals.uptimeSLA} uptime SLA on Enterprise
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="border-border bg-surface-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
              <Calendar className="text-fg h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-fg text-sm font-semibold">
                Founded {trustSignals.founded}
              </p>
              <p className="text-fg-muted mt-0.5 text-xs">
                Building in public since day one
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="border-border bg-surface-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
              <Heart className="text-fg h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-fg text-sm font-semibold">
                {trustSignals.supportHours}
              </p>
              <p className="text-fg-muted mt-0.5 text-xs">
                Support via {trustSignals.support.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <span className="section-label">What we believe</span>
            <h2 className="font-display section-title">Principles over everything.</h2>
            <p className="section-sub">
              These four principles guide every decision we make — from which features
              we build to how we answer support tickets.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="border-border bg-surface-secondary flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                  <value.icon className="text-fg h-5 w-5" />
                </div>
                <h3 className="text-fg mt-5 text-lg font-semibold tracking-[-0.02em]">
                  {value.title}
                </h3>
                <p className="text-fg-tertiary mt-3 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
