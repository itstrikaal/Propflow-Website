"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Check } from "lucide-react";
import { motion } from "framer-motion";
import { MeshBackground } from "@/components/shared/mesh-background";
import { Button } from "@/components/ui/button";
import { heroCopy, heroSocialProof, stats } from "@/lib/constants";

export function HeroSection() {
  const handleScrollToHowItWorks = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28"
      aria-label="Hero"
    >
      <MeshBackground variant="hero" animated grain />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <span className="border-border bg-surface/70 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs shadow-sm backdrop-blur-md">
            <span className="bg-success-bg flex h-4 w-4 items-center justify-center rounded-full">
              <span className="bg-success h-1.5 w-1.5 animate-pulse rounded-full" />
            </span>
            <span className="text-fg-secondary font-medium">{heroCopy.eyebrow}</span>
          </span>
        </motion.div>

        {/* Headline — serif, centered, line-by-line reveal */}
        <h1 className="font-display text-fg mt-7 text-center text-[clamp(2.25rem,8vw,5rem)] leading-[1.12] tracking-[-0.035em] sm:mt-8">
          {heroCopy.headlineLines.map((line, i) => (
            <span key={i} className="line-mask">
              <span className="line-reveal">
                {line.accent ? (
                  <span className="gradient-text">{line.text}</span>
                ) : (
                  line.text
                )}
              </span>
            </span>
          ))}
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-fg-tertiary mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed tracking-[-0.011em] sm:mt-7 sm:text-lg"
        >
          {heroCopy.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <Button
            variant="default"
            size="xl"
            asChild
            className="group cta-group w-full sm:w-auto sm:min-w-[200px]"
          >
            <Link href={heroCopy.primaryCta.href}>
              {heroCopy.primaryCta.label}
              <ArrowRight className="cta-arrow h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            asChild
            className="group w-full sm:w-auto sm:min-w-[180px]"
          >
            <Link href={heroCopy.secondaryCta.href} onClick={handleScrollToHowItWorks}>
              <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              {heroCopy.secondaryCta.label}
            </Link>
          </Button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs"
          aria-label="Trial benefits"
        >
          {heroCopy.trustRow.map((item) => (
            <span
              key={item}
              className="text-fg-tertiary inline-flex items-center gap-1.5"
            >
              <Check className="text-success h-3 w-3" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Social proof + Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24"
        >
          {/* Rating + count row */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={`/images/avatars/avatar-${i}.svg`}
                  alt=""
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
                  className="border-bg ring-border h-9 w-9 rounded-full border-2 object-cover ring-1"
                />
              ))}
              <div className="border-bg bg-fg text-bg ring-border flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-medium ring-1">
                +1.8k
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-warning text-warning h-3.5 w-3.5" />
                ))}
              </div>
              <span className="text-fg-secondary text-sm">
                <span className="text-fg font-semibold tabular-nums">
                  {heroSocialProof.rating}
                  {heroSocialProof.ratingOutOf}
                </span>{" "}
                · {heroSocialProof.reviewCount} · {heroSocialProof.brokerLabel}
              </span>
            </div>
          </div>

          {/* Stats grid — 2x2 on mobile, 4 across on sm+ */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:mt-12 sm:grid-cols-4">
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
        </motion.div>
      </div>
    </section>
  );
}
