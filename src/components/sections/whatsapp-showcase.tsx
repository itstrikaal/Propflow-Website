"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight, Check, Smartphone, Share2, FileText } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Check,
    text: "Auto-capture every lead from WhatsApp",
  },
  {
    icon: Share2,
    text: "Share property packages in one tap",
  },
  {
    icon: FileText,
    text: "Send documents directly in chat",
  },
];

export function WhatsAppShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-500/5 to-brand-alt-500/5 py-20 sm:py-28" aria-label="WhatsApp integration">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-whatsapp/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="default" className="mb-4">
              <MessageCircle className="mr-1.5 h-3.5 w-3.5 text-whatsapp" />
              WhatsApp First
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Your CRM lives inside{" "}
              <span className="text-whatsapp">WhatsApp</span>.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-fg-tertiary sm:text-lg">
              You already run your business on WhatsApp. PropFlow doesn&apos;t make you 
              switch to another app. It simply connects to your WhatsApp and turns every 
              conversation into a tracked lead with full context.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-fg-secondary">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-whatsapp/10">
                    <item.icon className="h-3.5 w-3.5 text-whatsapp" />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/features">
                <Button variant="gradient" size="lg" className="gap-2">
                  See All Features
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="mx-auto max-w-[320px]">
              {/* Phone frame */}
              <div className="overflow-hidden rounded-[2.5rem] border-[3px] border-fg/20 bg-bg shadow-2xl shadow-brand-500/10">
                {/* Phone notch */}
                <div className="relative flex h-7 items-center justify-center bg-fg/5">
                  <div className="h-2 w-20 rounded-full bg-fg/10" />
                </div>

                {/* Phone screen content */}
                <div className="p-4">
                  {/* WhatsApp header */}
                  <div className="mb-3 flex items-center gap-3 border-b border-border pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-fg">PropFlow CRM</p>
                      <p className="text-xs text-fg-muted">Online · 3 new leads</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-3">
                    {/* Incoming message */}
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm bg-surface-secondary px-4 py-2.5 text-sm text-fg">
                        <p className="font-medium text-brand-500">New Lead</p>
                        <p className="mt-0.5 text-fg-secondary">
                          Is the 2BHK in Wakad still available? I saw it on a friend&apos;s
                          recommendation.
                        </p>
                        <p className="mt-1 text-[10px] text-fg-muted">2 min ago · Via WhatsApp</p>
                      </div>
                    </div>

                    {/* Outgoing message */}
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-br-sm bg-whatsapp/15 px-4 py-2.5 text-sm text-fg">
                        <p>
                          Yes, it&apos;s available! Let me share the complete details.
                        </p>
                        <p className="mt-1 text-[10px] text-fg-muted">1 min ago</p>
                      </div>
                    </div>

                    {/* Auto-response card */}
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm border border-border bg-bg px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10">
                            <Zap className="h-3 w-3 text-brand-500" />
                          </div>
                          <span className="text-xs font-medium text-brand-500">
                            Auto-matched by PropFlow
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-fg">
                          2BHK · Wakad · Pune
                        </p>
                        <p className="mt-0.5 text-xs text-fg-tertiary">
                          ₹ 65 L · 950 sqft · Ready to move
                        </p>
                        <div className="mt-2 flex gap-1.5">
                          <span className="rounded-md bg-brand-500/10 px-2 py-0.5 text-[10px] text-brand-500">
                            Photos (12)
                          </span>
                          <span className="rounded-md bg-brand-alt-500/10 px-2 py-0.5 text-[10px] text-brand-alt-500">
                            Docs
                          </span>
                        </div>
                        <p className="mt-2 text-[10px] text-fg-muted">
                          Shared automatically · Tap to send
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone home bar */}
                <div className="flex justify-center pb-2">
                  <div className="h-1 w-28 rounded-full bg-fg/20" />
                </div>
              </div>

              {/* WhatsApp badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-fg-muted">
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

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
