"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <SectionWrapper
      id="pricing"
      variant="light"
      label="Pricing"
      title="Simple, transparent pricing."
      description="Start with a 14-day free trial. No credit card required. Cancel anytime."
    >
      {/* Toggle */}
      <div className="mb-10 flex items-center justify-center gap-3">
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            !isYearly ? "text-fg" : "text-fg-muted"
          )}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={cn(
            "relative inline-flex h-7 w-12 items-center rounded-full transition-colors",
            isYearly ? "bg-brand-500" : "bg-surface-tertiary"
          )}
          role="switch"
          aria-checked={isYearly}
          aria-label="Toggle annual billing"
        >
          <span
            className={cn(
              "bg-surface inline-block h-5 w-5 transform rounded-full shadow-sm transition-transform",
              isYearly ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span
          className={cn(
            "flex items-center gap-1.5 text-sm font-medium transition-colors",
            isYearly ? "text-fg" : "text-fg-muted"
          )}
        >
          Annual
          <span className="bg-success-bg text-success rounded-full px-2 py-0.5 text-[10px] font-semibold">
            Save 17%
          </span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex flex-col rounded-2xl border p-8 transition-all duration-300",
              tier.highlighted
                ? "border-brand-500 bg-surface shadow-brand-500/10 shadow-xl"
                : "border-border bg-surface hover:shadow-lg"
            )}
          >
            {tier.badge && (
              <Badge
                variant="gradient"
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                {tier.badge}
              </Badge>
            )}

            <div>
              <h3 className="text-fg text-lg font-semibold">{tier.name}</h3>
              <p className="text-fg-tertiary mt-1 text-sm">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-fg text-4xl font-bold tracking-tight">
                  ₹
                  {isYearly
                    ? tier.yearlyPrice.toLocaleString("en-IN")
                    : tier.monthlyPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-fg-muted text-sm">
                  {isYearly ? "/year" : "/month"}
                </span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="text-fg-secondary flex items-start gap-3 text-sm"
                >
                  <Check
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0",
                      tier.highlighted ? "text-brand-500" : "text-success"
                    )}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              {tier.id === "enterprise" ? (
                <Link href="/contact">
                  <Button
                    variant={tier.highlighted ? "gradient" : "secondary"}
                    className="w-full"
                    size="lg"
                  >
                    Contact Sales
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="https://app.propflow.in/sign-up">
                  <Button
                    variant={tier.highlighted ? "gradient" : "secondary"}
                    className="w-full"
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
