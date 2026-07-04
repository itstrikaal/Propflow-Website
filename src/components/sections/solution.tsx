"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Check, MessageCircle, LayoutDashboard, Zap } from "lucide-react";

const solutions = [
  {
    icon: MessageCircle,
    title: "WhatsApp-first design",
    description:
      "Every message becomes a tracked lead. Share properties, documents, and updates without leaving WhatsApp.",
    benefits: [
      "Auto-capture leads from chat",
      "Share property packages in one tap",
      "Full conversation history",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Unified dashboard",
    description:
      "Properties, clients, documents, and deals — all in one place. Your entire brokerage, visible at a glance.",
    benefits: [
      "Real-time pipeline view",
      "Team-wide data sync",
      "Single source of truth",
    ],
  },
  {
    icon: Zap,
    title: "AI-powered automation",
    description:
      "PropFlow learns your workflow. It scores leads, suggests follow-ups, and automates busywork so you can focus on closing.",
    benefits: [
      "AI lead prioritisation",
      "Auto-reminders & follow-ups",
      "Document package generation",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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
      label="The solution"
      serifTitle
      title="PropFlow brings everything together."
      description="One platform. WhatsApp, properties, documents, and deals — unified. No more app-switching."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {solutions.map((solution, idx) => (
          <motion.div
            key={solution.title}
            variants={itemVariants}
            className="group border-border bg-surface relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {/* Step index */}
            <span className="text-fg-muted absolute top-7 right-7 font-display text-sm tracking-[-0.02em] tabular-nums">
              0{idx + 1}
            </span>

            <div className="border-border bg-surface-secondary flex h-12 w-12 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
              <solution.icon className="text-fg h-5 w-5" />
            </div>

            <h3 className="text-fg mt-6 text-xl font-semibold tracking-[-0.022em]">
              {solution.title}
            </h3>
            <p className="text-fg-tertiary mt-3 text-sm leading-relaxed">
              {solution.description}
            </p>

            <ul className="mt-6 space-y-2.5">
              {solution.benefits.map((benefit) => (
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
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
