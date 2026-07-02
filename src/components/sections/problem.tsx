"use client";

import { motion } from "framer-motion";
import { MessageCircle, Image, FileText, FolderOpen, Users, Smartphone } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

const problems = [
  {
    icon: MessageCircle,
    title: "Leads buried in WhatsApp",
    description: "Clients message you all day. Good luck finding that one inquiry from last week among hundreds of chats.",
    color: "text-whatsapp",
    bg: "bg-whatsapp/10",
  },
  {
    icon: Image,
    title: "Photos scattered in Gallery",
    description: "Property photos, client selfies, screenshots — all mixed together. Finding the right image takes forever.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    icon: FileText,
    title: "Documents everywhere",
    description: "Aadhaar on WhatsApp, PAN in Gallery, sale deed on Drive. No single place for client paperwork.",
    color: "text-brand-alt-500",
    bg: "bg-brand-alt-500/10",
  },
  {
    icon: FolderOpen,
    title: "No deal tracking",
    description: "Which client saw which property? Who's ready to register? You're guessing based on memory.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
  {
    icon: Users,
    title: "Team coordination chaos",
    description: "Your colleague showed a property to a client? You wouldn't know until the client calls you confused.",
    color: "text-error",
    bg: "bg-error/10",
  },
  {
    icon: Smartphone,
    title: "No single source of truth",
    description: "WhatsApp + Gallery + Drive + Notes + Contacts = 5 apps to manage one deal. It's exhausting.",
    color: "text-fg-tertiary",
    bg: "bg-surface-tertiary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProblemSection() {
  return (
    <SectionWrapper
      id="problem"
      variant="dark"
      label="The Problem"
      title="Your brokerage runs on 5+ apps. None of them talk to each other."
      description="Every day, Indian property brokers juggle WhatsApp, Gallery, Drive, Notes, and Contacts just to manage one deal. It's not your fault — the tools weren't built for real estate."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problems.map((problem) => (
          <motion.div
            key={problem.title}
            variants={itemVariants}
            className={cn(
              "group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border/80 hover:shadow-lg"
            )}
          >
            <div
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                problem.bg
              )}
            >
              <problem.icon className={cn("h-6 w-6", problem.color)} />
            </div>
            <h3 className="text-base font-semibold text-fg">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-tertiary">{problem.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
