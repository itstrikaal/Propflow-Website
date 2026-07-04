"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      aria-label="Get started"
    >
      {/* Mesh background */}
      <div aria-hidden="true" className="mesh-hero" />

      {/* Soft fade overlay at edges so it sits well on the page */}
      <div
        aria-hidden="true"
        className="from-bg via-bg/30 absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent"
      />
      <div
        aria-hidden="true"
        className="from-bg via-bg/30 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border-border bg-surface relative overflow-hidden rounded-3xl border p-10 shadow-2xl sm:p-14 lg:p-20"
        >
          {/* Decorative gradient orb */}
          <div
            aria-hidden="true"
            className="from-mesh-1 via-mesh-2 to-mesh-3 absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br opacity-60 blur-3xl"
          />

          <div className="relative">
            <span className="section-label">Ready when you are</span>

            <h2 className="font-display text-fg mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.035em]">
              Bring calm to
              <br />
              your brokerage.
            </h2>

            <p className="text-fg-tertiary mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Join thousands of Indian property brokers who simplified their
              workflow. Start your 14-day free trial — no credit card required.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                size="xl"
                asChild
                className="group cta-group min-w-[200px]"
              >
                <Link href="https://app.propflow.in/sign-up">
                  Start free trial
                  <ArrowRight className="cta-arrow h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="xl" asChild className="min-w-[180px]">
                <Link href="/contact">Talk to sales</Link>
              </Button>
            </div>

            <ul className="text-fg-muted mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
              <li className="inline-flex items-center gap-1.5">
                <Check className="text-fg h-3 w-3" />
                14-day free trial
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check className="text-fg h-3 w-3" />
                No credit card
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Check className="text-fg h-3 w-3" />
                Cancel anytime
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
