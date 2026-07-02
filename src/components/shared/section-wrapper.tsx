import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionVariants = cva("section-padding", {
  variants: {
    variant: {
      light: "bg-bg",
      dark: "bg-bg-secondary",
      brand: "bg-gradient-to-b from-brand-500/5 to-brand-alt-500/5",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  containerClass?: string;
}

export function SectionWrapper({
  id,
  label,
  title,
  description,
  variant,
  className,
  containerClass,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(sectionVariants({ variant }), className)}
      aria-label={title || label}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", containerClass)}>
        {(label || title || description) && (
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            {label && (
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-500">
                {label}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-fg-tertiary sm:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
