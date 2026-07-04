"use client";

import { useState, useEffect, useCallback, Fragment } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Check, MessageCircle, Building, FileText } from "lucide-react";
import { stats } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion";

const demoSteps = [
  {
    icon: MessageCircle,
    title: "Lead Captured via WhatsApp",
    description:
      "Client messages you on WhatsApp about a property. PropFlow automatically creates a lead profile.",
    status: "auto",
    detail: "Auto-captured from WhatsApp",
  },
  {
    icon: Building,
    title: "Property Matched",
    description:
      "AI matches the inquiry with your property listings and suggests the best options to share.",
    status: "matched",
    detail: "3 properties matched",
  },
  {
    icon: FileText,
    title: "Documents Auto-Shared",
    description:
      "Generate and share a complete property package — photos, documents, and details — in one tap.",
    status: "shared",
    detail: "Package sent via WhatsApp",
  },
  {
    icon: Check,
    title: "Deal Tracked to Close",
    description:
      "All follow-ups, documents, and client interactions are tracked until registration.",
    status: "closed",
    detail: "Deal progress: 75%",
  },
];

const headingLines = [
  "Your WhatsApp, CRM &",
  "Documents. One app",
  "for your brokerage.",
];

export function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const reducedMotion = useReducedMotionSafe();
  // Start at the final value when the user prefers reduced motion so we never
  // need to setState from the effect just to skip the animation.
  const target = 1847;
  const [count, setCount] = useState(reducedMotion ? target : 0);

  useEffect(() => {
    if (!isPlaying || reducedMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, reducedMotion]);

  // Animated counter — only runs when motion is allowed. When reducedMotion
  // is true the initial state already holds the target value.
  useEffect(() => {
    if (reducedMotion) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [reducedMotion, target]);

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
    setIsPlaying(false);
  }, []);

  return (
    <>
      {/* Fixed canvas background */}
      <div className="hero-canvas" />

      <section
        className="relative overflow-hidden pt-28 pb-8 sm:pt-36 lg:pt-44"
        aria-label="Hero"
      >
        {/* Glow orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-brand-500/10 absolute top-0 -left-1/4 h-[600px] w-[600px] rounded-full blur-[140px]" />
          <div className="bg-brand-alt-500/8 absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column — Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Badge variant="default" className="mb-6">
                  <span className="bg-brand-500 mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full" />
                  Now in Public Beta
                </Badge>
              </motion.div>

              {/* Serif heading with line reveal animation */}
              <h1 className="font-display text-fg text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5rem]">
                {headingLines.map((line, i) => (
                  <Fragment key={i}>
                    <span className="line-mask">
                      <span className="line-reveal">
                        {i === 1 ? (
                          <>
                            <span className="gradient-text">
                              {line.split("One app")[0]}
                            </span>
                            One app
                          </>
                        ) : (
                          line
                        )}
                      </span>
                    </span>
                    {i < headingLines.length - 1 && "\u00A0"}
                  </Fragment>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-fg-tertiary mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
              >
                PropFlow is purpose-built for Indian property brokers. It connects your
                WhatsApp, property listings, documents, and team into one intelligent
                workflow — so you spend less time juggling apps and more time closing
                deals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link href="https://app.propflow.in/sign-up">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="cta-group w-full gap-2 sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="cta-arrow h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2"
                  onClick={() =>
                    document
                      .getElementById("product-demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Play className="h-4 w-4" />
                  See How It Works
                </Button>
              </motion.div>

              {/* Social Proof with avatar stack */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-10 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    // Plain <img> is intentional here: these are static SVG
                    // assets in /public — wrapping them in next/image would
                    // add a config flag (`dangerouslyAllowSVG`) for zero
                    // optimisation benefit.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={`/images/avatars/avatar-${i}.svg`}
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className="border-bg ring-border h-8 w-8 rounded-full border-2 ring-1"
                    />
                  ))}
                </div>
                <div className="text-fg-tertiary text-sm">
                  <span className="text-fg font-semibold">
                    {count.toLocaleString("en-IN")}+
                  </span>{" "}
                  deals closed by Indian brokers this month
                </div>
              </motion.div>

              {/* Resolution bars - Aria-inspired animated stat bars */}
              {/* Resolution bars - Aria-inspired animated stat bars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-8 max-w-xs"
              >
                <p className="text-fg-muted mb-3 text-[11px] font-semibold tracking-[0.18em] uppercase">
                  Reported by brokers after 30 days
                </p>
                <div className="space-y-3">
                  <ResolutionBar label="Deal closure rate" value={87} />
                  <ResolutionBar label="Time saved per week" value={72} />
                  <ResolutionBar label="Lead conversion lift" value={64} />
                </div>
              </motion.div>
            </div>

            {/* Right Column — Interactive Demo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
              id="product-demo"
            >
              <div className="relative mx-auto max-w-lg">
                {/* Demo Window */}
                <div className="border-border bg-surface shadow-brand-500/5 overflow-hidden rounded-2xl border shadow-2xl">
                  {/* Chrome Bar */}
                  <div className="border-border bg-bg-secondary flex items-center gap-2 border-b px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="bg-error h-3 w-3 rounded-full" />
                      <div className="bg-warning h-3 w-3 rounded-full" />
                      <div className="bg-success h-3 w-3 rounded-full" />
                    </div>
                    <div className="bg-surface-tertiary text-fg-muted mx-auto flex items-center gap-2 rounded-md px-3 py-1 text-xs">
                      <span className="bg-success h-2 w-2 rounded-full" />
                      propflow.app — Broker Dashboard
                    </div>
                  </div>

                  {/* Demo Body */}
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-fg text-sm font-semibold">Live Demo</h3>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="text-fg-tertiary hover:text-fg text-xs underline underline-offset-2 transition-colors"
                        aria-label={isPlaying ? "Pause auto-play" : "Resume auto-play"}
                      >
                        {isPlaying ? "Pause" : "Resume"}
                      </button>
                    </div>

                    <div className="space-y-3">
                      {demoSteps.map((step, index) => (
                        <button
                          key={step.title}
                          onClick={() => handleStepClick(index)}
                          className={cn(
                            "w-full rounded-xl border p-4 text-left transition-all duration-300",
                            activeStep === index
                              ? "border-brand-500 bg-brand-500/5 shadow-sm"
                              : "border-border hover:border-border/80 hover:bg-surface-secondary bg-transparent"
                          )}
                          aria-current={activeStep === index ? "step" : undefined}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={cn(
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                                activeStep === index
                                  ? "bg-brand-500 text-white"
                                  : "bg-surface-tertiary text-fg-muted"
                              )}
                            >
                              <step.icon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={cn(
                                    "text-sm font-medium transition-colors",
                                    activeStep === index ? "text-fg" : "text-fg-secondary"
                                  )}
                                >
                                  {step.title}
                                </span>
                                <span
                                  className={cn(
                                    "shrink-0 text-xs font-medium",
                                    activeStep === index
                                      ? "text-brand-500"
                                      : "text-fg-muted"
                                  )}
                                >
                                  {step.detail}
                                </span>
                              </div>
                              <p
                                className={cn(
                                  "mt-1 text-xs leading-relaxed transition-colors",
                                  activeStep === index
                                    ? "text-fg-secondary"
                                    : "text-fg-muted"
                                )}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Step Indicators */}
                    <div className="mt-4 flex items-center justify-center gap-1.5">
                      {demoSteps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleStepClick(index)}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            activeStep === index
                              ? "bg-brand-500 w-6"
                              : "bg-surface-tertiary hover:bg-fg-muted w-1.5"
                          )}
                          aria-label={`Go to step ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating stats card */}
                <div className="mt-4 flex gap-3">
                  {stats.slice(0, 3).map((stat) => (
                    <div
                      key={stat.label}
                      className="border-border bg-surface/80 flex-1 rounded-xl border px-3 py-2.5 text-center backdrop-blur-sm"
                    >
                      <div className="text-fg text-sm font-bold">
                        {stat.value.toLocaleString("en-IN")}
                        {stat.suffix}
                      </div>
                      <div className="text-fg-muted mt-0.5 text-[10px] leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ResolutionBar({ label, value }: { label: string; value: number }) {
  const reducedMotion = useReducedMotionSafe();
  // When reduced motion is preferred we skip both the observer wait AND the
  // fill animation, so both pieces of state can be initialised at their
  // final values up front — no setState calls needed inside effects.
  const [width, setWidth] = useState(reducedMotion ? value : 0);
  const [inView, setInView] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById(`bar-${label.replace(/\s/g, "")}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [label, reducedMotion]);

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) return; // initial state already holds the final value
    const timer = setTimeout(() => setWidth(value), 400);
    return () => clearTimeout(timer);
  }, [inView, value, reducedMotion]);

  return (
    <div id={`bar-${label.replace(/\s/g, "")}`} className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-fg-tertiary text-xs">{label}</span>
        <span className="text-brand-400 text-xs font-semibold">{value}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
