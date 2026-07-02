import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/features",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/blog/why-brokers-need-a-crm",
    "/blog/whatsapp-for-real-estate",
    "/blog/rera-compliance-digital",
    "/blog/ai-lead-scoring-real-estate",
    "/compare/whatsapp",
    "/compare/excel",
    "/compare/crm",
    "/security",
    "/roadmap",
    "/changelog",
    "/careers",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-02"),
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog/") ? "monthly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.8,
  }));
}
