import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";
import { StatusIndicator } from "@/components/shared/status-indicator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-border bg-surface-secondary relative border-t"
      role="contentinfo"
    >
      <div className="mesh-section-soft" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Live status pill */}
        <div className="mb-10 flex justify-center sm:mb-12 lg:justify-start">
          <StatusIndicator />
        </div>

        {/* Main Footer Grid — mobile-first: 1 col → 2 col at sm → 12 col at lg */}
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 text-base font-semibold tracking-[-0.02em]"
              aria-label={`${siteConfig.name} Home`}
            >
              <span className="from-fg to-fg-secondary relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br shadow-sm">
                <span className="text-sm font-bold text-bg">P</span>
              </span>
              {siteConfig.name}
            </Link>
            <p className="text-fg-tertiary mt-5 max-w-sm text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-fg-muted mt-4 text-[11px] font-medium tracking-[0.18em] uppercase">
              Built in India · For Indian brokers · Since {siteConfig.since}
            </p>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-fg mb-4 text-xs font-semibold tracking-widest uppercase sm:mb-5">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-fg mb-4 text-xs font-semibold tracking-widest uppercase sm:mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-fg mb-4 text-xs font-semibold tracking-widest uppercase sm:mb-5">
              Compare
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/compare/whatsapp"
                  className="group text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs WhatsApp + Gallery
                  <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/excel"
                  className="group text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs Excel / Sheets
                  <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/compare/crm"
                  className="group text-fg-tertiary hover:text-fg inline-flex items-center gap-1 text-sm transition-colors"
                >
                  vs Traditional CRM
                  <ArrowUpRight className="h-3 w-3 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border mt-12 flex flex-col items-start justify-between gap-4 border-t pt-7 sm:mt-16 sm:flex-row sm:items-center sm:pt-8">
          <p className="text-fg-muted text-xs">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            <Link
              href="/privacy"
              className="text-fg-muted hover:text-fg text-xs underline-offset-4 transition-colors hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-fg-muted hover:text-fg text-xs underline-offset-4 transition-colors hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-fg-muted hover:text-fg text-xs underline-offset-4 transition-colors hover:underline"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
