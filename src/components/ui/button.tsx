import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ring-offset-bg focus-visible:ring-brand-500 inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-500 hover:bg-brand-600 text-white shadow-md hover:shadow-lg active:scale-[0.97]",
        secondary:
          "bg-surface-secondary text-fg border-border hover:bg-surface-tertiary border active:scale-[0.97]",
        outline:
          "border-brand-500 text-brand-500 hover:bg-brand-500 border bg-transparent hover:text-white active:scale-[0.97]",
        ghost:
          "text-fg-secondary hover:text-fg hover:bg-surface-secondary active:scale-[0.97]",
        link: "text-brand-500 underline-offset-4 hover:underline",
        gradient:
          "from-brand-500 to-brand-alt-500 relative overflow-hidden bg-gradient-to-r text-white shadow-md before:absolute before:inset-0 before:bg-white/0 before:transition-colors hover:opacity-90 hover:shadow-lg hover:before:bg-white/10 active:scale-[0.97]",
        whatsapp:
          "bg-whatsapp hover:bg-whatsapp-dark text-white shadow-md active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
