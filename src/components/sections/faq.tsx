"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { faqItems } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="faq"
      variant="dark"
      label="FAQ"
      title="Questions? We've got answers."
      description="Everything you need to know about PropFlow."
    >
      <div className="mx-auto max-w-3xl">
        {faqItems.map((item) => (
          <div key={item.id} className="border-border border-b last:border-b-0">
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="hover:text-fg flex w-full items-center justify-between gap-4 py-5 text-left transition-colors sm:py-6"
              aria-expanded={openId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="text-fg text-sm font-medium sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "text-fg-muted h-4 w-4 shrink-0 transition-transform duration-200",
                  openId === item.id && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-fg-tertiary pb-5 text-sm leading-relaxed sm:pb-6 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
