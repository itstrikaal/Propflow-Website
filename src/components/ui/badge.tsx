import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-surface-secondary text-fg-secondary border-border",
        secondary: "bg-surface-tertiary text-fg-tertiary border-transparent",
        success: "bg-success-bg text-success border-transparent",
        warning: "bg-warning-bg text-warning border-transparent",
        error: "bg-error-bg text-error border-transparent",
        outline: "text-fg-secondary border-border bg-transparent",
        gradient:
          "from-accent-600 to-accent-violet-600 border-transparent bg-gradient-to-r text-white",
        accent:
          "bg-accent-50 text-accent-700 border-accent-200/60 dark:bg-accent-900/20 dark:text-accent-300 dark:border-accent-800/40",
        inverted:
          "bg-fg text-bg border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
