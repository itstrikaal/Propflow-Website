"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { howItWorks } from "@/lib/constants";

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <SectionWrapper
      id="how-it-works"
      variant="light"
      label="How It Works"
      title="Three steps to a smarter brokerage."
      description="Getting started with PropFlow takes minutes, not days."
    >
      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        <div className="bg-border absolute top-0 left-8 h-full w-px">
          <motion.div
            className="from-brand-500 to-brand-alt-500 h-full w-full bg-gradient-to-b"
            style={{ scaleY: lineHeight, transformOrigin: "top" }}
          />
        </div>

        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              variants={stepVariants}
              className="relative pl-20"
            >
              <div className="border-border bg-bg text-brand-500 absolute left-4 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm">
                {step.step}
              </div>

              <div className="border-border bg-surface hover:border-brand-500/20 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg sm:p-8">
                <h3 className="text-fg text-lg font-semibold">{step.title}</h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="text-fg-muted mt-4 flex items-center gap-2 text-xs">
                    <span className="bg-border h-px w-4" />
                    Next step
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
