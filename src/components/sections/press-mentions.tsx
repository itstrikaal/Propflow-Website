import { pressMentions, siteConfig } from "@/lib/constants";

/**
 * "As featured in" press strip — lightweight, no animations, reads naturally
 * on every breakpoint. Mobile-first: 3-col grid → 6-col at lg.
 */
export function PressMentionsSection() {
  return (
    <section
      className="bg-surface-secondary border-border/60 border-y py-10 sm:py-14"
      aria-label="Press and media coverage"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-fg-muted text-center text-[11px] font-medium tracking-[0.2em] uppercase">
          As featured in
        </p>
        <div className="mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-5 sm:mt-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-6 lg:grid-cols-6">
          {pressMentions.map((m) => (
            <div
              key={m.name}
              className="flex h-9 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
              title={m.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.file}
                alt={m.name}
                width={140}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto sm:h-7 dark:invert"
              />
            </div>
          ))}
        </div>
        <p className="text-fg-muted mt-6 text-center text-[11px] sm:mt-8 sm:text-xs">
          For coverage and partnerships:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-fg underline-offset-4 transition-opacity hover:opacity-70"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}
