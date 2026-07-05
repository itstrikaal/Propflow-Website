"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { faqItems } from "@/lib/constants";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <SectionWrapper
      id="faq"
      variant="muted"
      label="FAQ"
      serifTitle
      title={
        <>
          Questions brokers ask us
          <br />
          <span className="text-fg-tertiary">before signing up.</span>
        </>
      }
      description="Everything we get asked most often. Can't find what you're looking for? Reach out — we usually reply within four hours."
    >
      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[color:var(--border)] bg-surface sm:rounded-3xl">
        {faqItems.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={cn(
                idx > 0 && "border-t border-[color:var(--border-secondary)]"
              )}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "hover:bg-surface-secondary/50 flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 sm:gap-6 sm:px-8 sm:py-6"
                )}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-fg text-[15px] font-medium tracking-[-0.015em] sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "border-border bg-surface flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen ? "bg-fg text-bg border-fg rotate-45" : "text-fg"
                  )}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-fg-tertiary px-5 pb-6 text-sm leading-relaxed sm:px-8 sm:pb-8 sm:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <p className="text-fg-muted mt-8 text-center text-sm">
        Still have questions?{" "}
        <a
          href="/contact"
          className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
        >
          Talk to our team
        </a>{" "}
        — we usually reply within 4 hours.
      </p>
    </SectionWrapper>
  );
}
