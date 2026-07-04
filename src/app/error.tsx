"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="bg-warning-bg flex h-20 w-20 items-center justify-center rounded-2xl">
        <AlertTriangle className="text-warning h-10 w-10" />
      </div>
      <h1 className="text-fg mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
        Something went wrong.
      </h1>
      <p className="text-fg-tertiary mt-4 max-w-md text-base">
        We hit an unexpected snag loading this page. Our team has been notified. Please
        try again, or head back home.
      </p>
      {error.digest && (
        <p className="text-fg-muted mt-3 font-mono text-xs">Reference: {error.digest}</p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button variant="default" className="gap-2" onClick={reset}>
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>
        <Link href="/">
          <Button variant="secondary" className="gap-2">
            <Home className="h-4 w-4" />
            Go home
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" className="gap-2">
            Report this
          </Button>
        </Link>
      </div>
    </div>
  );
}
