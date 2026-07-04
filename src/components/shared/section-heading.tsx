import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Optional eyebrow pill above the title */
  label?: string;
  /** Main heading text (supports `<span>` markup for italic accents) */
  title?: React.ReactNode;
  /** Optional supporting paragraph below the title */
  description?: React.ReactNode;
  /** Alignment of the heading block */
  align?: "left" | "center";
  /** Max-width of the text block */
  width?: "sm" | "md" | "lg" | "full";
  /** Render title as serif (display) instead of sans */
  serifTitle?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Consistent section heading used everywhere. Provides eyebrow pill, title,
 * and optional supporting paragraph in a single primitive so every section
 * matches.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  width = "md",
  serifTitle = false,
  className,
  children,
}: SectionHeadingProps) {
  const widthClass =
    width === "sm"
      ? "max-w-xl"
      : width === "md"
        ? "max-w-2xl"
        : width === "lg"
          ? "max-w-3xl"
          : "max-w-none";

  return (
    <div
      className={cn(
        widthClass,
        align === "center" && "mx-auto text-center",
        "mb-12 lg:mb-16",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "section-label",
            align === "left" ? "ml-0" : ""
          )}
        >
          {label}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            "section-title",
            serifTitle && "font-display"
          )}
        >
          {title}
        </h2>
      )}
      {description && <p className="section-sub">{description}</p>}
      {children}
    </div>
  );
}
