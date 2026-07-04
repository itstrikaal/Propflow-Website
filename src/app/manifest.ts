import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    // Updated to match the redesigned monochrome palette (warm-neutral light
    // + graphite dark). Previously hardcoded to the old brand-blue theme
    // color which conflicted with the new aesthetic.
    background_color: "#fafaf9",
    theme_color: "#1c1917",
    // "any" because the site is now locked to a 1440px desktop viewport —
    // a fixed portrait/landscape hint doesn't apply.
    orientation: "any",
    scope: "/",
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity", "utilities"],
  };
}
