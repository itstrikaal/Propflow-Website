import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "How PropFlow uses cookies and similar tracking technologies on our website.",
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <section className="section-padding bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="section-label">Legal</span>
        <h1 className="section-title mt-2">Cookie Policy</h1>
        <p className="section-sub">Last updated: June 15, 2026</p>

        <div className="text-fg-secondary mt-10 space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-fg text-lg font-semibold">1. What Are Cookies</h2>
            <p className="mt-2">
              Cookies are small text files stored on your device when you visit a website.
              They help the website remember your preferences and improve your browsing
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">2. How We Use Cookies</h2>
            <p className="mt-2">We use cookies for the following purposes:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Essential cookies:</strong> Required for the website to function
                properly (authentication, security)
              </li>
              <li>
                <strong>Preference cookies:</strong> Remember your settings (theme
                preference, language)
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help us understand how visitors use
                our website (page views, navigation patterns)
              </li>
              <li>
                <strong>Marketing cookies:</strong> Used to deliver relevant
                advertisements (only with your consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">3. Third-Party Cookies</h2>
            <p className="mt-2">
              We may use third-party services that set cookies on your device. These
              include analytics providers (PostHog, Plausible) and payment processors.
              These third parties have their own cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">4. Managing Cookies</h2>
            <p className="mt-2">
              You can manage cookie preferences through your browser settings. Most
              browsers allow you to block or delete cookies. Note that disabling essential
              cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">5. Your Choices</h2>
            <p className="mt-2">
              When you first visit our website, you will see a cookie consent banner. You
              can choose to accept all cookies or customise your preferences. You can
              change your preferences at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-fg text-lg font-semibold">6. Contact</h2>
            <p className="mt-2">
              If you have questions about our cookie policy, contact us at:
              <br />
              Email: privacy@propflow.in
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
