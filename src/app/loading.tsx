import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      aria-label="Loading page"
      role="status"
    >
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="text-brand-500 h-8 w-8 animate-spin" aria-hidden="true" />
        <p className="text-fg-muted text-sm">Loading…</p>
      </div>
    </div>
  );
}
