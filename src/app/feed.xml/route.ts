import { siteConfig } from "@/lib/constants";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
};

// Centralised post list — kept in sync with the blog index page. When we
// migrate the blog to MDX we'll read these from the content/blog directory.
const posts: BlogPost[] = [
  {
    slug: "why-brokers-need-a-crm",
    title:
      "Why Every Indian Property Broker Needs a CRM (And Why WhatsApp Alone Isn't Enough)",
    description:
      "WhatsApp is great for chatting, but it's not a CRM. Here's why your brokerage needs dedicated software.",
    date: "2026-06-28",
    author: "PropFlow Team",
    category: "Guides",
  },
  {
    slug: "whatsapp-for-real-estate",
    title: "The Broker's Guide to WhatsApp for Real Estate in 2026",
    description:
      "WhatsApp has become the primary communication tool for Indian real estate. Learn how to turn your chats into a deal-closing machine.",
    date: "2026-06-20",
    author: "PropFlow Team",
    category: "WhatsApp",
  },
  {
    slug: "rera-compliance-digital",
    title: "RERA Compliance in the Digital Age: What Every Broker Must Know",
    description:
      "New RERA guidelines require better documentation and transparency. Here's how digital tools can help you stay compliant.",
    date: "2026-06-15",
    author: "PropFlow Team",
    category: "Compliance",
  },
  {
    slug: "ai-lead-scoring-real-estate",
    title: "AI Lead Scoring for Real Estate: Stop Wasting Time on Cold Leads",
    description:
      "Not all leads are equal. Learn how AI can automatically prioritise the buyers most likely to close.",
    date: "2026-06-10",
    author: "PropFlow Team",
    category: "AI & Automation",
  },
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(): Promise<Response> {
  const lastBuild = posts[0]?.date ?? new Date().toISOString().slice(0, 10);

  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${siteConfig.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <author>noreply@propflow.in (${escapeXml(p.author)})</author>
      <category>${escapeXml(p.category)}</category>
      <description>${escapeXml(p.description)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml" />
    <copyright>© ${new Date().getFullYear()} ${escapeXml(siteConfig.name)}. All rights reserved.</copyright>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
