export function Loading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-3">
        <div className="border-brand-500 h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
        <p className="text-fg-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}
