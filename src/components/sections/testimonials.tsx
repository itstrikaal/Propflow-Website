"use client";

import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { testimonials, stats } from "@/lib/constants";
import { cn } from "@/lib/utils";

function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
}: {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <article
      className={cn(
        "border-border bg-surface group flex w-[300px] shrink-0 flex-col rounded-2xl border p-5 shadow-xs sm:w-[360px] sm:p-7",
        "transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
      )}
    >
      <Quote className="text-fg-muted/30 mb-3 h-4 w-4 sm:mb-4 sm:h-5 sm:w-5" />

      <div className="mb-3 flex gap-0.5 sm:mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="fill-warning text-warning h-3.5 w-3.5" />
        ))}
      </div>

      <p className="text-fg-secondary flex-1 text-sm leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-[color:var(--border-secondary)] pt-4 sm:mt-6 sm:pt-5">
        <div className="bg-fg text-bg flex h-9 w-9 items-center justify-center rounded-full font-display text-xs font-semibold tracking-[-0.02em] sm:h-10 sm:w-10 sm:text-sm">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-fg truncate text-sm font-semibold">{name}</p>
          <p className="text-fg-muted truncate text-[11px] sm:text-xs">
            {role} · {company}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  // Split testimonials into two rows for the alternating marquee
  const half = Math.ceil(testimonials.length / 2);
  const rowA = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const rowB = [...testimonials.slice(half), ...testimonials.slice(half)];

  return (
    <SectionWrapper
      id="testimonials"
      variant="muted"
      label="Testimonials"
      serifTitle
      title={
        <>
          Brokers who made
          <br />
          <span className="text-fg-tertiary">the switch.</span>
        </>
      }
      description="Real stories from brokerages that brought their day-to-day into one calm workspace. (Names shared with permission.)"
      mesh="soft"
      containerClass="max-w-none"
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Row A — scrolls right */}
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
            className="marquee-track animate-marquee-right flex w-fit gap-4 sm:gap-5"
            style={{ ["--animate-duration" as string]: "60s" }}
          >
            {rowA.map((t, i) => (
              <TestimonialCard
                key={`a-${i}-${t.id}`}
                name={t.name}
                role={t.role}
                company={t.company}
                content={t.content}
                rating={t.rating}
              />
            ))}
          </div>
        </div>

        {/* Row B — scrolls left */}
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
            className="marquee-track animate-marquee-left flex w-fit gap-4 sm:gap-5"
            style={{ ["--animate-duration" as string]: "55s" }}
          >
            {rowB.map((t, i) => (
              <TestimonialCard
                key={`b-${i}-${t.id}`}
                name={t.name}
                role={t.role}
                company={t.company}
                content={t.content}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Aggregate proof row — 2 col on mobile, 4 on sm */}
      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:mt-16 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-surface flex flex-col items-center px-3 py-6 text-center sm:px-6 sm:py-7"
          >
            <span className="text-fg font-display text-2xl font-semibold tracking-[-0.03em] tabular-nums sm:text-4xl">
              {stat.value.toLocaleString("en-IN")}
              <span className="ml-0.5 text-fg-tertiary text-lg font-normal sm:text-2xl">
                {stat.suffix}
              </span>
            </span>
            <span className="text-fg-tertiary mt-2 text-[11px] tracking-wide sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
