"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Theme provider for light / dark mode.
 *
 * Backed by `next-themes` — the `attribute="class"` strategy adds a `.dark`
 * class to `<html>`. Our `globals.css` uses Tailwind v4's `@custom-variant
 * dark` to scope every dark-mode rule to that class, so the entire visual
 * system reacts to this single provider with zero runtime overhead.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
