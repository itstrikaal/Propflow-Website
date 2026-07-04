import { CTASection } from "@/components/sections/cta";
import { createMetadata } from "@/lib/metadata";
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
    title: "Senior Full-Stack Engineer",
    location: "Pune / Remote",
    type: "Full-time",
    department: "Engineering",
    description:
      "Build the core product — from WhatsApp integration to AI features. You'll own significant parts of the stack.",
  },
  {
    title: "Product Designer",
    location: "Pune / Remote",
    type: "Full-time",
    department: "Design",
    description:
      "Design the future of real estate software. Create intuitive experiences that Indian brokers love to use every day.",
  },
  {
    title: "Customer Success Lead",
    location: "Pune",
    type: "Full-time",
    department: "Customer Success",
    description:
      "Help brokers succeed with PropFlow. You'll be their guide, advocate, and voice inside our product team.",
  },
  {
    title: "Real Estate Partnerships Manager",
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
      <section className="section-padding bg-bg">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Careers</span>
          <h1 className="section-title">
            Help us build the future of Indian real estate.
          </h1>
          <p className="section-sub mx-auto max-w-2xl">
            We&apos;re a small team with a big mission — build the operating system for a
            million Indian property brokers.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Heart className="text-brand-500 mx-auto h-8 w-8" />
            <h2 className="text-fg mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Why join PropFlow?
            </h2>
            <p className="text-fg-tertiary mt-4 text-sm leading-relaxed sm:text-base">
              We&apos;re tackling a massive problem with a small, focused team.
              You&apos;ll own real responsibilities, work with smart people who care, and
              see your impact on millions of brokers.
            </p>
          </div>

          <h2 className="text-fg text-xl font-bold">Open Positions</h2>
          <p className="text-fg-tertiary mt-2 text-sm">
            {positions.length} position{positions.length !== 1 ? "s" : ""} available
          </p>

          <div className="mt-8 space-y-4">
            {positions.map((role) => (
              <div
                key={role.title}
                className="group border-border bg-bg hover:border-brand-500/30 rounded-2xl border p-6 transition-all duration-200 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-fg text-lg font-semibold">{role.title}</h3>
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
                    <Button variant="outline" size="sm" className="shrink-0 gap-1.5">
                      Apply
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
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
