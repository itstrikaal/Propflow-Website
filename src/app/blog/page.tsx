import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const metadata = createMetadata({
  title: "Blog",
  description: "Insights, guides, and best practices for Indian real estate brokers. Tips on WhatsApp CRM, property management, and growing your brokerage.",
  path: "/blog",
});

// Sample blog posts — replace with real MDX content
const posts = [
  {
    slug: "why-brokers-need-a-crm",
    title: "Why Every Indian Property Broker Needs a CRM (And Why WhatsApp Alone Isn't Enough)",
    excerpt: "WhatsApp is great for chatting, but it's not a CRM. Here's why your brokerage needs dedicated software to track leads, manage documents, and close more deals.",
    date: "June 28, 2026",
    author: "PropFlow Team",
    readTime: "5 min read",
    category: "Guides",
  },
  {
    slug: "whatsapp-for-real-estate",
    title: "The Broker's Guide to WhatsApp for Real Estate in 2026",
    excerpt: "WhatsApp has become the primary communication tool for Indian real estate. Learn how to turn your WhatsApp chats into a deal-closing machine.",
    date: "June 20, 2026",
    author: "PropFlow Team",
    readTime: "8 min read",
    category: "WhatsApp",
  },
  {
    slug: "rera-compliance-digital",
    title: "RERA Compliance in the Digital Age: What Every Broker Must Know",
    excerpt: "New RERA guidelines require better documentation and transparency. Here's how digital tools can help you stay compliant while closing faster.",
    date: "June 15, 2026",
    author: "PropFlow Team",
    readTime: "6 min read",
    category: "Compliance",
  },
  {
    slug: "ai-lead-scoring-real-estate",
    title: "AI Lead Scoring for Real Estate: Stop Wasting Time on Cold Leads",
    excerpt: "Not all leads are equal. Learn how AI can automatically prioritise the buyers most likely to close, so you focus on what matters.",
    date: "June 10, 2026",
    author: "PropFlow Team",
    readTime: "7 min read",
    category: "AI & Automation",
  },
];

export default function BlogPage() {
  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="section-label">Blog</span>
          <h1 className="section-title">Insights for Indian real estate brokers.</h1>
          <p className="section-sub mx-auto max-w-2xl">
            Guides, best practices, and tips to help you grow your brokerage with PropFlow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-brand-500/30 hover:shadow-lg sm:p-8"
            >
              <div className="flex items-center gap-3 text-xs text-fg-muted">
                <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-medium text-brand-500">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-fg transition-colors group-hover:text-brand-500 sm:text-xl">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-tertiary">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-500">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
