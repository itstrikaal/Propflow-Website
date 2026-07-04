"use client";

import { cn } from "@/lib/utils";

const logos = [
  { name: "SVC Realtors", city: "Mumbai" },
  { name: "Arihant Realty", city: "Delhi NCR" },
  { name: "Siddha Group", city: "Bangalore" },
  { name: "Vakratunda Properties", city: "Pune" },
  { name: "Sunteck Estates", city: "Mumbai" },
  { name: "Nirman Ventures", city: "Hyderabad" },
  { name: "Kumar Realtors", city: "Chennai" },
  { name: "ASF Group", city: "Lucknow" },
  { name: "Vishnu Priya Estates", city: "Chennai" },
  { name: "Maple Homes", city: "Gurgaon" },
];

function LogoItem({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className="group mx-8 flex shrink-0 items-center gap-3">
      <span className="border-border bg-surface-secondary text-fg-secondary group-hover:text-fg group-hover:border-fg/20 flex h-10 w-10 items-center justify-center rounded-xl border font-display text-base font-semibold transition-all duration-300">
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

export function TrustedBySection() {
  return (
    <section
      className="border-border/60 relative overflow-hidden border-y py-16 sm:py-20"
      aria-label="Trusted by brokerages"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-fg-muted mx-auto mb-10 max-w-md text-center text-[11px] font-medium tracking-[0.2em] uppercase">
          Trusted by brokerages across 22 Indian cities
        </p>

        {/* Row 1 — scrolls right */}
        <div
          className="marquee-container mb-5 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            className={cn(
              "marquee-track animate-marquee-right flex w-fit"
            )}
            style={{ ["--animate-duration" as string]: "55s" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`r-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left (offset logos for variety) */}
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
            className={cn(
              "marquee-track animate-marquee-left flex w-fit"
            )}
            style={{ ["--animate-duration" as string]: "50s" }}
          >
            {[...logos.slice().reverse(), ...logos.slice().reverse()].map(
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
