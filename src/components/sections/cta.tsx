"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { finalCta } from "@/lib/constants";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
      aria-label="Get started with PropFlow"
    >
      {/* Mesh background */}
      <div aria-hidden="true" className="mesh-hero" />

      {/* Soft fade overlay at edges so it sits well on the page */}
      <div
        aria-hidden="true"
        className="from-bg via-bg/30 absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent sm:h-32"
      />
      <div
        aria-hidden="true"
        className="from-bg via-bg/30 absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent sm:h-32"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-border bg-surface relative overflow-hidden rounded-2xl border p-7 shadow-2xl sm:rounded-3xl sm:p-12 lg:p-20"
        >
          {/* Decorative gradient orb */}
          <div
            aria-hidden="true"
            className="from-mesh-1 via-mesh-2 to-mesh-3 absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-60 blur-3xl sm:-top-24 sm:-right-24 sm:h-72 sm:w-72"
          />

          <div className="relative">
            <span className="section-label">{finalCta.eyebrow}</span>

            <h2 className="font-display text-fg mt-5 text-[clamp(1.875rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.035em] sm:mt-6">
              {finalCta.headline}
            </h2>

            <p className="text-fg-tertiary mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg">
              {finalCta.subheadline}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Button
                size="xl"
                asChild
                className="group cta-group w-full sm:w-auto sm:min-w-[200px]"
              >
                <a href={finalCta.primaryCta.href}>
                  {finalCta.primaryCta.label}
                  <ArrowRight className="cta-arrow h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="xl"
                asChild
                className="w-full sm:w-auto sm:min-w-[180px]"
              >
                <a href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</a>
              </Button>
            </div>

            <ul className="text-fg-muted mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:mt-7 sm:text-xs">
              {finalCta.trustRow.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <Check className="text-fg h-3 w-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
