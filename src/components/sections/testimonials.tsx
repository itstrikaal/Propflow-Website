"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { testimonials } from "@/lib/constants";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  }, []);

  // Auto-play with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonial = testimonials[current];

  return (
    <SectionWrapper
      id="testimonials"
      variant="dark"
      label="Testimonials"
      title="Trusted by brokers who made the switch."
      description="Real stories from real brokerages that transformed their operations with PropFlow."
    >
      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-12"
          >
            <Quote className="absolute right-8 top-8 h-12 w-12 text-brand-500/10" />

            {/* Stars */}
            <div className="mb-6 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>

            <blockquote className="text-base leading-relaxed text-fg-secondary sm:text-lg">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-alt-500 text-sm font-bold text-white">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">{testimonial.name}</p>
                <p className="text-xs text-fg-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-fg-secondary transition-colors hover:bg-surface-secondary hover:text-fg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoPlaying(false);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === current
                    ? "w-8 bg-brand-500"
                    : "w-2 bg-surface-tertiary hover:bg-fg-muted"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-fg-secondary transition-colors hover:bg-surface-secondary hover:text-fg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
