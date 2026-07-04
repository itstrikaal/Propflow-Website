import { Shield, Lock, Server, CheckCircle2 } from "lucide-react";
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
          <h2 className="section-title font-display">Built on a foundation of trust.</h2>
          <p className="section-sub">
            Your data — your leads, your documents, your commissions — is the most
            sensitive thing on our servers. We treat it that way.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((b) => (
            <article
              key={b.title}
              className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="border-border bg-surface-secondary flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                <b.icon className="text-fg h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-fg mt-5 text-base font-semibold tracking-[-0.018em]">
                {b.title}
              </h3>
              <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                {b.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="text-fg-muted mt-10 text-center text-xs">
          Want the full security architecture? Read the{" "}
          <a
            href="/security"
            className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
          >
            security overview
          </a>{" "}
          or request our{" "}
          <a
            href="/contact"
            className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
          >
            SOC 2 readiness packet
          </a>
          .
        </p>
      </div>
    </section>
  );
}
