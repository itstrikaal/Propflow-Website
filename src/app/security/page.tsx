import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Shield, Lock, Server, Eye, Key, FileCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "Security",
  description:
    "PropFlow takes security seriously. End-to-end encryption, Indian data centres, and enterprise-grade compliance to protect your client data.",
  path: "/security",
});

const features = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your client documents are never accessible to unauthorised parties.",
  },
  {
    icon: Server,
    title: "Indian data centres",
    description:
      "Your data stays in India — hosted on AWS Mumbai and Bangalore regions. Compliant with Indian data protection laws.",
  },
  {
    icon: Eye,
    title: "Access controls",
    description:
      "Granular role-based access control (RBAC). Team members see only what they need to. Full audit logs track every action.",
  },
  {
    icon: Key,
    title: "Two-factor authentication",
    description:
      "Protect your account with 2FA via authenticator app or SMS. Enterprise SSO via Google Workspace, Microsoft Entra, and more.",
  },
  {
    icon: Shield,
    title: "SOC 2 compliant",
    description:
      "We follow SOC 2 Type II security practices. Regular third-party audits ensure our controls meet the highest standards.",
  },
  {
    icon: FileCheck,
    title: "Data backup & recovery",
    description:
      "Automated daily backups with 30-day retention. Point-in-time recovery ensures your data is never lost.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd
        id="ld-security-page"
        schema={[
          webPageSchema({
            title: "PropFlow Security",
            description:
              "End-to-end encryption, Indian data centres, and enterprise-grade compliance.",
            path: "/security",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Security", href: "/security" }]),
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Security"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Security</span>
          <h1 className="font-display section-title">Your data is safe with us.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            As a broker, you handle sensitive client information — Aadhaar, PAN, property
            documents. We treat that responsibility with the seriousness it deserves.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article
                key={f.title}
                className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="border-border bg-surface-secondary flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="text-fg h-5 w-5" />
                </div>
                <h3 className="text-fg mt-5 text-lg font-semibold tracking-[-0.022em]">
                  {f.title}
                </h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-secondary relative overflow-hidden">
        <div className="mesh-section-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-fg mb-8 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
            Security FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Where is my data stored?",
                a: "All PropFlow data is hosted on AWS servers in Mumbai and Bangalore, India. Your data never leaves Indian borders.",
              },
              {
                q: "Is PropFlow compliant with Indian data protection laws?",
                a: "Yes. We comply with the Digital Personal Data Protection Act, 2023. We never share client data with third parties.",
              },
              {
                q: "Do you offer SSO for enterprises?",
                a: "Yes. Enterprise plans include SSO via Google Workspace, Microsoft Entra ID, Okta, and any SAML 2.0 provider.",
              },
              {
                q: "How do you handle data deletion?",
                a: "When you delete your account, all your data is permanently deleted within 30 days. We provide a data export option before deletion.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border-border bg-surface rounded-2xl border p-6"
              >
                <h3 className="text-fg text-base font-semibold tracking-[-0.018em]">
                  {faq.q}
                </h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
