import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-alt-500">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-tertiary">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-fg-muted">
              Made in India, for India
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-fg">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-tertiary transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-fg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-tertiary transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-fg">Compare</h3>
            <ul className="space-y-3">
              {footerLinks.compare.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm text-fg-tertiary transition-colors hover:text-fg"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-fg-muted transition-colors hover:text-fg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-fg-muted transition-colors hover:text-fg"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-fg-muted transition-colors hover:text-fg"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
