"use client";

import { trustedBrokerages } from "@/lib/constants";
import { cn } from "@/lib/utils";

function LogoItem({
  logo,
}: {
  logo: (typeof trustedBrokerages)[number];
}) {
  return (
    <div className="group mx-6 flex shrink-0 items-center gap-3 sm:mx-8">
      <span className="border-border bg-surface-secondary text-fg-secondary group-hover:text-fg group-hover:border-fg/20 flex h-9 w-9 items-center justify-center rounded-xl border font-display text-sm font-semibold transition-all duration-300 sm:h-10 sm:w-10 sm:text-base">
        {logo.name.charAt(0)}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-fg text-sm font-medium whitespace-nowrap transition-colors">
          {logo.name}
        </span>
        <span className="text-fg-muted text-[10px] tracking-widest uppercase">
          {logo.city}
        </span>
      </span>
    </div>
  );
}

/**
 * Trusted-by brokerage marquee. Two rows scrolling in opposite directions.
 * On mobile, items scale down slightly and the gap tightens.
 */
export function TrustedBySection() {
  return (
    <section
      className="border-border/60 relative overflow-hidden border-y py-12 sm:py-20"
      aria-label="Trusted by brokerages"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-fg-muted mx-auto mb-8 max-w-md text-center text-[11px] font-medium tracking-[0.2em] uppercase sm:mb-10">
          Brokerages in 22 Indian cities run their day on PropFlow
        </p>

        {/* Row 1 — scrolls right */}
        <div
          className="marquee-container mb-4 overflow-hidden sm:mb-5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            className={cn("marquee-track animate-marquee-right flex w-fit")}
            style={{ ["--animate-duration" as string]: "55s" }}
          >
            {[...trustedBrokerages, ...trustedBrokerages].map((logo, i) => (
              <LogoItem key={`r-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left (offset for visual variety) */}
        <div
          className="marquee-container overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            className={cn("marquee-track animate-marquee-left flex w-fit")}
            style={{ ["--animate-duration" as string]: "50s" }}
          >
            {[...trustedBrokerages.slice().reverse(), ...trustedBrokerages.slice().reverse()].map(
              (logo, i) => (
                <LogoItem key={`l-${i}`} logo={logo} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
