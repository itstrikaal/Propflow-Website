import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { contactSchema, type ContactPayload } from "@/lib/contact-schema";

// ─── Rate limiting (in-memory, per-process) ───────────────────────────────
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;
const buckets = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= MAX_REQUESTS) return false;
  hits.push(now);
  buckets.set(ip, hits);
  return true;
}

// Periodically prune the map to avoid memory growth
setInterval(() => {
  const cutoff = Date.now() - WINDOW_MS;
  for (const [ip, hits] of buckets) {
    const fresh = hits.filter((t) => t > cutoff);
    if (fresh.length === 0) buckets.delete(ip);
    else buckets.set(ip, fresh);
  }
}, WINDOW_MS).unref();

// ─── Helpers ──────────────────────────────────────────────────────────────
function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// ─── Email senders ────────────────────────────────────────────────────────
async function sendViaResend(payload: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@propflow.in";
  const from = process.env.CONTACT_FROM_EMAIL ?? "PropFlow <noreply@propflow.in>";

  if (!apiKey) return false;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        replyTo: payload.email,
        subject: `[PropFlow Contact] ${payload.name}${payload.company ? ` — ${payload.company}` : ""}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          payload.phone ? `Phone: ${payload.phone}` : null,
          payload.company ? `Company: ${payload.company}` : null,
          "",
          payload.message,
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto">
            <h2 style="margin:0 0 16px;color:#0f172a">New contact message</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:6px 0;color:#64748b">Name</td><td style="padding:6px 0;color:#0f172a"><strong>${escapeHtml(payload.name)}</strong></td></tr>
              <tr><td style="padding:6px 0;color:#64748b">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(payload.email)}" style="color:#2563eb">${escapeHtml(payload.email)}</a></td></tr>
              ${payload.phone ? `<tr><td style="padding:6px 0;color:#64748b">Phone</td><td style="padding:6px 0"><a href="tel:${escapeHtml(payload.phone)}" style="color:#2563eb">${escapeHtml(payload.phone)}</a></td></tr>` : ""}
              ${payload.company ? `<tr><td style="padding:6px 0;color:#64748b">Company</td><td style="padding:6px 0;color:#0f172a">${escapeHtml(payload.company)}</td></tr>` : ""}
            </table>
            <div style="margin-top:20px;padding:16px;border-left:3px solid #2563eb;background:#f8fafc;color:#0f172a;white-space:pre-wrap;line-height:1.6">${escapeHtml(payload.message)}</div>
            <p style="margin-top:24px;font-size:12px;color:#94a3b8">Sent from propflow.in contact form</p>
          </div>
        `,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function persistLocally(payload: ContactPayload, ip: string): Promise<void> {
  // Fallback when RESEND_API_KEY isn't configured — useful in dev/preview
  // and acts as a durable record even in prod (replace with DB later).
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "contact-messages.json");
  try {
    await fs.mkdir(dir, { recursive: true });
    let list: unknown[] = [];
    try {
      const raw = await fs.readFile(file, "utf8");
      list = JSON.parse(raw);
    } catch {
      /* first write */
    }
    list.push({
      ...payload,
      ip,
      receivedAt: new Date().toISOString(),
    });
    // Keep file from growing unbounded
    if (list.length > 1000) list = list.slice(-1000);
    await fs.writeFile(file, JSON.stringify(list, null, 2), "utf8");
  } catch {
    // Logging must never fail the request
  }
}

// ─── hCaptcha verification (optional) ─────────────────────────────────────
async function verifyCaptcha(token: string | undefined): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret) return true; // not configured → skip check
  if (!token) return false;
  try {
    const res = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }).toString(),
    });
    const json = (await res.json()) as { success?: boolean };
    return Boolean(json.success);
  } catch {
    return false;
  }
}

// ─── Route handler ────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const ip = clientIp(req);

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 }
    );
  }

  const captchaOk = await verifyCaptcha(parsed.data.hcaptcha);
  if (!captchaOk) {
    return NextResponse.json(
      { ok: false, error: "Captcha verification failed. Please try again." },
      { status: 422 }
    );
  }

  // Send via Resend if configured, otherwise persist locally.
  // Local persistence ALWAYS happens so we never lose a message in dev.
  const sent = await sendViaResend(parsed.data);
  await persistLocally(parsed.data, ip);

  if (!sent && process.env.NODE_ENV === "production") {
    // In production without Resend configured we still want to surface failure
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't deliver your message right now. Please email us directly at hello@propflow.in.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

// Reject other methods explicitly
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
