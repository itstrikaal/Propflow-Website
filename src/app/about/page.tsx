import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { companyStats, trustSignals } from "@/lib/constants";
import { Building2, Target, Users, Shield, Heart, MapPin, Calendar } from "lucide-react";

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
    title: "Broker-First",
    description:
      "We exist to make brokers successful. Every product decision starts with the question 'Does this help our users close more deals?'",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Handling sensitive data like Aadhaar and property documents means security is our foundation. End-to-end encryption and Indian data centers.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description:
      "Our support team includes former brokers who understand your workflow. WhatsApp support in Hindi, Marathi, Gujarati, and English.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">About</span>
          <h1 className="section-title">
            We&apos;re building the OS for Indian real estate.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            PropFlow was founded in 2024 by engineers and real estate professionals who
            experienced firsthand the chaos of managing a brokerage with disconnected
            tools.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="text-brand-500 mx-auto h-10 w-10" />
            <h2 className="text-fg mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Our Mission
            </h2>
            <p className="text-fg-tertiary mt-4 text-base leading-relaxed sm:text-lg">
              India has over 1 million property brokers, yet most run their business on
              WhatsApp, Gallery, Google Drive, and their phone contacts. That&apos;s five
              apps to manage one deal. We&apos;re building the single platform that brings
              it all together — so brokers can focus on what matters: closing deals and
              serving clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-brand-500 text-4xl font-bold sm:text-5xl">
                  {stat.value.toLocaleString("en-IN")}
                  {stat.suffix ?? ""}
                </p>
                <p className="text-fg-muted mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-border bg-surface border-y">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="flex items-start gap-3">
            <MapPin
              className="text-brand-500 mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-fg text-sm font-semibold">
                Headquartered in {trustSignals.headquarters}
              </p>
              <p className="text-fg-muted text-xs">
                Data stored in {trustSignals.dataResidency}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield
              className="text-brand-500 mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-fg text-sm font-semibold">{trustSignals.encryption}</p>
              <p className="text-fg-muted text-xs">
                {trustSignals.uptimeSLA} uptime SLA on Enterprise
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar
              className="text-brand-500 mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-fg text-sm font-semibold">
                Founded {trustSignals.founded}
              </p>
              <p className="text-fg-muted text-xs">Building in public since day one</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Heart
              className="text-brand-500 mt-0.5 h-5 w-5 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-fg text-sm font-semibold">{trustSignals.supportHours}</p>
              <p className="text-fg-muted text-xs">
                Support via {trustSignals.support.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-fg text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What We Believe
          </h2>
          <p className="section-sub mx-auto mt-4 max-w-2xl text-center">
            These principles guide every decision we make.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-border bg-bg rounded-2xl border p-8"
              >
                <div className="from-brand-500 to-brand-alt-500 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-fg mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
