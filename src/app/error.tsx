"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MeshBackground } from "@/components/shared/mesh-background";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface to console so Vercel logs / Sentry can pick it up
    console.error("[PropFlow] Page error:", error);
  }, [error]);

  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
      aria-label="Something went wrong"
    >
      <MeshBackground variant="hero" grain />
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <div className="border-border bg-surface mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border shadow-sm">
          <AlertTriangle className="text-warning h-7 w-7" />
        </div>
        <h1 className="font-display text-fg mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Something went wrong.
        </h1>
        <p className="text-fg-tertiary mt-4 text-base leading-relaxed sm:text-lg">
          We hit an unexpected snag loading this page. Our team has been notified. Please
          try again, or head back home.
        </p>
        {error.digest && (
          <p className="text-fg-muted mt-3 font-mono text-xs">
            Reference: {error.digest}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="default" size="lg" className="gap-2" onClick={reset}>
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
          <Link href="/">
            <Button variant="secondary" size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              Go home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="lg" className="gap-2">
              Report this
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
