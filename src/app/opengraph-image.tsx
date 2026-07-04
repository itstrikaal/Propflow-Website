import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function Image() {
  // Per-route title override (e.g. for dynamic [slug] pages) can be wired
  // here later by reading the params Next.js passes to route handlers. For
  // now every route reuses the site tagline.
  const title = `${siteConfig.name} — ${siteConfig.tagline}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #0f172a 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              color: "white",
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "800px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div style={{ display: "flex" }}>🇮🇳 Made in India, for India</div>
          <div style={{ display: "flex" }}>•</div>
          <div style={{ display: "flex" }}>Trusted by 1,800+ brokers</div>
          <div style={{ display: "flex" }}>•</div>
          <div style={{ display: "flex" }}>{siteConfig.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
