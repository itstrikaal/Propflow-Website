import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Insights, guides, and best practices for Indian real estate brokers. Tips on WhatsApp CRM, property management, and growing your brokerage.",
  path: "/blog",
});

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [hero, ...rest] = posts;

  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">Blog</span>
          <h1 className="section-title">Insights for Indian real estate brokers.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            Guides, best practices, and tips to help you grow your brokerage with
            PropFlow.
          </p>
        </div>

        {hero && (
          <Link
            href={hero.url}
            className="group border-border bg-surface hover:border-brand-500/30 mt-16 block overflow-hidden rounded-2xl border transition-all hover:shadow-lg"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="from-brand-500/20 via-brand-alt-500/15 to-brand-500/5 relative hidden aspect-[4/3] bg-gradient-to-br lg:block">
                <div className="grid-pattern absolute inset-0 opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="from-brand-500 to-brand-alt-500 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-bold text-white shadow-lg">
                      {hero.category.charAt(0)}
                    </div>
                    <p className="text-fg-secondary mt-4 text-sm font-medium">
                      {hero.category}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <div className="text-fg-muted flex items-center gap-3 text-xs">
                  <span className="bg-brand-500/10 text-brand-500 rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                    Featured
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(hero.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {hero.readingTime}
                  </span>
                </div>
                <h2 className="text-fg group-hover:text-brand-500 mt-4 text-2xl font-bold tracking-tight transition-colors sm:text-3xl">
                  {hero.title}
                </h2>
                <p className="text-fg-tertiary mt-3 text-sm leading-relaxed sm:text-base">
                  {hero.description}
                </p>
                <div className="text-brand-500 mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>
        )}

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={post.url}
              className="group border-border bg-surface hover:border-brand-500/30 rounded-2xl border p-6 transition-all hover:shadow-lg sm:p-8"
            >
              <div className="text-fg-muted flex items-center gap-3 text-xs">
                <span className="bg-brand-500/10 text-brand-500 rounded-full px-2.5 py-0.5 text-[10px] font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </span>
              </div>
              <h2 className="text-fg group-hover:text-brand-500 mt-4 text-lg font-semibold transition-colors">
                {post.title}
              </h2>
              <p className="text-fg-tertiary mt-3 text-sm leading-relaxed">
                {post.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-brand-500 inline-flex items-center gap-1 text-sm font-medium">
                  Read more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="text-fg-muted flex items-center gap-1 text-xs">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/feed.xml"
            className="text-fg-tertiary hover:text-fg inline-flex items-center gap-2 text-sm transition-colors"
          >
            Subscribe via RSS
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
