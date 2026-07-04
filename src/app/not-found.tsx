import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { MeshBackground } from "@/components/shared/mesh-background";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
      aria-label="Page not found"
    >
      <MeshBackground variant="hero" grain />
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <span className="font-display text-fg-muted text-7xl font-semibold tracking-[-0.05em] sm:text-8xl">
          404
        </span>
        <h1 className="font-display text-fg mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Page not found
        </h1>
        <p className="text-fg-tertiary mt-4 text-base leading-relaxed sm:text-lg">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button variant="default" size="lg" className="gap-2">
              <Home className="h-4 w-4" />
              Go home
            </Button>
          </Link>
          <Link href="/">
            <Button variant="secondary" size="lg" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go back
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
