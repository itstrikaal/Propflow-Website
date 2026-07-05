"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { howItWorks } from "@/lib/constants";
import { ArrowRight, ArrowDown } from "lucide-react";

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
      title={
        <>
          Set up in an afternoon.
          <br />
          <span className="text-fg-tertiary">Run on it for years.</span>
        </>
      }
      description="Three steps from sign-up to your first closed deal in PropFlow. No migration team. No training sessions."
      mesh="subtle"
    >
      <div ref={containerRef} className="relative mx-auto max-w-3xl">
        {/* Connecting line — mobile-friendly position */}
        <div className="bg-border absolute top-2 bottom-2 left-[2rem] w-px sm:left-[2.5rem]">
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
              className="relative flex gap-5 sm:gap-8 lg:gap-10"
            >
              {/* Step number */}
              <div className="relative shrink-0">
                <div className="border-border bg-surface text-fg flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm sm:h-20 sm:w-20 md:h-[5.25rem] md:w-[5.25rem]">
                  <span className="font-display text-xl font-semibold tracking-[-0.03em] tabular-nums sm:text-2xl md:text-3xl">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 sm:pt-2">
                <h3 className="text-fg text-base font-semibold tracking-[-0.02em] sm:text-lg md:text-xl">
                  {step.title}
                </h3>
                <p className="text-fg-tertiary mt-2 max-w-xl text-sm leading-relaxed sm:text-base">
                  {step.description}
                </p>
                {index < howItWorks.length - 1 && (
                  <div className="text-fg-muted mt-4 inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase sm:mt-5 sm:text-xs">
                    <ArrowDown className="h-3 w-3 sm:hidden" />
                    <ArrowRight className="hidden h-3 w-3 rotate-90 sm:block" />
                    Next step
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* CTA below the steps */}
      <div className="mt-14 flex flex-col items-center gap-4 text-center sm:mt-20">
        <p className="text-fg-secondary max-w-md text-sm sm:text-base">
          Most brokerages complete step three within a day.
        </p>
        <Button variant="default" size="lg" asChild className="group">
          <a href="https://app.propflow.in/sign-up">
            Start your free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
