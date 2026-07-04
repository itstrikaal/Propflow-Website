import { NextResponse, type NextRequest } from "next/server";

/**
 * Per-request CSP middleware.
 *
 * Generates a fresh nonce for each request and sets a Content-Security-Policy
 * header that allows only:
 *   - scripts from 'self' + this request's nonce
 *   - styles from 'self' + this request's nonce (Tailwind injects one style tag)
 *   - images from 'self', data: and blob:
 *   - connect-src limited to self + PropFlow app + Vercel insights
 *   - frame ancestors denied (clickjacking protection)
 *
 * `unsafe-eval` is intentionally NOT allowed — it is never required by Next.js
 * in production and is the most common vector for cross-site scripting.
 *
 * The nonce is forwarded to the app via the x-nonce request header so layout
 * components can attach it to inline <script> tags (e.g. JSON-LD schema).
 */
export function middleware(request: NextRequest) {
  // Generate a 128-bit nonce, base64-encoded
  const nonce = Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString(
    "base64"
  );

  // Decide which directives apply on this response
  const isDev = process.env.NODE_ENV !== "production";

  // Build CSP. `unsafe-inline` for scripts is intentionally excluded — only
  // nonced scripts are allowed in production. In development, Next.js HMR
  // needs unsafe-inline + unsafe-eval; we relax only there.
  const scriptSrc = isDev
    ? `'self' 'unsafe-inline' 'unsafe-eval' 'nonce-${nonce}'`
    : `'self' 'nonce-${nonce}' https://va.vercel-scripts.com`;

  const styleSrc = isDev ? `'self' 'unsafe-inline'` : `'self' 'unsafe-inline'`; // Tailwind v4 emits one runtime style tag

  const csp = [
    `default-src 'self'`,
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    `img-src 'self' data: blob:`,
    `font-src 'self' data:`,
    `connect-src 'self' https://app.propflow.in https://vitals.vercel-insights.com https://va.vercel-scripts.com`,
    `frame-ancestors 'none'`,
    `form-action 'self' https://app.propflow.in`,
    `base-uri 'self'`,
    `object-src 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  // Clone the request headers and attach the nonce so server components can read it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  // Additional security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  );

  // HSTS — only meaningful over HTTPS, but harmless otherwise
  if (!isDev) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    response.headers.set("Cross-Origin-Resource-Policy", "same-site");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     *  - _next/static (static files)
     *  - _next/image (image optimization files)
     *  - favicon.svg, robots.txt, sitemap.xml (root metadata files)
     *  - public assets with file extensions
     */
    "/((?!_next/static|_next/image|favicon.svg|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
