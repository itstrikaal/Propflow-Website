import { siteConfig } from "./constants";
import type { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noIndex,
}: PageMetadata): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export const homeMetadata: Metadata = createMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

export const featuresMetadata: Metadata = createMetadata({
  title: "Features",
  description:
    "Discover how PropFlow's WhatsApp CRM, AI lead scoring, document management, and automation engine transform your real estate business.",
  path: "/features",
});

export const pricingMetadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for Indian property brokers. Start with a 14-day free trial. No credit card required.",
  path: "/pricing",
});

export const aboutMetadata: Metadata = createMetadata({
  title: "About",
  description:
    "PropFlow is building the operating system for Indian property brokers. Learn our story, mission, and vision.",
  path: "/about",
});

export const blogMetadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Insights, guides, and resources for Indian real estate professionals. PropFlow blog covers CRM tips, WhatsApp strategies, and industry trends.",
  path: "/blog",
});

export const contactMetadata: Metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with the PropFlow team. We'd love to hear from you.",
  path: "/contact",
});

export const securityMetadata: Metadata = createMetadata({
  title: "Security",
  description:
    "PropFlow takes data security seriously. Learn about our encryption, data centre locations, compliance standards, and security practices.",
  path: "/security",
});

export const roadmapMetadata: Metadata = createMetadata({
  title: "Roadmap",
  description:
    "See what's coming next to PropFlow. We build in public and prioritise what brokers need most.",
  path: "/roadmap",
});

export const changelogMetadata: Metadata = createMetadata({
  title: "Changelog",
  description: "Latest updates, improvements, and new features shipped to PropFlow.",
  path: "/changelog",
});

export const careersMetadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Join PropFlow and help build the operating system for Indian property brokers. View open positions.",
  path: "/careers",
});

export const privacyMetadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "PropFlow privacy policy — how we collect, use, and protect your data.",
  path: "/privacy",
});

export const termsMetadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "PropFlow terms of service — the terms governing your use of our platform.",
  path: "/terms",
});

export const cookiesMetadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description: "How PropFlow uses cookies and similar technologies.",
  path: "/cookies",
});
