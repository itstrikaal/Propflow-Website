import { siteConfig } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    foundingDate: siteConfig.since.toString(),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Marathi", "Gujarati", "Tamil"],
    },
    sameAs: [
      "https://twitter.com/propflow",
      "https://linkedin.com/company/propflow",
      "https://youtube.com/@propflow",
    ],
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: siteConfig.description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter",
          price: "999",
          priceCurrency: "INR",
          description: "Perfect for independent brokers.",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "2499",
          priceCurrency: "INR",
          description: "For growing brokerages.",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "7499",
          priceCurrency: "INR",
          description: "For large agencies.",
        },
      ],
    },
    featureList: [
      "WhatsApp CRM",
      "AI Lead Scoring",
      "Document Management",
      "Automation Engine",
      "Deal Dashboard",
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
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
