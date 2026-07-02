import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-500/10 text-brand-600 dark:text-brand-400",
        secondary:
          "border-transparent bg-surface-secondary text-fg-secondary",
        success:
          "border-transparent bg-success-bg text-success",
        warning:
          "border-transparent bg-warning-bg text-warning",
        error:
          "border-transparent bg-error-bg text-error",
        outline:
          "text-fg-secondary",
        gradient:
          "border-transparent bg-gradient-to-r from-brand-500 to-brand-alt-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
