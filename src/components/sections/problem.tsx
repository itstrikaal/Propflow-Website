"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  MessageCircle,
  Image,
  FileText,
  FolderOpen,
  Users,
  Clock,
} from "lucide-react";
import { problems } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const problemIcons: Record<string, LucideIcon> = {
  "whatsapp-chaos": MessageCircle,
  "photo-hunt": Image,
  "doc-scatter": FileText,
  "no-pipeline": FolderOpen,
  "team-overlap": Users,
  "cold-leads": Clock,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProblemSection() {
  return (
    <SectionWrapper
      id="problem"
      variant="muted"
      label="The problem"
      serifTitle
      title={
        <>
          Five apps. Zero coordination.
          <br />
          <span className="text-fg-tertiary">Sound like your day?</span>
        </>
      }
      description="You don't need another tool — you need the five tools you already use to actually talk to each other. Here's what Indian brokers juggle every single day."
      mesh="soft"
    >
      {/* Mobile-first: 1 col → 2 col at sm → 3 col at lg */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problems.map((problem) => {
          const Icon = problemIcons[problem.id] ?? MessageCircle;
          return (
            <motion.div
              key={problem.id}
              variants={itemVariants}
              className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:shadow-md sm:p-6"
            >
              <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="bg-surface-secondary border-border flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                  <Icon className="text-fg h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-fg mt-4 text-[15px] font-semibold tracking-[-0.018em] sm:mt-5 sm:text-base">
                  {problem.title}
                </h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inline CTA — visible after reading the problems */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 flex flex-col items-center gap-3 text-center sm:mt-14"
      >
        <p className="text-fg-secondary max-w-md text-sm sm:text-base">
          Every problem above has a fix — and it lives in one app.
        </p>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="group"
        >
          <a href="#solution">
            See how PropFlow fixes it
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
