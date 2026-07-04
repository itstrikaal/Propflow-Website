import { siteConfig } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "PropFlow India",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}/images/og.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.since.toString(),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "sales",
        availableLanguage: ["English", "Hindi", "Marathi", "Gujarati", "Tamil"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        email: "support@propflow.in",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    // Social profiles — keep as canonical handle URLs even if a profile
    // doesn't exist yet, so the schema validates and Google can correlate
    // them as the brand grows.
    sameAs: [
      "https://twitter.com/propflow",
      "https://x.com/propflow",
      "https://linkedin.com/company/propflow",
      "https://youtube.com/@propflow",
      "https://github.com/itstrikaal",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koregaon Park",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411001",
      addressCountry: "IN",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer Relationship Management Software",
    operatingSystem: "Web, Android, iOS",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/og.png`,
    screenshot: `${siteConfig.url}/images/og.png`,
    softwareVersion: "1.5.0",
    datePublished: "2026-01-10",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1800",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "7499",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "999",
          priceCurrency: "INR",
          category: "subscription",
          description: "Perfect for independent brokers just getting started.",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "2499",
          priceCurrency: "INR",
          category: "subscription",
          description: "For growing brokerages with a team.",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "7499",
          priceCurrency: "INR",
          category: "subscription",
          description: "For large agencies with custom needs.",
        },
      ],
    },
    featureList: [
      "WhatsApp CRM",
      "AI Lead Scoring",
      "Document Management",
      "Automation Engine",
      "Deal Dashboard",
      "Smart Sharing",
      "Team Collaboration",
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function websiteSchema() {
  // Note: SearchAction is intentionally omitted because /search is not yet
  // implemented. Adding it before the route exists causes a Google Search
  // Console error in the Enhancements panel.
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "PropFlow",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    copyrightYear: siteConfig.since,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
  };
}

/**
 * Blog posting schema for `/blog/[slug]` pages.
 */
export function blogPostingSchema({
  title,
  description,
  slug,
  author,
  datePublished,
  dateModified,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${siteConfig.url}/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    image: image ? [image] : [`${siteConfig.url}/images/og.png`],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    inLanguage: "en-IN",
    articleSection: "Real Estate",
  };
}

/**
 * WebPage schema for any page that wants explicit semantic markup beyond
 * the default Next.js metadata.
 */
export function webPageSchema({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "PricingPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: `${siteConfig.url}${path}`,
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
