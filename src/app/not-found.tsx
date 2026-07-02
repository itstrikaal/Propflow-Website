import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/10">
        <span className="text-4xl font-bold text-brand-500">404</span>
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-fg-tertiary">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button variant="default" className="gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </Link>
        <Link href="/">
          <Button variant="secondary" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
