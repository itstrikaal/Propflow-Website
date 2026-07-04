import { Shield, Lock, CheckCircle2, Server } from "lucide-react";
import { trustSignals } from "@/lib/constants";

const badges = [
  {
    icon: Shield,
    title: "DPDPA-ready",
    desc: "Compliant with India's Digital Personal Data Protection Act.",
  },
  {
    icon: Lock,
    title: "AES-256 encryption",
    desc: "All data encrypted in transit (TLS 1.3) and at rest.",
  },
  {
    icon: Server,
    title: "Data stays in India",
    desc: `Hosted on ${trustSignals.dataResidency}.`,
  },
  {
    icon: CheckCircle2,
    title: `${trustSignals.uptimeSLA} uptime SLA`,
    desc: "Monitored 24×7 with on-call engineering for Enterprise.",
  },
];

export function SecurityBadgesSection() {
  return (
    <section className="section-padding bg-bg" aria-label="Security and compliance">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Security & Compliance</span>
          <h2 className="section-title">Built on a foundation of trust.</h2>
          <p className="section-sub">
            Your data — your leads, your documents, your commissions — is the most
            sensitive thing on our servers. We treat it that way.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="border-border bg-surface hover:border-brand-500/40 rounded-2xl border p-6 transition-colors"
            >
              <div className="bg-brand-500/10 text-brand-500 flex h-10 w-10 items-center justify-center rounded-xl">
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-fg mt-4 text-sm font-semibold">{b.title}</h3>
              <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-fg-muted mt-8 text-center text-xs">
          Want the full security architecture? Read the{" "}
          <a
            href="/security"
            className="text-brand-500 underline-offset-2 hover:underline"
          >
            security overview
          </a>{" "}
          or request our{" "}
          <a
            href="/contact"
            className="text-brand-500 underline-offset-2 hover:underline"
          >
            SOC 2 readiness packet
          </a>
          .
        </p>
      </div>
    </section>
  );
}
