import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";
import { StatusIndicator } from "@/components/shared/status-indicator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-bg-secondary border-t" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Live status pill — only on lg+ so it doesn't crowd mobile */}
        <div className="mb-10 flex justify-center lg:justify-start">
          <StatusIndicator />
        </div>
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
              aria-label={`${siteConfig.name} Home`}
            >
              <div className="from-brand-500 to-brand-alt-500 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              {siteConfig.name}
            </Link>
            <p className="text-fg-tertiary mt-4 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-fg-muted mt-4 text-xs font-medium tracking-widest uppercase">
              Made in India, for India
            </p>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="text-fg mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-fg mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-fg mb-4 text-sm font-semibold">Compare</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/compare/whatsapp"
                  className="text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs WhatsApp + Gallery
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/excel"
                  className="text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs Excel / Sheets
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/crm"
                  className="text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs Traditional CRM
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-fg mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-fg-tertiary hover:text-fg text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-fg-muted text-xs">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-fg-muted hover:text-fg text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-fg-muted hover:text-fg text-xs transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-fg-muted hover:text-fg text-xs transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
