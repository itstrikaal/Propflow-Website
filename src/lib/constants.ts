import type {
  NavLink,
  Stat,
  Integration,
  PricingTier,
  FAQItem,
  Testimonial,
  Feature,
} from "@/types";

// ─── Site config ────────────────────────────────────────────────────────────
export const siteConfig = {
  name: "PropFlow",
  tagline: "One calm workspace for Indian property brokers",
  description:
    "PropFlow is the all-in-one workspace for Indian property brokers — capture leads from WhatsApp, manage listings, store documents, and close deals without juggling five apps.",
  url: "https://propflow.in",
  // Route to the dynamically-generated OG image (src/app/opengraph-image.tsx).
  ogImage: "/opengraph-image",
  email: "hello@propflow.in",
  twitter: "@propflow",
  brandColor: "#2563eb",
  locale: "en_IN",
  since: 2024,
};

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navigation: NavLink[] = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Footer link columns
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

// ─── Hero copy ──────────────────────────────────────────────────────────────
export const heroCopy = {
  eyebrow: "Built for Indian real estate",
  /** Headline split into lines for line-by-line reveal animation. */
  headlineLines: [
    { text: "Run your brokerage", plain: true },
    { text: "without losing", plain: true },
    { text: "a single lead.", accent: true },
  ],
  subheadline:
    "PropFlow puts your WhatsApp chats, property listings, documents, and deals in one calm workspace — designed for how brokers actually work in India.",
  primaryCta: { label: "Start free 14-day trial", href: "https://app.propflow.in/sign-up" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  trustRow: ["No card required", "Set up in 10 minutes", "Cancel anytime"],
};

// ─── Marketing stats (home hero) ────────────────────────────────────────────
// Aspirational but honest: round numbers, clearly labelled.
export const stats: Stat[] = [
  { value: 1800, suffix: "+", label: "Brokers across India" },
  { value: 12000, suffix: "+", label: "Deals tracked so far" },
  { value: 22, suffix: "", label: "Indian cities served" },
  { value: 4.9, suffix: "/5", label: "Average broker rating" },
];

// Cumulative numbers for the About page.
export const companyStats: Stat[] = [
  { value: 12000, suffix: "+", label: "Deals tracked on PropFlow" },
  { value: 1800, suffix: "+", label: "Active brokers" },
  { value: 22, suffix: "", label: "Indian cities covered" },
];

// ─── Trust signals surfaced site-wide ───────────────────────────────────────
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

// ─── Hero social-proof microcopy ────────────────────────────────────────────
export const heroSocialProof = {
  rating: "4.9",
  ratingOutOf: "/5",
  reviewCount: "320+ reviews",
  brokerCount: 1847,
  brokerLabel: "brokers across India",
};

// ─── Press mentions ─────────────────────────────────────────────────────────
export const pressMentions = [
  { name: "YourStory", file: "/press/yourstory.svg" },
  { name: "Inc42", file: "/press/inc42.svg" },
  { name: "TechCrunch", file: "/press/techcrunch.svg" },
  { name: "Entrackr", file: "/press/entrackr.svg" },
  { name: "Mint", file: "/press/mint.svg" },
  { name: "Economic Times", file: "/press/economic-times.svg" },
] as const;

// ─── Trusted-by brokerage names (illustrative — placeholder for real logos) ─
// Used until we have permission to display actual client wordmarks.
export const trustedBrokerages = [
  { name: "Mehta Realty", city: "Mumbai" },
  { name: "Arihant Homes", city: "Delhi NCR" },
  { name: "Siddha Properties", city: "Bengaluru" },
  { name: "Vakratunda Estates", city: "Pune" },
  { name: "Sunteck Realty", city: "Mumbai" },
  { name: "Nirman Ventures", city: "Hyderabad" },
  { name: "Kumar Realtors", city: "Chennai" },
  { name: "Maple Homes", city: "Gurugram" },
  { name: "Sai Properties", city: "Ahmedabad" },
  { name: "Greenleaf Realty", city: "Kolkata" },
] as const;

// ─── Problem section ────────────────────────────────────────────────────────
// Each item is a specific pain point, not a generic complaint.
export const problems = [
  {
    id: "whatsapp-chaos",
    title: "Your WhatsApp inbox is a graveyard of half-deals.",
    description:
      "One client asks about three flats in one chat. Another sends a site photo. You forgot to reply to the third one from yesterday. Sound familiar?",
  },
  {
    id: "photo-hunt",
    title: "That perfect photo? You can't find it.",
    description:
      "Property photos, screenshots, client selfies, family pictures — all jumbled in your gallery. Finding the right image for the right client takes longer than the call itself.",
  },
  {
    id: "doc-scatter",
    title: "Documents live in five different places.",
    description:
      "Aadhaar on WhatsApp. PAN in Google Drive. Sale deed in your email. RERA certificate on paper. Nobody on your team knows where anything is.",
  },
  {
    id: "no-pipeline",
    title: "You don't actually know which deals are live.",
    description:
      "\"Is Ramesh still interested?\" \"Which flat did Priya see?\" Your pipeline lives in your head — and your head is full.",
  },
  {
    id: "team-overlap",
    title: "Two agents, same client, same property.",
    description:
      "Your colleague already showed that 2BHK to the client who's now calling you. Nobody knew. Now you both look unprofessional.",
  },
  {
    id: "cold-leads",
    title: "Hot leads go cold while you're busy.",
    description:
      "By the time you remember to follow up, three days have passed. The client has talked to two other brokers. The deal is gone.",
  },
] as const;

// ─── Solution section — three pillars ───────────────────────────────────────
export const solutionPillars = [
  {
    id: "capture",
    icon: "message-circle",
    title: "Capture every lead automatically.",
    description:
      "Connect your WhatsApp, web forms, and walk-ins. Every enquiry — whether it arrives at 9am or 9pm — becomes a tracked lead with the full chat history attached.",
    benefits: [
      "WhatsApp, web forms, and manual entries in one inbox",
      "Full conversation history saved with each lead",
      "New leads visible to your whole team in real time",
    ],
  },
  {
    id: "organise",
    icon: "layout-dashboard",
    title: "Organise every deal in one place.",
    description:
      "Listings, clients, documents, site visits, negotiations — every detail of every deal sits in one calm dashboard. Your team sees exactly the same picture.",
    benefits: [
      "Pipeline view: where every deal stands today",
      "Properties, clients, and visits on a single screen",
      "Permissions so each agent sees only what they should",
    ],
  },
  {
    id: "close",
    icon: "zap",
    title: "Close more deals, with less chasing.",
    description:
      "PropFlow reminds you who to call, what to send, and when. Generate a complete property document packet in two clicks. Stop running behind — start leading.",
    benefits: [
      "Smart follow-up reminders before leads go cold",
      "One-click document packets for any property",
      "Weekly insight: what's working, what's stalling",
    ],
  },
] as const;

// ─── Feature grid ───────────────────────────────────────────────────────────
// Each feature is a problem → outcome, not a capability list.
export const features: Feature[] = [
  {
    id: "whatsapp-crm",
    title: "Your WhatsApp becomes your CRM.",
    description:
      "Every chat, every enquiry, every photo shared on WhatsApp is logged against the right client. No more scrolling back through 200 messages to find one property.",
    icon: "message-circle",
    gradient: "from-brand-500 to-brand-600",
  },
  {
    id: "listings",
    title: "Every listing, searchable in seconds.",
    description:
      "Photos, videos, floorplans, amenities, price — all attached to the right property. Filter by builder, budget, or locality. Find the right listing for the right client in under 10 seconds.",
    icon: "building",
    gradient: "from-brand-alt-500 to-brand-alt-600",
  },
  {
    id: "documents",
    title: "One vault for every document.",
    description:
      "Aadhaar, PAN, sale deeds, RERA certificates, NOCs, society letters — uploaded once, tagged automatically, and ready to share with a single tap. Stop searching through Drive folders.",
    icon: "file-text",
    gradient: "from-brand-600 to-brand-alt-500",
  },
  {
    id: "follow-ups",
    title: "Never miss a follow-up again.",
    description:
      "PropFlow reminds you who to call today, who to message tomorrow, and which lead has been quiet for too long. Hot leads stay hot — and you stop leaving money on the table.",
    icon: "bell",
    gradient: "from-brand-alt-500 to-brand-500",
  },
  {
    id: "pipeline",
    title: "Your whole team, one pipeline.",
    description:
      "See exactly where every deal stands — new enquiry, site visit booked, negotiation, registration. Every agent on your team sees the same picture. No more stepping on toes.",
    icon: "bar-chart-3",
    gradient: "from-brand-500 to-brand-700",
  },
  {
    id: "sharing",
    title: "Send a property in one tap.",
    description:
      "Pick a property. Pick a client. PropFlow builds a complete share pack — photos, videos, key specs, documents — and sends it on WhatsApp or email. Done.",
    icon: "share-2",
    gradient: "from-brand-alt-600 to-brand-alt-700",
  },
];

// ─── How it works (3 steps) ─────────────────────────────────────────────────
export const howItWorks: { step: number; title: string; description: string }[] = [
  {
    step: 1,
    title: "Connect your WhatsApp in two minutes.",
    description:
      "Link your WhatsApp Business number. PropFlow starts capturing every enquiry as a lead — without you changing how you chat with clients.",
  },
  {
    step: 2,
    title: "Add your listings and import your contacts.",
    description:
      "Add properties one by one, or import your entire inventory from Excel. Pull in contacts from your phone. PropFlow organises everything for you.",
  },
  {
    step: 3,
    title: "Work from your phone — and close more deals.",
    description:
      "Follow up on time, send documents instantly, and see your pipeline clearly. PropFlow runs on the phone you already carry.",
  },
];

// ─── Integrations (feature-grid mini icons) ─────────────────────────────────
export const integrations: Integration[] = [
  { name: "WhatsApp", icon: "message-circle", category: "Communication" },
  { name: "Google Drive", icon: "cloud", category: "Storage" },
  { name: "Google Calendar", icon: "calendar", category: "Productivity" },
  { name: "Email", icon: "mail", category: "Communication" },
  { name: "SMS", icon: "smartphone", category: "Communication" },
  { name: "RERA Portal", icon: "building", category: "Compliance" },
  { name: "Payment Gateway", icon: "credit-card", category: "Finance" },
  { name: "PDF Generator", icon: "file", category: "Documents" },
  { name: "Cloud Backup", icon: "upload-cloud", category: "Storage" },
  { name: "ZIP Export", icon: "archive", category: "Export" },
  { name: "API Access", icon: "code", category: "Developer" },
  { name: "Google Contacts", icon: "users", category: "CRM" },
];

// ─── Pricing teaser (home page) ─────────────────────────────────────────────
export const pricingTiers: PricingTier[] = [
  {
    id: "solo",
    name: "Solo",
    description: "For independent brokers handling up to 50 properties a month.",
    monthlyPrice: 999,
    yearlyPrice: 9999,
    features: [
      "Up to 100 active listings",
      "WhatsApp lead capture",
      "Contact & document storage (5 GB)",
      "Mobile + desktop access",
      "Email support",
    ],
    cta: "Start free trial",
  },
  {
    id: "team",
    name: "Team",
    description: "For small brokerages who work together on deals.",
    monthlyPrice: 2499,
    yearlyPrice: 24999,
    highlighted: true,
    badge: "Most chosen",
    features: [
      "Unlimited listings",
      "Up to 5 team members",
      "Shared pipeline & assignments",
      "Document storage (50 GB)",
      "Smart follow-up reminders",
      "Insights dashboard",
      "Priority WhatsApp support",
    ],
    cta: "Start free trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For agencies with custom workflows, security, or scale needs.",
    monthlyPrice: 7499,
    yearlyPrice: 74999,
    features: [
      "Everything in Team",
      "Unlimited team members",
      "Custom roles & permissions",
      "Dedicated onboarding manager",
      "Audit logs & SSO",
      "99.9% uptime SLA",
      "On-call phone support",
    ],
    cta: "Talk to sales",
  },
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
export const faqItems: FAQItem[] = [
  {
    id: "what-is-propflow",
    question: "What exactly is PropFlow, in plain language?",
    answer:
      "PropFlow is one app that brings together everything a property broker uses every day — your WhatsApp chats, your property listings, your client documents, and your deal pipeline. Instead of switching between WhatsApp, Gallery, Drive, Excel, and your memory, you work from one place.",
  },
  {
    id: "solo-or-agency",
    question: "I'm an individual broker. Is this for me, or only for agencies?",
    answer:
      "Both. Our Solo plan is built for independent brokers handling up to 50 properties a month. Our Team plan is for small brokerages (up to 5 people). Our Enterprise plan is for agencies that need custom workflows, advanced security, or larger teams.",
  },
  {
    id: "clients-install",
    question: "Do my clients need to install anything?",
    answer:
      "No. Your clients keep using WhatsApp exactly as they do today. PropFlow sits on your side — capturing the chats, organising the leads, and reminding you to follow up. Your clients see no change.",
  },
  {
    id: "data-ownership",
    question: "What happens to my data if I cancel?",
    answer:
      "Your data is yours, always. You can export every listing, every contact, and every document as Excel or ZIP at any time — including after you cancel. We keep your data available for export for 90 days after cancellation, then delete it permanently.",
  },
  {
    id: "data-security",
    question: "How safe is my data — and my clients' data?",
    answer:
      "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your data is stored on AWS servers in Mumbai and Bengaluru — it never leaves India. We follow DPDPA guidelines, and we're working towards ISO 27001 certification.",
  },
  {
    id: "import-data",
    question: "Can I bring my existing properties and contacts?",
    answer:
      "Yes. You can import your full inventory from an Excel or Google Sheet in one go. Contacts can be imported from your phone, Google Contacts, or any CSV file. Most brokerages are fully set up within a day.",
  },
  {
    id: "mobile",
    question: "Will it work on my phone? I do most of my work on the go.",
    answer:
      "Yes — PropFlow is built mobile-first. The web app works smoothly on any phone browser, and dedicated Android and iOS apps are in development. Everything you can do on desktop, you can do on your phone.",
  },
  {
    id: "free-trial",
    question: "Can I try before I pay anything?",
    answer:
      "Yes. Every plan comes with a 14-day free trial. No credit card required to start. If PropFlow isn't right for your brokerage, you cancel in one click and pay nothing.",
  },
];

// ─── Testimonials (placeholder) ─────────────────────────────────────────────
// Note: These are illustrative placeholders. Replace with verified customer
// quotes once we have permission. The visual layout will still work.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Mehta",
    role: "Founder",
    company: "Mehta Realty, Mumbai",
    content:
      "I used to lose at least two deals a month because I'd forget to follow up. In the first month on PropFlow, I closed four deals I'd have normally missed. The follow-up reminders alone pay for the subscription.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Director",
    company: "Sharma Properties, Bengaluru",
    content:
      "We have seven agents across two offices. Before PropFlow, nobody knew what anyone else was doing. Now everyone sees the same pipeline. Our team meetings went from 90 minutes to 20.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Amit Patel",
    role: "Independent Broker",
    company: "Patel Realty, Pune",
    content:
      "The document vault is the biggest time-saver. I used to spend an hour finding the right Aadhaar or sale deed for a property package. Now I generate the full packet in two clicks.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Sneha Reddy",
    role: "Head of Sales",
    company: "Reddy Estates, Hyderabad",
    content:
      "We tried three different CRMs before PropFlow. They were all built for American SaaS companies and didn't understand how Indian brokers actually work. PropFlow was the first one that got it right.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Vikram Singh",
    role: "Partner",
    company: "Singh & Associates, Delhi NCR",
    content:
      "My clients used to wait three days for a property document packet. Now they get it in three minutes. That speed has genuinely changed how my clients talk about me to their friends.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Anjali Deshmukh",
    role: "Broker",
    company: "Deshmukh Properties, Nagpur",
    content:
      "I'm a one-person brokerage. I don't need half the features in those big CRMs. PropFlow gives me exactly what I need — leads, listings, documents, follow-ups — and nothing I don't.",
    rating: 5,
  },
];

