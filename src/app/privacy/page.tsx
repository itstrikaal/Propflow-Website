import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "PropFlow privacy policy — how we collect, use, and protect your data.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16"
        aria-label="Privacy Policy"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Legal</span>
          <h1 className="font-display section-title">Privacy Policy</h1>
          <p className="section-sub">Last updated: June 15, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="text-fg-secondary mx-auto max-w-3xl space-y-10 px-4 text-sm leading-relaxed sm:px-6 lg:px-8">
          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              1. Introduction
            </h2>
            <p className="mt-3">
              PropFlow (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
              committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our
              platform and website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              2. Information we collect
            </h2>
            <p className="mt-3">We collect information that you provide directly to us:</p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5">
              <li>
                Account information: name, email address, phone number, company name
              </li>
              <li>Profile information: profile photo, business details</li>
              <li>Property information: photos, documents, pricing, location data</li>
              <li>
                Client information: buyer and seller contact details, preferences,
                communication history
              </li>
              <li>
                Payment information: billing details (processed securely by our payment
                partners)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              3. How we use your information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5">
              <li>Provide, maintain, and improve our platform</li>
              <li>Process transactions and send related information</li>
              <li>
                Send technical notices, updates, security alerts, and support messages
              </li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyse trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              4. Data storage and security
            </h2>
            <p className="mt-3">
              Your data is stored on secure servers located in India (AWS Mumbai and
              Bangalore regions). We implement industry-standard security measures
              including encryption in transit (TLS 1.3) and at rest (AES-256), regular
              security audits, and strict access controls.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              5. Data retention
            </h2>
            <p className="mt-3">
              We retain your information for as long as your account is active or as
              needed to provide you services. You can request deletion of your data at any
              time by contacting us. Upon account deletion, all data is permanently
              removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              6. Your rights
            </h2>
            <p className="mt-3">
              Under Indian data protection law, you have the right to:
            </p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              7. Contact us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@propflow.in
              <br />
              Address: Koregaon Park, Pune — 411001, Maharashtra, India
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
