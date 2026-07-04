import type {
  NavLink,
  Stat,
  Integration,
  PricingTier,
  FAQItem,
  Testimonial,
  Feature,
} from "@/types";

export const siteConfig = {
  name: "PropFlow",
  tagline: "The AI Operating System for Real Estate Professionals",
  description:
    "PropFlow is an AI-powered platform that transforms how Indian property brokers manage leads, properties, documents, and deals — all from one place.",
  url: "https://propflow.in",
  // Route to the dynamically-generated OG image (src/app/opengraph-image.tsx).
  // This is preferred over a static /images/og.png because Next.js produces
  // a proper 1200x630 PNG branded for PropFlow at build time.
  ogImage: "/opengraph-image",
  email: "hello@propflow.in",
  twitter: "@propflow",
  brandColor: "#2563eb",
  locale: "en_IN",
  since: 2024,
};

export const navigation: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/changelog", label: "Changelog" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

// ─── Marketing stats ────────────────────────────────────────────────────────
// Single source of truth used across the home hero, about page and press kit.
// Keep these aspirational-but-honest: round numbers and label them clearly.
export const stats: Stat[] = [
  { value: 1800, suffix: "+", label: "Active brokers across India" },
  { value: 99.9, suffix: "%", label: "Platform uptime — last 90 days" },
  { value: 15, suffix: " hrs/wk", label: "Average time saved per broker" },
  { value: 3, suffix: "x", label: "More deals closed vs. spreadsheets" },
];

// "All-time" cumulative numbers used on the About page.
export const companyStats: Stat[] = [
  { value: 12000, suffix: "+", label: "Deals tracked on PropFlow" },
  { value: 1800, suffix: "+", label: "Active brokers" },
  { value: 22, suffix: "", label: "Indian cities covered" },
];

// Trust signals surfaced site-wide (badges, microcopy, schema).
export const trustSignals = {
  founded: 2024,
  headquarters: "Bengaluru, India",
  dataResidency: "Mumbai & Bengaluru (AWS India)",
  encryption: "AES-256 at rest, TLS 1.3 in transit",
  compliance: ["DPDPA-ready", "RERA-aware workflows", "ISO 27001 (in progress)"],
  uptimeSLA: "99.9%",
  support: ["Email", "WhatsApp", "Phone (Enterprise)"],
  supportHours: "Mon–Sat, 9am–9pm IST",
} as const;

export const features: Feature[] = [
  {
    id: "whatsapp-crm",
    title: "WhatsApp CRM",
    description:
      "Every WhatsApp conversation becomes a tracked lead. No more switching apps to log calls or follow up.",
    icon: "message-circle",
    gradient: "from-brand-500 to-brand-600",
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring",
    description:
      "Our AI learns which leads are most likely to convert and prioritises them so you focus on the right deals.",
    icon: "brain",
    gradient: "from-brand-alt-500 to-brand-alt-600",
  },
  {
    id: "document-management",
    title: "Document Hub",
    description:
      "Store, tag, and share Aadhaar, PAN, sale deeds, and RERA docs. Auto-generated property packages in one click.",
    icon: "file-text",
    gradient: "from-brand-600 to-brand-alt-500",
  },
  {
    id: "automation",
    title: "Automation Engine",
    description:
      "Auto-send property details, schedule reminders, and trigger follow-ups. Set rules once, close deals forever.",
    icon: "zap",
    gradient: "from-brand-alt-500 to-brand-500",
  },
  {
    id: "analytics",
    title: "Deal Dashboard",
    description:
      "Real-time pipeline view. See which properties are hot, which leads are stalled, and exactly where to focus.",
    icon: "bar-chart-3",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    id: "sharing",
    title: "Smart Sharing",
    description:
      "Share property portfolios via WhatsApp, ZIP, or secure link. No more forwarding 30 photos one by one.",
    icon: "share-2",
    gradient: "from-brand-alt-600 to-brand-alt-700",
  },
];

export const howItWorks: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: "Connect Your WhatsApp",
    description:
      "Link your WhatsApp Business account. PropFlow automatically captures every lead, message, and inquiry.",
  },
  {
    step: 2,
    title: "Manage Everything in One Place",
    description:
      "Properties, documents, follow-ups, and deals — all organised in a single dashboard. Your team sees the same data.",
  },
  {
    step: 3,
    title: "Close Deals Faster",
    description:
      "AI suggests next actions, auto-generates document packages, and reminds you when to follow up. Deals move faster.",
  },
];

