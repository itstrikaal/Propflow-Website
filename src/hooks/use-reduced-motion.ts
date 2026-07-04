"use client";

import { useSyncExternalStore } from "react";

/**
 * Returns true when the user has requested reduced motion at the OS level
 * (Settings → Accessibility → Reduce motion / `prefers-reduced-motion: reduce`).
 *
 * Uses React 19's `useSyncExternalStore` to subscribe directly to the
 * matchMedia change event — no useEffect, no setState, no cascading renders.
 * SSR-safe: returns `false` on the server (matches the defaultValue).
 */

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(notify: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia(QUERY);
  // `addEventListener` is the modern API; Safari < 14 needs `addListener`
  if (mq.addEventListener) {
    mq.addEventListener("change", notify);
    return () => mq.removeEventListener("change", notify);
  }
  mq.addListener(notify);
  return () => mq.removeListener(notify);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): boolean {
  return false;
}

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Same as `useReducedMotion`, kept as a stable alias for call sites where
 * the alternative reads more clearly in JSX conditionals.
 */
export function useReducedMotionSafe(): boolean {
  return useReducedMotion();
}
