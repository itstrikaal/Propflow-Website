import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/data/"],
      },
      // Ask well-behaved AI crawlers not to scrape for training by default.
      // (Honourable ones, including GPTBot and Claude, respect this signal.)
      {
        userAgent: ["GPTBot", "Claude-Web", "CCBot", "anthropic-ai", "ClaudeBot"],
        disallow: "/",
      },
    ],
    sitemap: [`${siteConfig.url}/sitemap.xml`, `${siteConfig.url}/feed.xml`],
    host: siteConfig.url,
  };
}
