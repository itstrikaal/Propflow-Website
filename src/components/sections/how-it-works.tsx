"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { howItWorks } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  return (
    <SectionWrapper
      id="how-it-works"
      variant="light"
      label="How it works"
      serifTitle
      title="Three steps to a calmer brokerage."
      description="Setup takes minutes. The benefits compound daily."
      mesh="subtle"
    >
      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        {/* Connecting line */}
        <div className="bg-border absolute top-2 bottom-2 left-[2.25rem] w-px sm:left-[2.625rem]">
          <motion.div
            className="bg-fg h-full w-full origin-top"
            style={{ scaleY: lineHeight }}
          />
        </div>

        <motion.ol
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10 sm:space-y-14"
        >
          {howItWorks.map((step, index) => (
            <motion.li
              key={step.step}
              variants={stepVariants}
              className="relative flex gap-6 sm:gap-10"
            >
              {/* Step number */}
              <div className="relative shrink-0">
                <div className="border-border bg-surface text-fg flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 shadow-sm sm:h-[5.25rem] sm:w-[5.25rem]">
                  <span className="font-display text-2xl font-semibold tracking-[-0.03em] tabular-nums sm:text-3xl">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-fg text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-fg-tertiary mt-2 max-w-xl text-sm leading-relaxed sm:text-base">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="text-fg-muted mt-5 inline-flex items-center gap-1.5 text-xs tracking-widest uppercase">
                    <ArrowRight className="h-3 w-3 rotate-90" />
                    Next
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </SectionWrapper>
  );
}
