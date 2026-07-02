import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { Mail, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with PropFlow. WhatsApp support, email, or schedule a demo. We're here to help Indian brokers succeed.",
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
    label: "Office Hours",
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
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-label">Contact</span>
            <h1 className="section-title">Let&apos;s talk about your brokerage.</h1>
            <p className="section-sub mx-auto max-w-2xl">
              Whether you want a demo, have a question, or need help getting started — we&apos;re here for you.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            {/* Contact methods */}
            <div className="space-y-4 lg:col-span-2">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-brand-500/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-alt-500">
                    <method.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-fg">{method.label}</p>
                    <p className="mt-0.5 text-sm text-brand-500">{method.value}</p>
                    <p className="mt-0.5 text-xs text-fg-muted">{method.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 text-fg-muted transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-3">
              <h2 className="text-lg font-semibold text-fg">Send us a message</h2>
              <p className="mt-1 text-sm text-fg-tertiary">
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
