"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Check, MessageCircle, LayoutDashboard, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: MessageCircle,
    title: "WhatsApp-First Design",
    description: "Every message becomes a tracked lead. Share properties, documents, and updates without leaving WhatsApp.",
    benefits: ["Auto-capture leads from chat", "Share property packages in one tap", "Full conversation history"],
    gradient: "from-brand-500 to-brand-600",
  },
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description: "Properties, clients, documents, and deals — all in one place. Your entire brokerage, visible at a glance.",
    benefits: ["Real-time pipeline view", "Team-wide data sync", "Single source of truth"],
    gradient: "from-brand-alt-500 to-brand-alt-600",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "PropFlow learns your workflow. It scores leads, suggests follow-ups, and automates busywork so you can focus on closing.",
    benefits: ["AI lead prioritisation", "Auto-reminders & follow-ups", "Document package generation"],
    gradient: "from-brand-600 to-brand-alt-500",
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
  hidden: { opacity: 0, y: 30 },
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
      label="The Solution"
      title="PropFlow brings everything together."
      description="One platform. WhatsApp, properties, documents, and deals — unified. No more app-switching."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {solutions.map((solution) => (
          <motion.div
            key={solution.title}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:shadow-xl"
          >
            <div
              className={cn(
                "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                solution.gradient
              )}
            />

            <div className="relative z-10">
              <div
                className={cn(
                  "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm",
                  solution.gradient
                )}
              >
                <solution.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-fg">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-tertiary">{solution.description}</p>

              <ul className="mt-6 space-y-2.5">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
