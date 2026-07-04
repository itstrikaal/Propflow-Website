"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-label="Get started">
      {/* Background — deep purple gradient with radial overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="from-brand-500 via-brand-600 to-brand-alt-600 absolute inset-0 bg-gradient-to-br opacity-95" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />
        <div className="bg-brand-300/10 absolute bottom-0 -left-24 h-72 w-72 rounded-full blur-[80px]" />
        <div className="bg-brand-alt-300/10 absolute top-1/4 -right-24 h-80 w-80 rounded-full blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to transform
            <br />
            your brokerage?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Join thousands of Indian property brokers who have already simplified their
            workflow. Start your 14-day free trial today. No credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://app.propflow.in/sign-up">
              <Button
                size="xl"
                className="cta-group text-brand-600 gap-2 bg-white shadow-xl hover:bg-white/90"
              >
                Start Free Trial
                <ArrowRight className="cta-arrow h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="xl"
                className="gap-2 text-white/80 hover:bg-white/10 hover:text-white"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/50">
            Free 14-day trial · No credit card · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
