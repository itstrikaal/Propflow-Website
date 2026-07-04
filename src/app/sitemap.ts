import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/security", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/roadmap", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/changelog", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
];

const COMPARE_ROUTES = ["whatsapp", "excel", "crm"];

const BLOG_POSTS = [
  { slug: "why-brokers-need-a-crm", date: "2026-06-28" },
  { slug: "whatsapp-for-real-estate", date: "2026-06-20" },
  { slug: "rera-compliance-digital", date: "2026-06-15" },
  { slug: "ai-lead-scoring-real-estate", date: "2026-06-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const compareEntries: MetadataRoute.Sitemap = COMPARE_ROUTES.map((slug) => ({
    url: `${siteConfig.url}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...compareEntries, ...blogEntries];
}
