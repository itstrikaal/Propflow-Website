import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { Briefcase, MapPin, Clock, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Join PropFlow and help build the operating system for Indian real estate. We're hiring engineers, designers, and real estate enthusiasts.",
  path: "/careers",
});

const positions = [
  {
    title: "Senior full-stack engineer",
    location: "Pune / Remote",
    type: "Full-time",
    department: "Engineering",
    description:
      "Build the core product — from WhatsApp integration to AI features. You'll own significant parts of the stack.",
  },
  {
    title: "Product designer",
    location: "Pune / Remote",
    type: "Full-time",
    department: "Design",
    description:
      "Design the future of real estate software. Create intuitive experiences that Indian brokers love to use every day.",
  },
  {
    title: "Customer success lead",
    location: "Pune",
    type: "Full-time",
    department: "Customer Success",
    description:
      "Help brokers succeed with PropFlow. You'll be their guide, advocate, and voice inside our product team.",
  },
  {
    title: "Real estate partnerships manager",
    location: "Mumbai / Pune",
    type: "Full-time",
    department: "Growth",
    description:
      "Build relationships with broker associations, builder partners, and real estate networks across India.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        id="ld-careers-page"
        schema={[
          webPageSchema({
            title: "Careers at PropFlow",
            description: "Join PropFlow and help build the operating system for Indian real estate.",
            path: "/careers",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }]),
        ]}
      />

      <section
        className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20"
        aria-label="Careers"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Careers</span>
          <h1 className="font-display section-title">
            Help us build the future
            <br />
            <span className="text-fg-tertiary">of Indian real estate.</span>
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            We&apos;re a small team with a big mission — build the operating system for a
            million Indian property brokers.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <div className="border-border bg-surface-secondary mx-auto flex h-12 w-12 items-center justify-center rounded-xl border">
              <Heart className="text-fg h-5 w-5" />
            </div>
            <h2 className="font-display text-fg mt-5 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
              Why join PropFlow?
            </h2>
            <p className="text-fg-tertiary mt-4 max-w-2xl mx-auto text-sm leading-relaxed sm:text-base">
              We&apos;re tackling a massive problem with a small, focused team.
              You&apos;ll own real responsibilities, work with smart people who care, and
              see your impact on millions of brokers.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-display text-fg text-xl font-semibold tracking-[-0.022em]">
              Open positions
            </h2>
            <p className="text-fg-tertiary mt-1 text-sm">
              {positions.length} position{positions.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="space-y-4">
            {positions.map((role) => (
              <article
                key={role.title}
                className="group border-border bg-surface hover:border-fg/20 flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:shadow-md sm:flex-row sm:items-start sm:justify-between sm:p-8"
              >
                <div className="flex-1">
                  <h3 className="text-fg text-lg font-semibold tracking-[-0.022em]">
                    {role.title}
                  </h3>
                  <div className="text-fg-muted mt-2 flex flex-wrap gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {role.type}
                    </span>
                  </div>
                  <p className="text-fg-tertiary mt-3 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group/btn shrink-0 gap-1.5"
                  >
                    Apply
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-fg-muted text-sm">
              Don&apos;t see a role that fits? We&apos;re always looking for talented
              people.
            </p>
            <Link href="/contact">
              <Button variant="ghost" className="mt-2 gap-2">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
