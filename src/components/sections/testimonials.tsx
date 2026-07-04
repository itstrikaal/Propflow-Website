"use client";

import { Star, Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { testimonials } from "@/lib/constants";
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
        "border-border bg-surface group flex w-[380px] shrink-0 flex-col rounded-2xl border p-7 shadow-xs",
        "transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
      )}
    >
      <Quote className="text-fg-muted/30 mb-4 h-5 w-5" />

      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="fill-warning text-warning h-3.5 w-3.5" />
        ))}
      </div>

      <p className="text-fg-secondary flex-1 text-sm leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--border-secondary)] pt-5">
        <div className="bg-fg text-bg flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold tracking-[-0.02em]">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-fg truncate text-sm font-semibold">{name}</p>
          <p className="text-fg-muted truncate text-xs">
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
      description="Real stories from brokerages that transformed their day-to-day with PropFlow."
      mesh="soft"
      containerClass="max-w-none"
    >
      <div className="space-y-6">
        {/* Row A — scrolls right */}
        <div
          className="marquee-container overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track animate-marquee-right flex w-fit gap-5"
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
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track animate-marquee-left flex w-fit gap-5"
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

      {/* Aggregate proof row */}
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-4">
        <div className="bg-surface flex flex-col items-center px-6 py-7 text-center">
          <span className="text-fg font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            1.8k+
          </span>
          <span className="text-fg-tertiary mt-2 text-xs tracking-wide sm:text-sm">
            Active brokers
          </span>
        </div>
        <div className="bg-surface flex flex-col items-center px-6 py-7 text-center">
          <span className="text-fg font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            4.9
            <span className="text-fg-tertiary ml-0.5 text-2xl font-normal">
              /5
            </span>
          </span>
          <span className="text-fg-tertiary mt-2 text-xs tracking-wide sm:text-sm">
            Average rating
          </span>
        </div>
        <div className="bg-surface flex flex-col items-center px-6 py-7 text-center">
          <span className="text-fg font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            22
          </span>
          <span className="text-fg-tertiary mt-2 text-xs tracking-wide sm:text-sm">
            Indian cities
          </span>
        </div>
        <div className="bg-surface flex flex-col items-center px-6 py-7 text-center">
          <span className="text-fg font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            3×
          </span>
          <span className="text-fg-tertiary mt-2 text-xs tracking-wide sm:text-sm">
            More deals closed
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
