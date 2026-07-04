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
          Questions?
          <br />
          <span className="text-fg-tertiary">We&apos;ve got answers.</span>
        </>
      }
      description="Everything you need to know about PropFlow. Can't find what you're looking for? Reach out to our team."
    >
      <div className="mx-auto max-w-3xl divide-y divide-[color:var(--border-secondary)] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-surface">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={cn(
                  "hover:bg-surface-secondary/50 flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 sm:px-8 sm:py-6"
                )}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-fg text-base font-medium tracking-[-0.015em] sm:text-lg">
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
                    <p className="text-fg-tertiary px-6 pb-6 text-sm leading-relaxed sm:px-8 sm:pb-8 sm:text-base">
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
          Contact our team
        </a>{" "}
        — we usually reply within 4 hours.
      </p>
    </SectionWrapper>
  );
}
