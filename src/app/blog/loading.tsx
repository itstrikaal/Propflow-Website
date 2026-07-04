import { Card } from "@/components/ui/card";

export default function BlogLoading() {
  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-surface-tertiary mx-auto h-4 w-16 animate-pulse rounded-full" />
          <div className="bg-surface-tertiary mx-auto mt-6 h-10 w-2/3 animate-pulse rounded-lg" />
          <div className="bg-surface-tertiary mx-auto mt-4 h-4 w-1/2 animate-pulse rounded" />
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="bg-surface-tertiary h-5 w-16 animate-pulse rounded-full" />
                <div className="bg-surface-tertiary h-4 w-24 animate-pulse rounded" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-surface-tertiary h-6 w-5/6 animate-pulse rounded" />
                <div className="bg-surface-tertiary h-6 w-4/6 animate-pulse rounded" />
              </div>
              <div className="mt-4 space-y-2">
                <div className="bg-surface-tertiary h-4 w-full animate-pulse rounded" />
                <div className="bg-surface-tertiary h-4 w-3/4 animate-pulse rounded" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
