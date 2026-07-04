import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with PropFlow. WhatsApp support, email, or schedule a demo. We're here to help Indian brokers succeed.",
  path: "/contact",
});

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    description: "Fastest response. We reply within minutes.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@propflow.in",
    href: "mailto:hello@propflow.in",
    description: "We'll respond within 24 hours.",
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Mon–Sat, 10:00 AM – 7:00 PM IST",
    description: "Sunday closed.",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Koregaon Park, Pune — 411001",
    description: "Maharashtra, India",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        id="ld-contact-page"
        schema={[
          webPageSchema({
            title: "Contact PropFlow",
            description:
              "Get in touch with PropFlow via WhatsApp, email, or schedule a demo.",
            path: "/contact",
            type: "ContactPage",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]),
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Contact"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Contact</span>
          <h1 className="font-display section-title">
            Let&apos;s talk about your brokerage.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            Whether you want a demo, have a question, or need help getting started —
            we&apos;re here for you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Contact methods */}
            <div className="space-y-4 lg:col-span-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group border-border bg-surface hover:border-fg/20 flex items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="border-border bg-surface-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                    <method.icon className="text-fg h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-fg text-sm font-semibold">{method.label}</p>
                    <p className="text-fg mt-0.5 text-sm font-medium tracking-[-0.01em]">
                      {method.value}
                    </p>
                    <p className="text-fg-muted mt-0.5 text-xs">{method.description}</p>
                  </div>
                  <ArrowRight className="text-fg-muted mt-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="border-border bg-surface relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:col-span-3">
              <h2 className="text-fg text-lg font-semibold tracking-[-0.02em]">
                Send us a message
              </h2>
              <p className="text-fg-tertiary mt-1 text-sm">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
