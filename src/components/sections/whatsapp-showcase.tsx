"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  ArrowRight,
  Check,
  Smartphone,
  Share2,
  FileText,
  Zap,
} from "lucide-react";

const highlights = [
  { icon: Check, text: "Auto-capture every lead from WhatsApp" },
  { icon: Share2, text: "Share property packages in one tap" },
  { icon: FileText, text: "Send documents directly in chat" },
];

export function WhatsAppShowcaseSection() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      aria-label="WhatsApp integration"
    >
      {/* Mesh background */}
      <div
        aria-hidden="true"
        className="mesh-section-soft"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="default" className="mb-5">
              <MessageCircle className="text-whatsapp mr-1.5 h-3.5 w-3.5" />
              WhatsApp first
            </Badge>

            <h2 className="font-display text-fg text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em]">
              Your CRM lives inside{" "}
              <span className="text-whatsapp">WhatsApp</span>.
            </h2>

            <p className="text-fg-tertiary mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
              You already run your business on WhatsApp. PropFlow doesn&apos;t make you
              switch apps — it connects to your WhatsApp and turns every conversation
              into a tracked lead with full context.
            </p>

            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="text-fg-secondary flex items-center gap-3 text-sm"
                >
                  <span className="bg-success-bg flex h-6 w-6 items-center justify-center rounded-full">
                    <item.icon className="text-success h-3.5 w-3.5" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Link href="/features">
                <Button variant="default" size="lg" className="group cta-group">
                  See all features
                  <ArrowRight className="cta-arrow h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="mx-auto max-w-[320px]">
              {/* Phone frame */}
              <div className="border-fg/15 bg-surface overflow-hidden rounded-[2.5rem] border-[3px] shadow-2xl">
                {/* Phone notch */}
                <div className="bg-bg-secondary relative flex h-7 items-center justify-center">
                  <div className="bg-fg/15 h-2 w-20 rounded-full" />
                </div>

                {/* Phone screen content */}
                <div className="bg-bg-secondary p-4">
                  {/* WhatsApp header */}
                  <div className="border-border mb-3 flex items-center gap-3 border-b pb-3">
                    <div className="bg-whatsapp flex h-10 w-10 items-center justify-center rounded-full">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-fg text-sm font-semibold">PropFlow CRM</p>
                      <p className="text-fg-muted text-xs">Online · 3 new leads</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-3">
                    <div className="flex justify-start">
                      <div className="bg-surface text-fg rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm shadow-xs">
                        <p className="text-fg-secondary text-[10px] tracking-widest uppercase">
                          New lead
                        </p>
                        <p className="mt-0.5">
                          Is the 2BHK in Wakad still available?
                        </p>
                        <p className="text-fg-muted mt-1 text-[10px]">
                          2 min ago · via WhatsApp
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-whatsapp/15 text-fg rounded-2xl rounded-br-sm px-4 py-2.5 text-sm">
                        <p>
                          Yes, it&apos;s available! Sharing the complete details.
                        </p>
                        <p className="text-fg-muted mt-1 text-[10px]">1 min ago</p>
                      </div>
                    </div>

                    {/* Auto-response card */}
                    <div className="flex justify-start">
                      <div className="border-border bg-surface rounded-2xl rounded-bl-sm border px-4 py-3 text-sm shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="bg-fg/10 flex h-6 w-6 items-center justify-center rounded-full">
                            <Zap className="text-fg h-3 w-3" />
                          </div>
                          <span className="text-fg text-[10px] font-medium tracking-widest uppercase">
                            Auto-matched
                          </span>
                        </div>
                        <p className="text-fg mt-2 text-sm font-medium">
                          2BHK · Wakad · Pune
                        </p>
                        <p className="text-fg-tertiary mt-0.5 text-xs">
                          ₹ 65 L · 950 sqft · Ready to move
                        </p>
                        <div className="mt-2 flex gap-1.5">
                          <span className="bg-surface-tertiary text-fg-secondary rounded-md px-2 py-0.5 text-[10px]">
                            Photos (12)
                          </span>
                          <span className="bg-surface-tertiary text-fg-secondary rounded-md px-2 py-0.5 text-[10px]">
                            Docs
                          </span>
                        </div>
                        <p className="text-fg-muted mt-2 text-[10px]">
                          Shared automatically · Tap to send
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone home bar */}
                <div className="flex justify-center pb-2">
                  <div className="bg-fg/20 h-1 w-28 rounded-full" />
                </div>
              </div>

              {/* Caption */}
              <div className="text-fg-muted mt-4 flex items-center justify-center gap-2 text-xs">
                <Smartphone className="h-3.5 w-3.5" />
                Works on any phone · No app switch needed
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
