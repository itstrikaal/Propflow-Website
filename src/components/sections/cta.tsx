"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-label="Get started">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-alt-600 opacity-95" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Sparkles className="mx-auto h-10 w-10 text-white/70" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to transform your brokerage?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Join thousands of Indian property brokers who have already simplified their workflow. 
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/pricing">
              <Button
                size="xl"
                className="gap-2 bg-white text-brand-600 hover:bg-white/90 shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
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
