"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Returns true once hydration completes (avoids hydration mismatch for theme toggle) */
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

/**
 * Mobile-first responsive navbar.
 * - Mobile (<md): logo + theme toggle + hamburger button. Drawer slides in.
 * - Desktop (≥md): full inline nav + auth buttons.
 * - Glass surface gains a hairline border when scrolled.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const hydrated = useHydrated();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change. The pathname only changes when
  // navigation actually occurs (Next.js controls this), so this doesn't
  // cause cascading renders — it runs once per navigation.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || mobileOpen
            ? "border-border/60 bg-bg/85 border-b backdrop-blur-2xl backdrop-saturate-150 shadow-[0_1px_0_0_rgb(0_0_0/0.02)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-base font-semibold tracking-[-0.02em]"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="from-fg to-fg-secondary relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold text-bg">P</span>
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <span>{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation — hidden below md */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-fg"
                      : "text-fg-tertiary hover:text-fg"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-3.5 right-3.5 h-px origin-center rounded-full bg-fg transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions — hidden below md */}
          <div className="hidden items-center gap-2 md:flex">
            {hydrated && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="text-fg-tertiary hover:bg-surface-secondary hover:text-fg flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
                aria-label={
                  resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://app.propflow.in/sign-in">Sign in</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="https://app.propflow.in/sign-up" className="group">
                Start free trial
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Actions — visible below md */}
          <div className="flex items-center gap-1 md:hidden">
            {hydrated && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="text-fg-tertiary hover:bg-surface-secondary hover:text-fg flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                aria-label={
                  resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-fg hover:bg-surface-secondary flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-bg/60 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface border-border relative mx-3 mt-2 overflow-hidden rounded-2xl border shadow-2xl"
              aria-label="Mobile menu"
            >
              <ul className="divide-border-secondary divide-y">
                {navigation.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex min-h-[52px] items-center justify-between px-5 py-4 text-base font-medium transition-colors",
                          isActive
                            ? "bg-surface-secondary text-fg"
                            : "text-fg-secondary active:bg-surface-secondary"
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="text-fg-muted h-4 w-4" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-border space-y-2 border-t p-4">
                <Button
                  variant="secondary"
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <Link href="https://app.propflow.in/sign-in">Sign in</Link>
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="group w-full"
                >
                  <Link href="https://app.propflow.in/sign-up">
                    Start free trial
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
                <p className="text-fg-muted pt-1 text-center text-[11px]">
                  No card required · 14-day free trial
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
