import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { Building2, Target, Users, Shield, Heart } from "lucide-react";

export const metadata = createMetadata({
  title: "About",
  description: "PropFlow is building the operating system for Indian real estate. Founded by engineers and real estate professionals who saw the gap.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Built for India",
    description: "Every feature is designed for the Indian real estate market — WhatsApp integration, local compliance, regional language support, and Rupee-first pricing.",
  },
  {
    icon: Users,
    title: "Broker-First",
    description: "We exist to make brokers successful. Every product decision starts with the question 'Does this help our users close more deals?'",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Handling sensitive data like Aadhaar and property documents means security is our foundation. End-to-end encryption and Indian data centers.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    description: "Our support team includes former brokers who understand your workflow. WhatsApp support in Hindi, Marathi, Gujarati, and English.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">About</span>
          <h1 className="section-title">We&apos;re building the OS for Indian real estate.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            PropFlow was founded in 2024 by engineers and real estate professionals who experienced firsthand the chaos of managing a brokerage with disconnected tools.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Building2 className="mx-auto h-10 w-10 text-brand-500" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-fg sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-base leading-relaxed text-fg-tertiary sm:text-lg">
              India has over 1 million property brokers, yet most run their business on WhatsApp, Gallery, Google Drive, and their phone contacts. 
              That&apos;s five apps to manage one deal. We&apos;re building the single platform that brings it all together — so brokers can focus on 
              what matters: closing deals and serving clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { number: "12,847+", label: "Deals Closed" },
              { number: "5,000+", label: "Active Brokers" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-brand-500 sm:text-5xl">{stat.number}</p>
                <p className="mt-2 text-sm text-fg-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-fg sm:text-3xl">What We Believe</h2>
          <p className="section-sub mx-auto mt-4 max-w-2xl text-center">
            These principles guide every decision we make.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-bg p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-alt-500 shadow-sm">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fg">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-tertiary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
