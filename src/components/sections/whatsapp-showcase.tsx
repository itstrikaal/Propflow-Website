"use client";

import { motion } from "framer-motion";
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
  {
    icon: Check,
    text: "Every enquiry becomes a tracked lead, automatically",
  },
  {
    icon: Share2,
    text: "Send a property's full document pack in one tap",
  },
  {
    icon: FileText,
    text: "Reply with the right listing without leaving the chat",
  },
];

export function WhatsAppShowcaseSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-28"
      aria-label="WhatsApp integration"
    >
      <div aria-hidden="true" className="mesh-section-soft" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile-first: stack on mobile, side-by-side at lg */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <Badge variant="default" className="mb-5">
              <MessageCircle className="text-whatsapp mr-1.5 h-3.5 w-3.5" />
              WhatsApp-first
            </Badge>

            <h2 className="font-display text-fg text-[clamp(1.875rem,5vw,3rem)] leading-[1.08] tracking-[-0.03em]">
              Your CRM lives inside{" "}
              <span className="text-whatsapp">WhatsApp</span>.
            </h2>

            <p className="text-fg-tertiary mt-5 max-w-lg text-base leading-relaxed sm:text-lg">
              You already run your business on WhatsApp. PropFlow connects to your
              WhatsApp and turns every conversation into a tracked lead with full
              context — without asking your clients to install anything new.
            </p>

            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.text}
                  className="text-fg-secondary flex items-start gap-3 text-sm sm:text-base"
                >
                  <span className="bg-success-bg flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    <item.icon className="text-success h-3.5 w-3.5" />
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="default" size="lg" asChild className="group w-full sm:w-auto">
                <a href="/features">
                  See all features
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://app.propflow.in/sign-up">Start free trial</a>
              </Button>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="mx-auto max-w-[280px] sm:max-w-[320px]">
              {/* Phone frame */}
              <div className="border-fg/15 bg-surface overflow-hidden rounded-[2rem] border-[3px] shadow-2xl sm:rounded-[2.5rem]">
                {/* Phone notch */}
                <div className="bg-bg-secondary relative flex h-6 items-center justify-center sm:h-7">
                  <div className="bg-fg/15 h-2 w-20 rounded-full" />
                </div>

                {/* Phone screen content */}
                <div className="bg-bg-secondary p-3 sm:p-4">
                  {/* WhatsApp header */}
                  <div className="border-border mb-3 flex items-center gap-3 border-b pb-3">
                    <div className="bg-whatsapp flex h-9 w-9 items-center justify-center rounded-full sm:h-10 sm:w-10">
                      <MessageCircle className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="text-fg text-sm font-semibold">PropFlow CRM</p>
                      <p className="text-fg-muted text-xs">Online · 3 new leads</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex justify-start">
                      <div className="bg-surface text-fg rounded-2xl rounded-bl-sm px-3.5 py-2 text-[13px] shadow-xs sm:px-4 sm:text-sm">
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
                      <div className="bg-whatsapp/15 text-fg rounded-2xl rounded-br-sm px-3.5 py-2 text-[13px] sm:px-4 sm:text-sm">
                        <p>Yes, it&apos;s available! Sharing details now.</p>
                        <p className="text-fg-muted mt-1 text-[10px]">1 min ago</p>
                      </div>
                    </div>

                    {/* Auto-response card */}
                    <div className="flex justify-start">
                      <div className="border-border bg-surface rounded-2xl rounded-bl-sm border px-3.5 py-2.5 text-[13px] shadow-xs sm:px-4 sm:text-sm">
                        <div className="flex items-center gap-2">
                          <div className="bg-fg/10 flex h-5 w-5 items-center justify-center rounded-full sm:h-6 sm:w-6">
                            <Zap className="text-fg h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          </div>
                          <span className="text-fg text-[10px] font-medium tracking-widest uppercase">
                            Auto-matched
                          </span>
                        </div>
                        <p className="text-fg mt-2 text-[13px] font-medium sm:text-sm">
                          2BHK · Wakad · Pune
                        </p>
                        <p className="text-fg-tertiary mt-0.5 text-[11px] sm:text-xs">
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
                  <div className="bg-fg/20 h-1 w-24 rounded-full sm:w-28" />
                </div>
              </div>

              {/* Caption */}
              <div className="text-fg-muted mt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
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
