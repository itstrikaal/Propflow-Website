import { Shield, Lock, Server, CheckCircle2 } from "lucide-react";
import { securityBadges } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  lock: Lock,
  server: Server,
  check: CheckCircle2,
};

export function SecurityBadgesSection() {
  return (
    <section
      className="section-padding bg-bg"
      aria-label="Security and compliance"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Security & Compliance</span>
          <h2 className="section-title font-display">
            Built on a foundation of trust.
          </h2>
          <p className="section-sub">
            Your leads, your documents, your commissions — the most sensitive
            thing on our servers. We treat it that way.
          </p>
        </div>

        {/* Mobile-first: 1 col → 2 col at sm → 4 col at lg */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {securityBadges.map((b) => {
            const Icon = iconMap[b.icon] ?? Shield;
            return (
              <article
                key={b.title}
                className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:shadow-md sm:p-6"
              >
                <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="border-border bg-surface-secondary flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                  <Icon className="text-fg h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>
                <h3 className="text-fg mt-4 text-[15px] font-semibold tracking-[-0.018em] sm:mt-5 sm:text-base">
                  {b.title}
                </h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </article>
            );
          })}
        </div>

        <p className="text-fg-muted mt-8 text-center text-xs sm:mt-10">
          Want the full security architecture?{" "}
          <a
            href="/security"
            className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
          >
            Read the security overview
          </a>{" "}
          or{" "}
          <a
            href="/contact"
            className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
          >
            request our compliance pack
          </a>
          .
        </p>
      </div>
    </section>
  );
}
