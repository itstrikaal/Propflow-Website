"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  MessageCircle,
  Brain,
  FileText,
  Zap,
  BarChart3,
  Share2,
  Check,
  ArrowUpRight,
} from "lucide-react";
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

/**
 * Bento grid span map — each feature gets a column span + row span
 * to create an asymmetric, editorial layout.
 *
 *   ┌───────────────────────┬──────────┐
 *   │                       │          │
 *   │  whatsapp-crm  (4×2)  │  brain   │
 *   │                       │   (2×1)  │
 *   ├──────────┬────────────┴──────────┤
 *   │ file-    │      zap             │
 *   │ text     │      (2×1)           │
 *   │ (2×1)    │                      │
 *   ├──────────┴──────────────────────┤
 *   │   bar-chart-3   │   share-2     │
 *   │   (3×1)         │   (3×1)       │
 *   └─────────────────┴───────────────┘
 */
const spanMap: Record<string, string> = {
  "whatsapp-crm": "md:col-span-4 md:row-span-2",
  "ai-lead-scoring": "md:col-span-2 md:row-span-1",
  "document-management": "md:col-span-2 md:row-span-1",
  automation: "md:col-span-2 md:row-span-1",
  analytics: "md:col-span-3 md:row-span-1",
  sharing: "md:col-span-3 md:row-span-1",
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
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function FeaturesGridSection() {
  return (
    <SectionWrapper
      id="features"
      variant="light"
      label="Platform"
      serifTitle
      title={
        <>
          Everything your brokerage needs.
          <br />
          <span className="text-fg-tertiary">In one calm workspace.</span>
        </>
      }
      description="Six focused tools, deeply integrated. No more app-switching, copy-pasting, or losing track of what matters."
      mesh="soft"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-6"
      >
        {features.map((feature) => {
          const Icon = iconMap[feature.icon] || MessageCircle;
          const span = spanMap[feature.id] ?? "md:col-span-2";
          const isHero = feature.id === "whatsapp-crm";

          return (
            <motion.article
              key={feature.id}
              variants={itemVariants}
              className={cn(
                "group border-border bg-surface relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 sm:p-8",
                "hover:border-fg/20 hover:-translate-y-0.5 hover:shadow-lg",
                span
              )}
            >
              {/* Subtle accent corner glow on hover */}
              <div className="from-fg/[0.04] pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="border-border bg-surface-secondary text-fg flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  {!isHero && (
                    <ArrowUpRight className="text-fg-muted group-hover:text-fg h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </div>

                <h3 className="text-fg mt-6 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hero cell — mini WhatsApp chat preview */}
                {isHero && <WhatsAppPreview />}

                {/* AI Lead Scoring cell — score viz */}
                {feature.id === "ai-lead-scoring" && <LeadScorePreview />}

                {/* Document Hub cell — file chips */}
                {feature.id === "document-management" && <DocsPreview />}

                {/* Automation cell — flow */}
                {feature.id === "automation" && <AutomationPreview />}

                {/* Analytics cell — bar chart */}
                {feature.id === "analytics" && <AnalyticsPreview />}

                {/* Smart Sharing cell — channel icons */}
                {feature.id === "sharing" && <SharingPreview />}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

/* ─────────────── Inline mini-visuals ─────────────── */

function WhatsAppPreview() {
  return (
    <div className="mt-6 flex-1 space-y-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-secondary)] p-4">
      <div className="flex items-center gap-2 pb-1">
        <span className="bg-whatsapp h-2 w-2 rounded-full" />
        <span className="text-fg-muted text-[10px] font-medium tracking-widest uppercase">
          Live · 3 new leads
        </span>
      </div>
      <div className="space-y-1.5">
        <div className="bg-surface border-border ml-auto max-w-[80%] rounded-xl rounded-br-sm border px-3 py-1.5 text-[11px]">
          Is the 2BHK in Wakad available?
        </div>
        <div className="bg-surface border-border max-w-[85%] rounded-xl rounded-bl-sm border px-3 py-1.5 text-[11px]">
          Yes! Sharing the package now.
        </div>
        <div className="bg-surface border-border max-w-[90%] rounded-xl rounded-bl-sm border px-3 py-2 text-[11px]">
          <span className="text-fg-muted block text-[10px] tracking-wide uppercase">
            Auto-matched
          </span>
          <span className="text-fg-secondary">
            2BHK · Wakad · ₹ 65 L · 12 photos
          </span>
        </div>
      </div>
    </div>
  );
}

function LeadScorePreview() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { name: "A. Mehta", score: 92 },
        { name: "P. Singh", score: 78 },
        { name: "R. Iyer", score: 64 },
      ].map((row) => (
        <div key={row.name} className="flex items-center gap-2">
          <span className="text-fg-tertiary w-16 text-[10px]">{row.name}</span>
          <div className="bar-track h-1 flex-1">
            <div
              className="bar-fill"
              style={{ width: `${row.score}%`, transitionDuration: "1.4s" }}
            />
          </div>
          <span className="text-fg w-7 text-right text-[10px] tabular-nums">
            {row.score}
          </span>
        </div>
      ))}
    </div>
  );
}

function DocsPreview() {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {["Aadhaar.pdf", "PAN.pdf", "Deed.pdf", "RERA.pdf"].map((d) => (
        <span
          key={d}
          className="border-border bg-surface-secondary text-fg-tertiary inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px]"
        >
          <FileText className="h-2.5 w-2.5" />
          {d}
        </span>
      ))}
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="mt-4 flex items-center gap-1.5 text-[10px]">
      <span className="bg-surface-tertiary text-fg-secondary rounded-md px-2 py-1">
        Lead
      </span>
      <span className="text-fg-muted">→</span>
      <span className="bg-surface-tertiary text-fg-secondary rounded-md px-2 py-1">
        Match
      </span>
      <span className="text-fg-muted">→</span>
      <span className="bg-fg text-bg rounded-md px-2 py-1">Send</span>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="mt-4 flex h-16 items-end gap-1">
      {[40, 70, 55, 90, 65, 80, 95].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-current opacity-70 transition-all duration-500"
          style={{
            height: `${h}%`,
            color: "var(--fg)",
          }}
        />
      ))}
    </div>
  );
}

function SharingPreview() {
  return (
    <div className="mt-4 flex items-center gap-3 text-[10px] text-[color:var(--fg-tertiary)]">
      <span className="inline-flex items-center gap-1">
        <Check className="h-3 w-3" /> WhatsApp
      </span>
      <span className="inline-flex items-center gap-1">
        <Check className="h-3 w-3" /> Email
      </span>
      <span className="inline-flex items-center gap-1">
        <Check className="h-3 w-3" /> Secure link
      </span>
    </div>
  );
}
