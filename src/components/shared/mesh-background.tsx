import { cn } from "@/lib/utils";

export type MeshVariant = "hero" | "section" | "subtle" | "soft";

interface MeshBackgroundProps {
  /**
   * The intensity / scale of the mesh.
   * - `hero`   — full cinematic radial mesh, used in hero & major page headers
   * - `section`— medium opacity mesh accent for content sections
   * - `subtle` — low opacity wash, fits behind dense content
   * - `soft`   — symmetric top/bottom fade, ideal for dividers
   */
  variant?: MeshVariant;
  /** When true, applies a slow 24s drift animation. Respects reduced-motion automatically. */
  animated?: boolean;
  /** Adds a film-grain SVG overlay (subtle noise texture). */
  grain?: boolean;
  className?: string;
}

/**
 * Decorative mesh-gradient backdrop. Pure CSS — no client JS.
 * Sits absolutely behind content (parent must be `relative overflow-hidden`).
 */
export function MeshBackground({
  variant = "section",
  animated = false,
  grain = false,
  className,
}: MeshBackgroundProps) {
  const variantClass =
    variant === "hero"
      ? "mesh-hero"
      : variant === "section"
        ? "mesh-section"
        : variant === "soft"
          ? "mesh-section-soft"
          : "mesh-gradient";

  return (
    <div
      aria-hidden="true"
      className={cn(
        variantClass,
        animated && "mesh-animated",
        className
      )}
    >
      {grain && <div className="grain-overlay" />}
    </div>
  );
}
