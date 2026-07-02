import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

// Blog post data (in production, load from MDX or CMS)
const posts: Record<string, { title: string; content: string[]; date: string; author: string; readTime: string; category: string }> = {
  "why-brokers-need-a-crm": {
    title: "Why Every Indian Property Broker Needs a CRM (And Why WhatsApp Alone Isn't Enough)",
    date: "June 28, 2026",
    author: "PropFlow Team",
    readTime: "5 min read",
    category: "Guides",
    content: [
      "If you're a property broker in India, your phone is probably running WhatsApp, Gallery, Google Drive, your contacts app, and maybe a notes app — all at the same time. You're juggling five apps to manage one deal.",
      "It works, but barely. You lose leads in the chat history. You can't find the right photo. You forget to follow up. And when a client asks 'What was that 2BHK in Wakad?', you scroll through weeks of messages hoping to find it.",
      "This is why you need a CRM — a Customer Relationship Management system built specifically for real estate. Not a generic CRM. One that understands how Indian brokers work.",
      "A good real estate CRM does what WhatsApp alone can't:",
      "• Automatically captures every lead — even the ones who message you at 2 AM",
      "• Organises properties, photos, and documents in one place",
      "• Tracks every interaction with every client",
      "• Sends automated follow-up reminders so you never drop a lead",
      "• Generates professional property packages in seconds",
      "• Gives your team visibility into every deal",
      "PropFlow was built specifically for this. It connects to your WhatsApp, organises everything automatically, and gives you one place to run your entire brokerage.",
      "WhatsApp is the best messaging app. But your brokerage needs more than messaging. It needs a system.",
    ],
  },
  "whatsapp-for-real-estate": {
    title: "The Broker's Guide to WhatsApp for Real Estate in 2026",
    date: "June 20, 2026",
    author: "PropFlow Team",
    readTime: "8 min read",
    category: "WhatsApp",
    content: [
      "WhatsApp has become the backbone of Indian real estate. Brokers use it for everything — finding leads, sharing property photos, negotiating deals, and even closing transactions.",
      "But using WhatsApp without a system creates chaos. Here's how to turn WhatsApp into a deal-closing machine.",
      "1. Separate Personal from Professional: Create a WhatsApp Business account dedicated to your brokerage. This keeps client conversations separate from family chats.",
      "2. Use Labels and Categories: Tag conversations by status — New Lead, Site Visit Scheduled, Negotiation, Closed. This helps you find any conversation instantly.",
      "3. Never Lose a Lead Again: When a prospect messages you about a property, capture their details immediately. Name, number, budget, preferred location. Don't trust your memory.",
      "4. Share Property Packages Professionally: Instead of sending 15 photos individually, create a single package with photos, floor plan, location, price, and documents. One tap to share everything.",
      "5. Follow Up Systematically: Most brokers lose deals because they forget to follow up. Set reminders to check in with every lead at the right time.",
      "6. Track Everything: Who saw which property? What did they like? What was their objection? If you're tracking this in your head, you're losing deals.",
      "PropFlow automates all of this. It connects to your WhatsApp, captures leads automatically, organises everything, and sends reminders so you never drop the ball.",
    ],
  },
  "rera-compliance-digital": {
    title: "RERA Compliance in the Digital Age: What Every Broker Must Know",
    date: "June 15, 2026",
    author: "PropFlow Team",
    readTime: "6 min read",
    category: "Compliance",
    content: [
      "RERA (Real Estate Regulatory Authority) has transformed the Indian real estate market. For brokers, compliance isn't optional — it's essential for building trust and avoiding legal issues.",
      "Digital documentation is now a key part of RERA compliance. Here's what every broker should know:",
      "1. Document Everything: Every property listing, every client interaction, every agreement should be documented digitally. RERA requires transparency, and digital records provide it.",
      "2. Secure Storage: Client documents — Aadhaar, PAN, income proofs, sale agreements — must be stored securely. Digital platforms with encryption ensure compliance while protecting sensitive data.",
      "3. Track the Paper Trail: From initial inquiry to registration, every step of a property deal involves paperwork. A digital system tracks this trail automatically.",
      "4. Client Communication Records: RERA emphasises clear communication. Digital records of all client communications provide proof of transparency.",
      "5. Property Documentation: Complete property details — approvals, title deeds, completion status — must be available. Digital platforms make this accessible instantly.",
      "PropFlow helps brokers maintain RERA compliance by organising all documents digitally, maintaining complete audit trails, and ensuring data is stored securely in Indian data centres.",
      "Compliance isn't just about avoiding penalties — it's about building trust with clients. And in Indian real estate, trust is everything.",
    ],
  },
  "ai-lead-scoring-real-estate": {
    title: "AI Lead Scoring for Real Estate: Stop Wasting Time on Cold Leads",
    date: "June 10, 2026",
    author: "PropFlow Team",
    readTime: "7 min read",
    category: "AI & Automation",
    content: [
      "Every broker knows the feeling: you spend an hour showing a property, only to find out the client was 'just looking'. Meanwhile, a serious buyer messaged you two days ago and you forgot to reply.",
      "This is where AI lead scoring changes everything.",
      "What is AI Lead Scoring? It's an AI system that analyses every lead and assigns a score based on how likely they are to close. The AI looks at factors like: budget clarity, property preferences, response time, number of follow-ups, and past behaviour patterns.",
      "Instead of treating every lead equally, you focus on the ones most likely to convert.",
      "How PropFlow's AI does it:",
      "• Analyses WhatsApp conversations to identify buying intent",
      "• Tracks property viewing history and preferences",
      "• Considers budget range and location specificity",
      "• Factors in response time and engagement level",
      "• Learns from past deals to improve future scoring",
      "The result? Brokers using PropFlow report closing 40% more deals because they spend time on the right leads.",
      "AI isn't replacing brokers — it's making them more effective. Instead of guessing who to follow up with, you know exactly who needs your attention right now.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.content[0]?.slice(0, 160) || "",
    path: `/blog/${params.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="flex items-center gap-3 text-xs text-fg-muted">
          <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-medium text-brand-500">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-fg sm:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm text-fg-muted">
          <User className="h-4 w-4" />
          {post.author}
        </div>

        <article className="mt-10 space-y-5 text-base leading-relaxed text-fg-secondary">
          {post.content.map((paragraph, i) => {
            if (paragraph.startsWith("•")) {
              return (
                <li key={i} className="ml-5 list-disc text-fg-secondary">
                  {paragraph.replace("• ", "")}
                </li>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              return (
                <p key={i} className="font-semibold text-fg">
                  {paragraph}
                </p>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </article>
      </div>
    </section>
  );
}
