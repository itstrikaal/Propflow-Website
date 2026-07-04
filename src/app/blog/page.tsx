import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

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

  // Emit BlogPosting JSON-LD for every post so individual articles can rank
  // for their long-tail queries (Google picks up the structured data even
  // from the listing page).
  const postSchemas = posts.map((p) =>
    blogPostingSchema({
      title: p.title,
      description: p.description,
      slug: p.slug,
      author: p.author,
      datePublished: p.date,
      image: "/images/og.png",
    })
  );

  return (
    <>
      <JsonLd
        id="ld-blog-list"
        schema={[
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]),
          ...postSchemas,
        ]}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Blog"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Blog</span>
          <h1 className="font-display section-title">
            Insights for Indian real estate brokers.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            Guides, best practices, and tips to help you grow your brokerage with
            PropFlow.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts[0] && (
            <Link
              href={posts[0].url}
              className="group border-border bg-surface hover:border-fg/20 mt-2 block overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="grid gap-0 lg:grid-cols-2">
                <div className="bg-surface-secondary relative hidden aspect-[4/3] lg:block">
                  <div className="grid-pattern absolute inset-0 opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="border-border bg-surface mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border font-display text-2xl font-semibold tracking-[-0.03em] shadow-sm transition-transform duration-500 group-hover:scale-105">
                        {posts[0].category.charAt(0)}
                      </div>
                      <p className="text-fg-secondary mt-4 text-sm font-medium">
                        {posts[0].category}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="text-fg-muted flex flex-wrap items-center gap-3 text-xs">
                    <span className="bg-fg text-bg rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase">
                      Featured
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(posts[0].date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {posts[0].readingTime}
                    </span>
                  </div>
                  <h2 className="text-fg mt-5 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                    {posts[0].title}
                  </h2>
                  <p className="text-fg-tertiary mt-3 text-sm leading-relaxed sm:text-base">
                    {posts[0].description}
                  </p>
                  <div className="text-fg mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={post.url}
                className="group border-border bg-surface hover:border-fg/20 flex flex-col rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md sm:p-8"
              >
                <div className="text-fg-muted flex flex-wrap items-center gap-3 text-xs">
                  <span className="bg-surface-secondary text-fg-secondary rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h2 className="text-fg mt-4 text-lg font-semibold tracking-[-0.022em] transition-colors">
                  {post.title}
                </h2>
                <p className="text-fg-tertiary mt-3 flex-1 text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border-secondary)] pt-5">
                  <span className="text-fg inline-flex items-center gap-1 text-sm font-medium">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
    </>
  );
}
