"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Image,
  FileText,
  FolderOpen,
  Users,
  Smartphone,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";

const problems = [
  {
    icon: MessageCircle,
    title: "Leads buried in WhatsApp",
    description:
      "Clients message you all day. Good luck finding that one inquiry from last week among hundreds of chats.",
  },
  {
    icon: Image,
    title: "Photos scattered in Gallery",
    description:
      "Property photos, client selfies, screenshots — all mixed together. Finding the right image takes forever.",
  },
  {
    icon: FileText,
    title: "Documents everywhere",
    description:
      "Aadhaar on WhatsApp, PAN in Gallery, sale deed on Drive. No single place for client paperwork.",
  },
  {
    icon: FolderOpen,
    title: "No deal tracking",
    description:
      "Which client saw which property? Who's ready to register? You're guessing based on memory.",
  },
  {
    icon: Users,
    title: "Team coordination chaos",
    description:
      "Your colleague showed a property to a client? You wouldn't know until the client calls you confused.",
  },
  {
    icon: Smartphone,
    title: "No single source of truth",
    description:
      "WhatsApp + Gallery + Drive + Notes + Contacts = 5 apps to manage one deal. It's exhausting.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
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
          <span className="text-fg-tertiary">Sound familiar?</span>
        </>
      }
      description="Every day, Indian property brokers juggle WhatsApp, Gallery, Drive, Notes, and Contacts just to manage one deal. The tools weren't built for real estate — you were just adapting."
      mesh="soft"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problems.map((problem) => (
          <motion.div
            key={problem.title}
            variants={itemVariants}
            className="group border-border bg-surface hover:border-fg/20 relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-md"
          >
            <div className="from-fg/[0.03] pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="bg-surface-secondary border-border flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                <problem.icon className="text-fg h-5 w-5" />
              </div>
              <h3 className="text-fg mt-5 text-base font-semibold tracking-[-0.018em]">
                {problem.title}
              </h3>
              <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
