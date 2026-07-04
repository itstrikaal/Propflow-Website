import { createMetadata } from "@/lib/metadata";
import { MeshBackground } from "@/components/shared/mesh-background";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "How PropFlow uses cookies and similar tracking technologies on our website.",
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16"
        aria-label="Cookie Policy"
      >
        <MeshBackground variant="hero" grain />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="section-label">Legal</span>
          <h1 className="font-display section-title">Cookie Policy</h1>
          <p className="section-sub">Last updated: June 15, 2026</p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="text-fg-secondary mx-auto max-w-3xl space-y-10 px-4 text-sm leading-relaxed sm:px-6 lg:px-8">
          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              1. What are cookies
            </h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when you visit a website.
              They help the website remember your preferences and improve your browsing
              experience.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              2. How we use cookies
            </h2>
            <p className="mt-3">We use cookies for the following purposes:</p>
            <ul className="mt-3 ml-5 list-disc space-y-1.5">
              <li>
                <strong className="text-fg font-semibold">Essential cookies:</strong>{" "}
                Required for the website to function properly (authentication, security)
              </li>
              <li>
                <strong className="text-fg font-semibold">Preference cookies:</strong>{" "}
                Remember your settings (theme preference, language)
              </li>
              <li>
                <strong className="text-fg font-semibold">Analytics cookies:</strong>{" "}
                Help us understand how visitors use our website (page views, navigation
                patterns)
              </li>
              <li>
                <strong className="text-fg font-semibold">Marketing cookies:</strong>{" "}
                Used to deliver relevant advertisements (only with your consent)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              3. Third-party cookies
            </h2>
            <p className="mt-3">
              We may use third-party services that set cookies on your device. These
              include analytics providers (PostHog, Plausible) and payment processors.
              These third parties have their own cookie policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              4. Managing cookies
            </h2>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings. Most
              browsers allow you to block or delete cookies. Note that disabling essential
              cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              5. Your choices
            </h2>
            <p className="mt-3">
              When you first visit our website, you will see a cookie consent banner. You
              can choose to accept all cookies or customise your preferences. You can
              change your preferences at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-fg text-lg font-semibold tracking-[-0.022em]">
              6. Contact
            </h2>
            <p className="mt-3">
              If you have questions about our cookie policy, contact us at:
              <br />
              Email: privacy@propflow.in
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