export const integrations: Integration[] = [
  { name: "WhatsApp", icon: "message-circle", category: "Communication" },
  { name: "Google Drive", icon: "cloud", category: "Storage" },
  { name: "Google Calendar", icon: "calendar", category: "Productivity" },
  { name: "Google Contacts", icon: "users", category: "CRM" },
  { name: "Email", icon: "mail", category: "Communication" },
  { name: "SMS", icon: "smartphone", category: "Communication" },
  { name: "ZIP Export", icon: "archive", category: "Export" },
  { name: "RERA Portal", icon: "building", category: "Compliance" },
  { name: "Payment Gateway", icon: "credit-card", category: "Finance" },
  { name: "Cloud Backup", icon: "upload-cloud", category: "Storage" },
  { name: "PDF Generator", icon: "file", category: "Documents" },
  { name: "API Access", icon: "code", category: "Developer" },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for independent brokers just getting started.",
    monthlyPrice: 999,
    yearlyPrice: 9999,
    features: [
      "Up to 100 properties",
      "WhatsApp integration",
      "Basic CRM",
      "Document storage (5 GB)",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing brokerages with a team.",
    monthlyPrice: 2499,
    yearlyPrice: 24999,
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited properties",
      "AI lead scoring",
      "Team collaboration (up to 5)",
      "Document storage (50 GB)",
      "Automation engine",
      "Analytics dashboard",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large agencies with custom needs.",
    monthlyPrice: 7499,
    yearlyPrice: 74999,
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "SSO & RBAC",
      "Audit logs",
      "SLA guarantee",
      "On-premise deployment",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "what-is-propflow",
    question: "What exactly is PropFlow?",
    answer:
      "PropFlow is an AI-powered platform built specifically for Indian property brokers. It combines WhatsApp CRM, property management, document handling, and deal tracking into one unified workspace. Think of it as WhatsApp + CRM + Document Manager — but designed specifically for how Indian real estate works.",
  },
  {
    id: "who-is-it-for",
    question: "Who is PropFlow for?",
    answer:
      "PropFlow is designed for property brokers, real estate consultants, agencies, builders, and sales teams in India. Whether you're an independent broker managing 10 properties a month or a large agency handling hundreds, PropFlow scales to your needs.",
  },
  {
    id: "whatsapp-integration",
    question: "How does the WhatsApp integration work?",
    answer:
      "You link your WhatsApp Business number with PropFlow. Every incoming message automatically creates or updates a lead profile. You can share property details, photos, and documents directly from PropFlow via WhatsApp. All conversations are tracked without you having to do anything extra.",
  },
  {
    id: "rera-compliance",
    question: "Is PropFlow RERA compliant?",
    answer:
      "Yes. PropFlow is designed with Indian real estate regulations in mind. Document templates, property registration workflows, and compliance tracking are built into the platform. We regularly update to stay aligned with RERA and state-specific requirements.",
  },
  {
    id: "mobile-support",
    question: "Can I use PropFlow on my phone?",
    answer:
      "Absolutely. PropFlow is built mobile-first, recognising that most Indian brokers operate primarily from their phones. The web app works perfectly on mobile browsers, and we have dedicated Android and iOS apps in development.",
  },
  {
    id: "free-trial",
    question: "Is there a free trial?",
    answer:
      "Yes. We offer a 14-day free trial on all plans with no credit card required. You get full access to all features so you can see exactly how PropFlow works for your brokerage. Cancel anytime.",
  },
  {
    id: "data-security",
    question: "How secure is my data?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest using AES-256. Documents are stored in Indian data centres (Mumbai & Bangalore). We comply with Indian data protection laws. Enterprise plans include SSO, RBAC, and full audit logs.",
  },
  {
    id: "migration",
    question: "Can I import my existing data?",
    answer:
      "Yes. We provide easy import from Excel, Google Sheets, and other CRM exports. Our support team can help you migrate your existing property listings, contacts, and documents. Most migrations are completed within a day.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Mehta",
    role: "Independent Property Broker",
    company: "Mehta Realty",
    content:
      "I was managing everything on WhatsApp and Gallery. I'd lose track of which client saw which property. PropFlow changed everything. Now every lead, every photo, every follow-up is in one place. I close 3x more deals.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Managing Director",
    company: "Sharma Properties & Consultants",
    content:
      "We have 12 agents in our agency. Before PropFlow, coordinating between them was chaos. Now everyone sees the same pipeline, the same property data, the same client history. Our team efficiency has doubled.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit Patel",
    role: "Real Estate Consultant",
    company: "Patel & Sons Realty",
    content:
      "The document management alone is worth the price. I used to spend hours finding and sending Aadhaar copies, sale deeds, and RERA docs. Now I generate a complete property package in 2 clicks.",
    rating: 5,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    role: "Sales Head",
    company: "Reddy Builders & Developers",
    content:
      "We evaluated 6 different CRMs. PropFlow was the only one that understood how Indian real estate actually works. The WhatsApp integration is a game-changer. Our sales cycle dropped from 45 days to 18 days.",
    rating: 5,
  },
];

export const comparisonData = {
  headers: [
    "Feature",
    "PropFlow",
    "WhatsApp + Gallery",
    "Excel / Sheets",
    "Traditional CRM",
  ],
  rows: [
    ["WhatsApp lead capture", "Auto", "Manual", "N/A", "N/A"],
    ["Property management", "Built-in", "Scattered", "Manual", "Add-on"],
    ["Document organisation", "Auto-tagged", "Gallery chaos", "N/A", "Add-on"],
    ["Team collaboration", "Real-time", "Forward only", "Shared file", "Per-seat"],
    ["AI lead scoring", "Included", "N/A", "N/A", "Premium"],
    ["WhatsApp sharing", "1-click", "Manual", "N/A", "N/A"],
    ["Analytics", "Built-in", "N/A", "Manual", "Premium"],
    ["Auto follow-ups", "AI-driven", "Manual", "N/A", "Workflow"],
    ["Mobile-first", "Yes", "Yes", "Poor", "Mostly desktop"],
    ["RERA compliance", "Built-in", "N/A", "N/A", "N/A"],
    ["Price (approx/month)", "₹999", "Free", "Free", "₹3,000+"],
  ],
};

export const ROUTES = {
  home: "/",
  features: "/features",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
  blog: "/blog",
  security: "/security",
  roadmap: "/roadmap",
  changelog: "/changelog",
  careers: "/careers",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;
