import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

// Warm-neutral palette to match the redesigned site. Was previously using
// the old dark/blue/violet brand gradient which clashed with the monochrome
// mesh theme.
const PALETTE = {
  bgFrom: "#fafaf9",
  bgTo: "#f5efe6",
  fg: "#1c1917",
  fgSecondary: "#44403c",
  fgMuted: "#78716c",
  surface: "#ffffff",
  accent: "#1c1917",
  glow1: "rgba(254, 215, 170, 0.45)", // warm peach
  glow2: "rgba(231, 229, 228, 0.5)", // stone
} as const;

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
          background: `linear-gradient(135deg, ${PALETTE.bgFrom} 0%, ${PALETTE.bgTo} 100%)`,
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: PALETTE.fg,
          position: "relative",
        }}
      >
        {/* Background glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            background: `radial-gradient(circle, ${PALETTE.glow1} 0%, transparent 70%)`,
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
            background: `radial-gradient(circle, ${PALETTE.glow2} 0%, transparent 70%)`,
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
              background: `linear-gradient(135deg, ${PALETTE.fg} 0%, ${PALETTE.fgSecondary} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              color: PALETTE.surface,
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: PALETTE.fg,
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
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
              display: "flex",
              color: PALETTE.fg,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: PALETTE.fgMuted,
              maxWidth: "820px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* Trust row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            fontSize: "18px",
            color: PALETTE.fgSecondary,
          }}
        >
          <div style={{ display: "flex" }}>Made in India, for India</div>
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