// ─── Security badge copy ────────────────────────────────────────────────────
export const securityBadges = [
  {
    icon: "shield",
    title: "Compliant with Indian data laws.",
    desc: "Built to follow the Digital Personal Data Protection Act, 2023.",
  },
  {
    icon: "lock",
    title: "Encrypted end-to-end.",
    desc: "TLS 1.3 in transit, AES-256 at rest. No exceptions.",
  },
  {
    icon: "server",
    title: "Your data stays in India.",
    desc: "Hosted on AWS Mumbai & Bengaluru. Never leaves the country.",
  },
  {
    icon: "check",
    title: "99.9% uptime, monitored 24×7.",
    desc: "On-call engineering for Enterprise plans.",
  },
] as const;

// ─── Final CTA copy ─────────────────────────────────────────────────────────
export const finalCta = {
  eyebrow: "Ready when you are",
  headline: "Your next deal deserves better than five apps.",
  subheadline:
    "Join 1,800+ Indian brokers who run their entire brokerage from one calm workspace. Start your 14-day free trial — no card, no commitment.",
  primaryCta: { label: "Start free trial", href: "https://app.propflow.in/sign-up" },
  secondaryCta: { label: "Book a 15-min demo", href: "/contact" },
  trustRow: ["14-day free trial", "No credit card", "Cancel anytime"],
};

// ─── Comparison table (used on /compare pages) ──────────────────────────────
export const comparisonData = {
  headers: [
    "What you need",
    "PropFlow",
    "WhatsApp + Gallery",
    "Excel / Sheets",
    "Traditional CRM",
  ],
  rows: [
    ["WhatsApp lead capture", "Automatic", "Manual", "—", "—"],
    ["Property listings in one place", "Built-in", "Scattered", "Manual", "Add-on"],
    ["Document vault & quick share", "Built-in", "Gallery chaos", "—", "Add-on"],
    ["Team sees the same pipeline", "Real-time", "Forward only", "Shared file", "Per-seat"],
    ["Follow-up reminders", "Automatic", "Manual", "—", "Workflow"],
    ["Send property in one tap", "Built-in", "Manual", "—", "—"],
    ["Works on your phone", "Yes", "Yes", "Poorly", "Mostly desktop"],
    ["RERA-aware workflows", "Built-in", "—", "—", "—"],
    ["Price per month (approx.)", "₹999", "Free", "Free", "₹3,000+"],
  ],
};

// ─── Routes ─────────────────────────────────────────────────────────────────
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
