"use client";

import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent");
    if (!hasConsented) {
      // Brief delay so it doesn't flash on fast navigations
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-border bg-surface p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-6 sm:bottom-6"
    >
      <div className="flex items-start gap-3">
        <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
        <div className="flex-1">
          <p className="text-sm font-medium text-fg">We use cookies</p>
          <p className="mt-1 text-xs leading-relaxed text-fg-tertiary">
            This site uses cookies to improve your experience. By continuing, you agree to our use of cookies.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Button variant="gradient" size="sm" onClick={accept}>
              Accept
            </Button>
            <Button variant="ghost" size="sm" onClick={accept}>
              Decline
            </Button>
          </div>
        </div>
        <button
          onClick={accept}
          className="flex h-6 w-6 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-tertiary hover:text-fg"
          aria-label="Close cookie consent"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
