export function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
        <p className="text-sm text-fg-muted">Loading...</p>
      </div>
    </div>
  );
}
