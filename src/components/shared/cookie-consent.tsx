"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { X, Cookie, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConsentValue = "accepted" | "declined" | null;
const STORAGE_KEY = "propflow-cookie-consent";

function readConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  if (v === "accepted" || v === "declined") return v;
  return null;
}

function writeConsent(value: ConsentValue) {
  if (typeof window === "undefined" || !value) return;
  window.localStorage.setItem(STORAGE_KEY, value);
  // Notify subscribers (this tab + other tabs) so the UI reactively updates
  window.dispatchEvent(new CustomEvent("propflow:consent", { detail: value }));
}

// ─── External-store subscription ──────────────────────────────────────────
// Lets `useCookieConsent()` read the stored value synchronously without
// triggering a useEffect → setState cascade (React 19 best practice).
function subscribe(notify: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("propflow:consent", notify);
  // React to changes from other tabs too
  window.addEventListener("storage", notify);
  return () => {
    window.removeEventListener("propflow:consent", notify);
    window.removeEventListener("storage", notify);
  };
}

function getSnapshot(): ConsentValue {
  return readConsent();
}

function getServerSnapshot(): ConsentValue {
  return null;
}

export function useCookieConsent(): ConsentValue {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function getConsent(): ConsentValue {
  return readConsent();
}

export function hasAnalyticsConsent(): boolean {
  return readConsent() === "accepted";
}

export function CookieConsent() {
  const consent = useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  // We derive `visible` from two flags instead of mirroring external state:
  //   - `consent === null`    → user hasn't decided yet, banner is eligible
  //   - `hasShown` (state)    → the initial 600ms appearance delay has passed
  // This means the effect never calls setState to update `visible` directly;
  // it only flips `hasShown` from inside a setTimeout callback, which is the
  // legitimate pattern the React 19 lint rule allows.
  const [hasShown, setHasShown] = useState(false);
  const visible = consent === null && hasShown;

  useEffect(() => {
    if (consent !== null) return; // user already decided → stay hidden
    const timer = window.setTimeout(() => setHasShown(true), 600);
    return () => window.clearTimeout(timer);
  }, [consent]);

  const decide = useCallback((value: Exclude<ConsentValue, null>) => {
    writeConsent(value);
    // After deciding, hide immediately by resetting the hasShown flag.
    setHasShown(false);
  }, []);

  const reopen = useCallback(() => {
    setExpanded(false);
    setHasShown(true);
  }, []);

  // Expose a tiny global API so users can change their mind from the footer.
  useEffect(() => {
    (
      window as unknown as { propflowCookieConsent?: { reopen: () => void } }
    ).propflowCookieConsent = { reopen };
    return () => {
      delete (window as unknown as { propflowCookieConsent?: unknown })
        .propflowCookieConsent;
    };
  }, [reopen]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-desc"
      className="border-border bg-surface/95 fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-md rounded-2xl border p-4 shadow-2xl backdrop-blur-xl sm:right-6 sm:bottom-6 sm:left-auto"
    >
      <div className="flex items-start gap-3">
        <Cookie className="text-brand-500 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <div className="flex-1">
          <p className="text-fg text-sm font-semibold">Cookies on PropFlow</p>
          <p
            id="cookie-consent-desc"
            className="text-fg-tertiary mt-1 text-xs leading-relaxed"
          >
            We use essential cookies to run the site. With your permission, we also use
            analytics cookies to understand how the site is used so we can improve it. You
            can change your choice anytime from the footer.
          </p>

          {expanded && (
            <ul className="text-fg-secondary mt-3 space-y-1.5 text-xs">
              <li className="flex items-start gap-2">
                <span className="bg-brand-500 mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                <span>
                  <strong>Essential</strong> — sign-in, theme preference, security. Always
                  on.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-brand-500 mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                <span>
                  <strong>Analytics</strong> — anonymised page views to help us improve.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-brand-500 mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                <span>
                  <strong>Marketing</strong> — only if you accept; lets us measure
                  campaigns.
                </span>
              </li>
            </ul>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="gradient"
              size="sm"
              onClick={() => decide("accepted")}
            >
              Accept all
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => decide("declined")}
            >
              Essential only
            </Button>
            <button
              type="button"
              onClick={() => setExpanded((s) => !s)}
              className={cn(
                "text-fg-tertiary hover:text-fg ml-auto inline-flex items-center gap-1 text-xs font-medium transition-colors"
              )}
              aria-expanded={expanded}
            >
              {expanded ? "Hide details" : "Customise"}
              <ChevronDown
                className={cn("h-3 w-3 transition-transform", expanded && "rotate-180")}
              />
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => decide("declined")}
          className="text-fg-muted hover:bg-surface-tertiary hover:text-fg flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors"
          aria-label="Dismiss — essential cookies only"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
