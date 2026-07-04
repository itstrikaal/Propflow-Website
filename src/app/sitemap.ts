import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Pull the live list of blog posts so the sitemap stays in sync with the
  // `content/blog/*.mdx` directory — no more hardcoded slugs.
  const posts = await getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.8 : 0.6,
  }));

  return [...staticEntries, ...compareEntries, ...blogEntries];
}
