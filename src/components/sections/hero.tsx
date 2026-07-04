"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Check } from "lucide-react";
import { motion } from "framer-motion";
import { MeshBackground } from "@/components/shared/mesh-background";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/constants";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

const headingLines = [
  { text: "Your WhatsApp, CRM,", plain: true },
  { text: "and documents.", accent: true },
  { text: "One quiet app.", plain: true },
];

const trustItems = [
  "No credit card",
  "14-day free trial",
  "Cancel anytime",
];

export function HeroSection() {
  const reducedMotion = useReducedMotionSafe();
  const target = 1847;
  const [count, setCount] = useState(reducedMotion ? target : 0);

  // Animated counter — only runs when motion is allowed. When reducedMotion
  // is true the initial state already holds the target value.
  useEffect(() => {
    if (reducedMotion) return;
    const duration = 2200;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [reducedMotion, target]);

  const handleScrollToDemo = useCallback(() => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48"
      aria-label="Hero"
    >
      <MeshBackground variant="hero" animated grain />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <Link
            href="/changelog"
            className="group border-border bg-surface/70 hover:bg-surface inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md"
          >
            <span className="bg-success-bg flex h-4 w-4 items-center justify-center rounded-full">
              <span className="bg-success h-1.5 w-1.5 animate-pulse rounded-full" />
            </span>
            <span className="text-fg-secondary font-medium">Now in Public Beta</span>
            <span className="text-fg-muted">·</span>
            <span className="text-fg-tertiary group-hover:text-fg inline-flex items-center gap-0.5 transition-colors">
              Read changelog
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>

        {/* Headline — serif, centered, line-by-line reveal */}
        <h1 className="font-display text-fg mt-8 text-center text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.035em]">
          {headingLines.map((line, i) => (
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
          className="text-fg-tertiary mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed tracking-[-0.011em] sm:text-lg"
        >
          PropFlow is the calm operating system for Indian property brokers.
          WhatsApp, listings, documents, and deals — finally in one place,
          designed for how real estate actually works.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button variant="default" size="xl" asChild className="group cta-group min-w-[180px]">
            <Link href="https://app.propflow.in/sign-up">
              Start Free Trial
              <ArrowRight className="cta-arrow h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={handleScrollToDemo}
            className="group min-w-[180px]"
          >
            <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            See how it works
          </Button>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs"
        >
          {trustItems.map((item) => (
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
          className="mt-20 sm:mt-28"
        >
          {/* Avatar stack + count */}
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
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-warning text-warning h-3.5 w-3.5" />
                ))}
              </div>
              <span className="text-fg-secondary text-sm">
                <span className="text-fg font-semibold tabular-nums">
                  {count.toLocaleString("en-IN")}+
                </span>{" "}
                brokers across India
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="bg-surface flex flex-col items-center px-6 py-7 text-center"
              >
                <span className="text-fg font-display text-3xl font-semibold tracking-[-0.03em] tabular-nums sm:text-4xl">
                  {stat.value.toLocaleString("en-IN")}
                  <span className="ml-0.5 text-fg-tertiary text-2xl font-normal">
                    {stat.suffix}
                  </span>
                </span>
                <span className="text-fg-tertiary mt-2 text-xs tracking-wide sm:text-sm">
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
