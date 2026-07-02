export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient?: string;
  image?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export interface Integration {
  name: string;
  icon: string;
  category: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  results: { metric: string; value: string }[];
  quote: string;
  author: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  image?: string;
}

export type SectionVariant = "light" | "dark" | "brand";
