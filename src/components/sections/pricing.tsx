"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      serifTitle
      title={
        <>
          Honest pricing.
          <br />
          <span className="text-fg-tertiary">No surprises later.</span>
        </>
      }
      description="One price, all features in your tier. No usage limits that bite. No upsells in your inbox. Start with a 14-day free trial."
    >
      {/* Toggle */}
      <div className="mb-10 flex items-center justify-center gap-3 sm:mb-12 sm:gap-4">
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-200",
            !isYearly ? "text-fg" : "text-fg-muted"
          )}
        >
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={cn(
            "relative inline-flex h-7 w-12 items-center rounded-full border transition-colors duration-300",
            isYearly
              ? "border-fg bg-fg"
              : "border-border bg-surface-tertiary"
          )}
          role="switch"
          aria-checked={isYearly}
          aria-label="Toggle annual billing"
        >
          <span
            className={cn(
              "inline-block h-5 w-5 transform rounded-full shadow-sm transition-transform duration-300",
              isYearly ? "translate-x-6 bg-bg" : "translate-x-0.5 bg-bg"
            )}
          />
        </button>
        <span
          className={cn(
            "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
            isYearly ? "text-fg" : "text-fg-muted"
          )}
        >
          Annual
          <Badge variant="success" className="ml-0.5">
            Save 17%
          </Badge>
        </span>
      </div>

      {/* Cards — mobile-first: 1 col → 3 col at lg */}
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "relative flex flex-col rounded-2xl border p-6 transition-all duration-500 sm:rounded-3xl sm:p-8",
              tier.highlighted
                ? "border-fg/15 bg-surface shadow-xl lg:-translate-y-2"
                : "border-border bg-surface hover:border-fg/15 hover:shadow-md"
            )}
          >
            {/* Highlighted beam border */}
            {tier.highlighted && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                <div className="beam-border absolute inset-0 rounded-2xl sm:rounded-3xl" />
              </div>
            )}

            {tier.badge && (
              <Badge
                variant="inverted"
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                {tier.badge}
              </Badge>
            )}

            <div>
              <h3 className="text-fg text-lg font-semibold tracking-[-0.02em]">
                {tier.name}
              </h3>
              <p className="text-fg-tertiary mt-2 text-sm leading-relaxed">
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5 sm:mt-7">
                <span className="text-fg-secondary text-base font-medium">₹</span>
                <span
                  className="text-fg font-display text-[clamp(2.25rem,7vw,3.25rem)] font-semibold tracking-[-0.035em] tabular-nums"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {(
                    isYearly
                      ? Math.round(tier.yearlyPrice / 12)
                      : tier.monthlyPrice
                  ).toLocaleString("en-IN")}
                </span>
                <span className="text-fg-muted ml-1 text-sm">
                  {isYearly ? "/mo, billed yearly" : "/month"}
                </span>
              </div>
              {isYearly && (
                <p className="text-fg-muted mt-1 text-xs">
                  ₹ {tier.yearlyPrice.toLocaleString("en-IN")} billed annually
                </p>
              )}
            </div>

            <ul className="mt-7 space-y-3 sm:mt-8">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="text-fg-secondary flex items-start gap-3 text-sm"
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                      tier.highlighted ? "bg-fg text-bg" : "bg-surface-tertiary"
                    )}
                  >
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-2 sm:mt-auto sm:pt-8">
              {tier.id === "enterprise" ? (
                <a href="/contact">
                  <Button
                    variant={tier.highlighted ? "default" : "secondary"}
                    className="group cta-group w-full"
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="cta-arrow h-4 w-4" />
                  </Button>
                </a>
              ) : (
                <a href="https://app.propflow.in/sign-up">
                  <Button
                    variant={tier.highlighted ? "default" : "secondary"}
                    className="group cta-group w-full"
                    size="lg"
                  >
                    {tier.cta}
                    <ArrowRight className="cta-arrow h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Reassurance row */}
      <div className="text-fg-muted mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:mt-12 sm:text-xs">
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3" />
          No credit card required
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3" />
          14-day free trial
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3" />
          Cancel anytime
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Check className="h-3 w-3" />
          GST invoice available
        </span>
      </div>
    </SectionWrapper>
  );
}
