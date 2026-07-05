"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageCircle, LayoutDashboard, Zap } from "lucide-react";
import { solutionPillars } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "message-circle": MessageCircle,
  "layout-dashboard": LayoutDashboard,
  zap: Zap,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function SolutionSection() {
  return (
    <SectionWrapper
      id="solution"
      variant="light"
      label="How PropFlow fixes it"
      serifTitle
      title={
        <>
          One workspace.
          <br />
          <span className="text-fg-tertiary">Every part of your day.</span>
        </>
      }
      description="Three pillars that turn chaos into a clear, repeatable workflow — from the first WhatsApp ping to the registered deed."
      mesh="soft"
    >
      {/* Mobile-first: 1 col → 3 col at lg */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 lg:grid-cols-3 lg:gap-6"
      >
        {solutionPillars.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon] ?? MessageCircle;
          return (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className="group border-border bg-surface relative flex flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
            >
              {/* Step index */}
              <span className="text-fg-muted absolute top-6 right-6 font-display text-sm tracking-[-0.02em] tabular-nums sm:top-7 sm:right-7">
                0{idx + 1}
              </span>

              <div className="border-border bg-surface-secondary flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                <Icon className="text-fg h-5 w-5" />
              </div>

              <h3 className="text-fg mt-5 text-lg font-semibold tracking-[-0.022em] sm:mt-6 sm:text-xl">
                {pillar.title}
              </h3>
              <p className="text-fg-tertiary mt-3 text-sm leading-relaxed">
                {pillar.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {pillar.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="text-fg-secondary flex items-start gap-2.5 text-sm"
                  >
                    <Check className="text-fg mt-0.5 h-4 w-4 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inline CTA below the three pillars */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14"
      >
        <p className="text-fg-secondary max-w-md text-sm sm:text-base">
          Want to see every feature in detail?
        </p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button variant="default" size="lg" asChild className="group">
            <a href="#features">
              Explore the platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#how-it-works">See how setup works</a>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
