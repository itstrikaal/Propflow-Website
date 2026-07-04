import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ring-offset-bg focus-visible:ring-fg inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 select-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Monochrome-first primary: graphite (warm black)
        default:
          "bg-fg text-bg hover:bg-fg-secondary shadow-sm hover:shadow-md active:scale-[0.97]",
        // Subtle ghost with border
        secondary:
          "bg-surface text-fg border-border hover:bg-surface-secondary border shadow-xs hover:shadow-sm active:scale-[0.97]",
        // Outlined accent (blue/violet border for emphasis)
        outline:
          "border-fg/15 text-fg bg-surface hover:bg-surface-secondary border hover:border-fg/30 active:scale-[0.97]",
        // Ghost (no border, subtle hover)
        ghost:
          "text-fg-secondary hover:text-fg hover:bg-surface-secondary active:scale-[0.97]",
        // Plain text link
        link: "text-fg underline-offset-4 hover:underline",
        // Premium gradient CTA (blue → violet)
        gradient:
          "from-accent-600 to-accent-violet-600 hover:from-accent-700 hover:to-accent-violet-700 relative overflow-hidden bg-gradient-to-r text-white shadow-sm hover:shadow-lg active:scale-[0.97]",
        // WhatsApp green
        whatsapp:
          "bg-whatsapp hover:bg-whatsapp-dark text-white shadow-sm active:scale-[0.97]",
        // Inverse: light button on dark backgrounds
        inverse:
          "bg-bg text-fg hover:bg-bg-secondary border-border/10 border shadow-sm hover:shadow-md active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-5 py-2 text-sm",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        md: "h-10 rounded-xl px-5 text-sm",
        lg: "h-12 rounded-xl px-7 text-[15px]",
        xl: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10 rounded-xl",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-xl",
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
