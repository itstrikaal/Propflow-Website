"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

type Status = "operational" | "degraded" | "outage" | "unknown";

const STATUS_LABEL: Record<Status, string> = {
  operational: "All systems operational",
  degraded: "Degraded performance",
  outage: "Service outage",
  unknown: "Status unavailable",
};

const STATUS_COLOR: Record<Status, string> = {
  operational: "bg-success",
  degraded: "bg-warning",
  outage: "bg-error",
  unknown: "bg-fg-muted",
};

// Read once at module load — NEXT_PUBLIC_* vars are inlined at build time.
const STATUS_PAGE_URL = process.env.NEXT_PUBLIC_STATUS_PAGE_URL;

/**
 * Lightweight live-status indicator. Polls our public status endpoint every
 * 60s and surfaces a coloured dot + label. When no status page is
 * configured we optimistically show "operational" without ever touching
 * state from inside an effect.
 */
export function StatusIndicator() {
  // Initial state is derived from the build-time env value so we never
  // need to call setState synchronously from useEffect just to skip work.
  const [status, setStatus] = useState<Status>(
    STATUS_PAGE_URL ? "unknown" : "operational"
  );

  useEffect(() => {
    if (!STATUS_PAGE_URL) return; // already in the optimistic "operational" state

    let cancelled = false;
    const check = async () => {
      try {
        const res = await fetch(`${STATUS_PAGE_URL}/api/v1/status`, {
          cache: "no-store",
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("bad status");
        const data = (await res.json()) as { status?: Status };
        if (cancelled) return;
        const valid: readonly Status[] = ["operational", "degraded", "outage", "unknown"];
        const next = valid.includes(data.status as Status)
          ? (data.status as Status)
          : "unknown";
        setStatus(next);
      } catch {
        if (!cancelled) setStatus("unknown");
      }
    };
    check();
    const id = window.setInterval(check, 60_000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return (
    <a
      href={STATUS_PAGE_URL ?? "/security"}
      className="border-border bg-surface text-fg-secondary hover:bg-surface-secondary hover:text-fg inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
      aria-live="polite"
      aria-label={`Platform status: ${STATUS_LABEL[status]}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${STATUS_COLOR[status]}`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${STATUS_COLOR[status]}`}
        />
      </span>
      <Activity className="text-fg-muted h-3 w-3" aria-hidden="true" />
      {STATUS_LABEL[status]}
    </a>
  );
}
