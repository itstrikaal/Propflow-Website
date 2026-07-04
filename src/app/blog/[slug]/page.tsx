import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Very small markdown → HTML renderer for the blog body.
 *
 * We render only the subset our posts use: paragraphs, bullet lists, numbered
 * lists, bold (**...**), inline code, and headings (## / ###). When we need
 * more (tables, footnotes, syntax highlighting) we'll swap this for a proper
 * MDX renderer.
 */
function renderMarkdown(src: string): React.ReactNode[] {
  const lines = src.split(/\r?\n/);
  const out: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // Heading
    const h = line.match(/^(#{2,3})\s+(.+)$/);
    if (h) {
      const level = h[1].length;
      const text = h[2];
      out.push(
        level === 2 ? (
          <h2 key={key++} className="text-fg mt-12 text-2xl font-bold tracking-tight">
            {renderInline(text)}
          </h2>
        ) : (
          <h3 key={key++} className="text-fg mt-8 text-xl font-semibold tracking-tight">
            {renderInline(text)}
          </h3>
        )
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.match(/^[-*]\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      out.push(
        <ul key={key++} className="text-fg-secondary ml-5 list-disc space-y-2">
          {items.map((it, j) => (
            <li key={j}>{renderInline(it)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list (treat like paragraphs starting with N.)
    if (line.match(/^\d+\.\s+/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      out.push(
        <ol key={key++} className="text-fg-secondary ml-5 list-decimal space-y-2">
          {items.map((it, j) => (
            <li key={j}>{renderInline(it)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Plain paragraph
    out.push(
      <p key={key++} className="text-fg-secondary text-base leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }
  return out;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const remaining = text;
  let key = 0;

  // Match **bold** segments
  const boldRegex = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = boldRegex.exec(remaining))) {
    if (m.index > last) parts.push(remaining.slice(last, m.index));
    parts.push(
      <strong key={key++} className="text-fg font-semibold">
        {m[1]}
      </strong>
    );
    last = m.index + m[0].length;
  }
  if (last < remaining.length) parts.push(remaining.slice(last));
  return parts.length === 0 ? text : <>{parts}</>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-fg-muted hover:text-fg mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="text-fg-muted flex flex-wrap items-center gap-3 text-xs">
          <span className="bg-brand-500/10 text-brand-500 rounded-full px-2.5 py-0.5 text-[10px] font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-fg mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="text-fg-muted mt-4 flex items-center gap-2 text-sm">
          <User className="h-4 w-4" />
          {post.author}
        </div>

        <div className="mt-10">{renderMarkdown(post.body)}</div>

        <hr className="border-border my-12" />

        <div className="border-border bg-surface rounded-2xl border p-6 text-center sm:p-8">
          <p className="text-fg text-sm font-semibold">
            Ready to run your brokerage on PropFlow?
          </p>
          <p className="text-fg-tertiary mt-2 text-sm">
            14-day free trial. No credit card required.
          </p>
          <Link
            href="https://app.propflow.in/sign-up"
            className="from-brand-500 to-brand-alt-500 mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </section>
  );
}
