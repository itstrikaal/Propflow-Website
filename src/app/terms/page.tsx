import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "PropFlow terms of service — the legal agreement between you and PropFlow.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="section-label">Legal</span>
        <h1 className="section-title mt-2">Terms of Service</h1>
        <p className="section-sub">Last updated: June 15, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-fg-secondary">
          <section>
            <h2 className="text-lg font-semibold text-fg">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using PropFlow (&ldquo;the Platform&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">2. Description of Service</h2>
            <p className="mt-2">
              PropFlow provides a property management platform designed for Indian real estate professionals. The Platform includes tools for lead management, property listing, document management, WhatsApp integration, analytics, and team collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">3. User Accounts</h2>
            <p className="mt-2">You are responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorised use</li>
              <li>Providing accurate and complete information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">4. Acceptable Use</h2>
            <p className="mt-2">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Use the Platform for any unlawful purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or harmful code</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Use the Platform to spam or harass others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">5. Payment and Billing</h2>
            <p className="mt-2">
              Paid plans are billed in advance on a monthly or annual basis. All prices are in Indian Rupees (INR) plus applicable taxes. You can cancel your subscription at any time. Upon cancellation, you retain access until the end of your billing period.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">6. Limitation of Liability</h2>
            <p className="mt-2">
              PropFlow is provided &ldquo;as is&rdquo; without warranty of any kind. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">7. Changes to Terms</h2>
            <p className="mt-2">
              We reserve the right to modify these terms at any time. We will notify users of material changes via email or through the Platform. Continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">8. Governing Law</h2>
            <p className="mt-2">
              These terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-fg">9. Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact us at:
              <br />
              Email: legal@propflow.in
              <br />
              Address: Koregaon Park, Pune — 411001, Maharashtra, India
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
