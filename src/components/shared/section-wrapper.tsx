import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { MeshBackground, type MeshVariant } from "@/components/shared/mesh-background";
import { SectionHeading } from "@/components/shared/section-heading";

const sectionVariants = cva("relative overflow-hidden", {
  variants: {
    variant: {
      light: "bg-bg",
      dark: "bg-bg-secondary",
      muted: "bg-surface-secondary",
      transparent: "bg-transparent",
      brand: "bg-mesh-base",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

interface SectionWrapperProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "title">, VariantProps<typeof sectionVariants> {
  id?: string;
  label?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** When true, the title renders in serif (display) font. */
  serifTitle?: boolean;
  /** Heading alignment override */
  headingAlign?: "left" | "center";
  /** Optional mesh background behind the section content */
  mesh?: MeshVariant | false;
  /** Animate the mesh drift */
  meshAnimated?: boolean;
  /** Add film-grain to the mesh */
  meshGrain?: boolean;
  /** Inner container max-width */
  containerClass?: string;
}

/**
 * Universal section wrapper. Renders a `<section>` with optional mesh
 * background and a standardised heading block (eyebrow + title + description).
 */
export function SectionWrapper({
  id,
  label,
  title,
  description,
  variant,
  className,
  containerClass,
  mesh = false,
  meshAnimated = false,
  meshGrain = false,
  serifTitle,
  headingAlign,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", sectionVariants({ variant }), className)}
      aria-label={typeof title === "string" ? title : (label ?? undefined)}
      {...props}
    >
      {mesh && (
        <MeshBackground
          variant={mesh}
          animated={meshAnimated}
          grain={meshGrain}
        />
      )}

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClass
        )}
      >
        {(label || title || description) && (
          <SectionHeading
            label={label}
            title={title}
            description={description}
            align={headingAlign ?? "center"}
            serifTitle={serifTitle}
          />
        )}
        {children}
      </div>
    </section>
  );
}
