"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
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
 * Desktop navigation — fixed 1440px viewport, no mobile menu.
 * The header is a glass surface that gains a hairline border + shadow when
 * the page is scrolled. Active route gets an animated underline.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const hydrated = useHydrated();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border/60 bg-bg/70 border-b backdrop-blur-2xl backdrop-saturate-150 shadow-[0_1px_0_0_rgb(0_0_0/0.02)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
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

        {/* Desktop Navigation */}
        <nav
          className="flex items-center gap-1"
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
                  "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-fg"
                    : "text-fg-tertiary hover:text-fg"
                )}
              >
                {link.label}
                {/* Animated underline */}
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

        {/* Desktop Actions */}
        <div className="flex items-center gap-2">
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
            <Link href="https://app.propflow.in/sign-in">Sign In</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="https://app.propflow.in/sign-up" className="group">
              Start Free Trial
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
