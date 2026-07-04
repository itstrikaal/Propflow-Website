"use client";

import { useState, useEffect, useSyncExternalStore, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const hydrated = useHydrated();

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu whenever a new route is rendered
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll + Escape-to-close + focus management while open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousActive = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog (first focusable element)
    const focusFirst = () => {
      const root = dialogRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      focusables[0]?.focus();
    };
    // Run after the dialog mounts
    const mountTimer = window.setTimeout(focusFirst, 10);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        // Trap focus inside the dialog
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(mountTimer);
      // Restore focus to whatever opened the menu
      previousActive?.focus?.();
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border/40 bg-bg/80 border-b shadow-sm shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
          aria-label={`${siteConfig.name} Home`}
        >
          <div className="from-brand-500 to-brand-alt-500 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors",
                pathname === link.href ? "text-fg" : "text-fg-tertiary hover:text-fg"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="bg-brand-500 absolute -bottom-1 left-0 h-0.5 w-full rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
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
          <Button variant="gradient" size="sm" asChild>
            <Link href="https://app.propflow.in/sign-up">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
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
          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMenu}
            className="text-fg hover:bg-surface-secondary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          ref={dialogRef}
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="border-border bg-bg/98 flex h-[calc(100dvh-4rem)] flex-col border-t px-4 pt-6 pb-8 backdrop-blur-xl">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-brand-500/10 text-brand-500"
                      : "text-fg-secondary hover:bg-surface-secondary hover:text-fg"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <Link
                href="https://app.propflow.in/sign-in"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="secondary" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link
                href="https://app.propflow.in/sign-up"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="gradient" className="w-full">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
