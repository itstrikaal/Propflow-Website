import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { Shield, Lock, Server, Eye, Key, FileCheck } from "lucide-react";

export const metadata = createMetadata({
  title: "Security",
  description: "PropFlow takes security seriously. End-to-end encryption, Indian data centres, and enterprise-grade compliance to protect your client data.",
  path: "/security",
});

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your client documents are never accessible to unauthorised parties.",
  },
  {
    icon: Server,
    title: "Indian Data Centres",
    description: "Your data stays in India — hosted on AWS Mumbai and Bangalore regions. Compliant with Indian data protection laws.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Granular role-based access control (RBAC). Team members see only what they need to. Full audit logs track every action.",
  },
  {
    icon: Key,
    title: "Two-Factor Authentication",
    description: "Protect your account with 2FA via authenticator app or SMS. Enterprise SSO via Google Workspace, Microsoft Entra, and more.",
  },
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "We follow SOC 2 Type II security practices. Regular third-party audits ensure our controls meet the highest standards.",
  },
  {
    icon: FileCheck,
    title: "Data Backup & Recovery",
    description: "Automated daily backups with 30-day retention. Point-in-time recovery ensures your data is never lost.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Security</span>
          <h1 className="section-title">Your data is safe with us.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            As a broker, you handle sensitive client information — Aadhaar, PAN, property documents. We treat that responsibility with the seriousness it deserves.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-bg p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-alt-500">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-tertiary">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Security FAQs</h2>
          <div className="mt-8 space-y-6">
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
              <div key={faq.q} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-fg">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-tertiary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
