"use client";

const logos = [
  { name: "SVC Realtors", gradient: "from-brand-500 to-brand-600", city: "Mumbai" },
  {
    name: "Arihant Realty",
    gradient: "from-brand-alt-500 to-brand-alt-600",
    city: "Delhi NCR",
  },
  {
    name: "Siddha Group",
    gradient: "from-emerald-500 to-emerald-600",
    city: "Bangalore",
  },
  {
    name: "Vakratunda Properties",
    gradient: "from-violet-500 to-violet-600",
    city: "Pune",
  },
  { name: "Sunteck Estates", gradient: "from-amber-500 to-amber-600", city: "Mumbai" },
  { name: "Nirman Ventures", gradient: "from-cyan-500 to-cyan-600", city: "Hyderabad" },
  { name: "Kumar Realtors", gradient: "from-rose-500 to-rose-600", city: "Chennai" },
  { name: "ASF Group", gradient: "from-indigo-500 to-indigo-600", city: "Lucknow" },
  {
    name: "Vishnu Priya Estates",
    gradient: "from-orange-500 to-orange-600",
    city: "Chennai",
  },
  { name: "Maple Homes", gradient: "from-teal-500 to-teal-600", city: "Gurgaon" },
];

function LogoItem({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className="mx-6 flex shrink-0 items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm ${logo.gradient}`}
      >
        <span className="text-sm font-bold text-white">{logo.name.charAt(0)}</span>
      </div>
      <div>
        <span className="text-fg text-sm font-medium whitespace-nowrap">{logo.name}</span>
        <span className="text-fg-muted block text-[10px]">{logo.city}</span>
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section
      className="border-border bg-bg border-b py-16"
      aria-label="Trusted by brokerages"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-fg-muted mb-10 text-center text-xs font-semibold tracking-[0.2em] uppercase">
          Trusted by brokerages across India
        </p>

        {/* Row 1 — scrolls right */}
        <div
          className="marquee-container mb-5 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track animate-marquee-right flex w-fit"
            style={{ animationDuration: "45s" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`r-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls left */}
        <div
          className="marquee-container overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track animate-marquee-left flex w-fit"
            style={{ animationDuration: "40s" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={`l-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
