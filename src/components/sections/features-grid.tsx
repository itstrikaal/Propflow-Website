"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { MessageCircle, Brain, FileText, Zap, BarChart3, Share2 } from "lucide-react";
import { features } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  "message-circle": MessageCircle,
  brain: Brain,
  "file-text": FileText,
  zap: Zap,
  "bar-chart-3": BarChart3,
  "share-2": Share2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function FeaturesGridSection() {
  return (
    <SectionWrapper
      id="features"
      variant="dark"
      label="Platform"
      title="Everything you need to run your brokerage."
      description="Six powerful tools consolidated into one intelligent platform. No more app-switching."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon] || MessageCircle;
          return (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="group border-border/60 bg-surface hover:border-brand-500/40 hover:shadow-brand-500/10 relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {/* Subtle hover gradient overlay */}
              <div className="from-brand-500/[0.03] pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className={cn(
                  "relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md",
                  feature.gradient || "from-brand-500 to-brand-600"
                )}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-fg relative text-base font-semibold">
                {feature.title}
              </h3>
              <p className="text-fg-tertiary relative mt-2 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
