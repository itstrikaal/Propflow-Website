import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "PropFlow privacy policy — how we collect, use, and protect your data.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="section-label">Legal</span>
        <h1 className="section-title mt-2">Privacy Policy</h1>
        <p className="section-sub">Last updated: June 15, 2026</p>

        <div className="text-fg-secondary mt-10 space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-fg text-lg font-semibold">1. Introduction</h2>
            <p className="mt-2">
              PropFlow (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
              committed to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you use our
              platform and website.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">2. Information We Collect</h2>
            <p className="mt-2">
              We collect information that you provide directly to us:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
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
            <h2 className="text-fg text-lg font-semibold">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
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
            <h2 className="text-fg text-lg font-semibold">
              4. Data Storage and Security
            </h2>
            <p className="mt-2">
              Your data is stored on secure servers located in India (AWS Mumbai and
              Bangalore regions). We implement industry-standard security measures
              including encryption in transit (TLS 1.3) and at rest (AES-256), regular
              security audits, and strict access controls.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">5. Data Retention</h2>
            <p className="mt-2">
              We retain your information for as long as your account is active or as
              needed to provide you services. You can request deletion of your data at any
              time by contacting us. Upon account deletion, all data is permanently
              removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">6. Your Rights</h2>
            <p className="mt-2">
              Under Indian data protection law, you have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">7. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@propflow.in
              <br />
              Address: Koregaon Park, Pune — 411001, Maharashtra, India
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
