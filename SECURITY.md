# Security Policy

## Reporting a vulnerability

If you discover a security issue in the PropFlow website, please report it privately.

**Email:** security@propflow.in

Please **do not** file a public GitHub issue for security problems. We will acknowledge your report within 2 business days and provide a remediation timeline within 5 business days.

When reporting, please include:

- A clear description of the issue and its impact
- Steps to reproduce
- The affected URL(s) and, if applicable, the commit / version
- Any proof-of-concept code (as long as it stays within scope)

We follow [coordinated disclosure](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure) — please give us a reasonable window (typically 90 days) before any public disclosure.

## Scope

In scope:

- `propflow.in` and all subdomains
- The website source in this repository
- The contact form (`/api/contact`)

Out of scope:

- The PropFlow **application** (`app.propflow.in`) — that has its own program
- Social-engineering or phishing against PropFlow staff
- Denial-of-service attacks
- Automated scanner output without a working PoC
- Issues that only affect outdated browsers (< 1% of traffic)

## What we promise

- We will keep your report confidential.
- We will credit you in our hall-of-fame (with your permission) once the fix ships.
- We will not pursue legal action against researchers who act in good faith and within scope.

## Our security posture

For full details on how we protect customer data (encryption, data residency, compliance), see <https://propflow.in/security>.
