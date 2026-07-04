import { siteConfig } from "@/lib/constants";

const mentions = [
  { name: "YourStory", file: "/press/yourstory.svg" },
  { name: "Inc42", file: "/press/inc42.svg" },
  { name: "TechCrunch", file: "/press/techcrunch.svg" },
  { name: "Entrackr", file: "/press/entrackr.svg" },
  { name: "Mint", file: "/press/mint.svg" },
  { name: "Economic Times", file: "/press/economic-times.svg" },
] as const;

/**
 * Lightweight "As featured in" press mentions strip. Logos are stylised SVG
 * placeholders for now — swap with the publication's real wordmark + a link
 * to the article once coverage is live.
 */
export function PressMentionsSection() {
  return (
    <section
      className="bg-surface-secondary border-border/60 border-y py-14"
      aria-label="Press and media coverage"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-fg-muted text-center text-[11px] font-medium tracking-[0.2em] uppercase">
          As featured in
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {mentions.map((m) => (
            <div
              key={m.name}
              className="flex h-10 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              title={m.name}
            >
              {/* Static SVG wordmarks — no benefit from next/image wrapping. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.file}
                alt={m.name}
                width={140}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-7 w-auto dark:invert"
              />
            </div>
          ))}
        </div>
        <p className="text-fg-muted mt-8 text-center text-xs">
          Coverage inquiries:{" "}
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
