import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fresh-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[var(--touch-min)] touch-manipulation",
  {
    variants: {
      variant: {
        default:
          "bg-fresh-600 text-white shadow-soft hover:bg-fresh-700 hover:shadow-card active:scale-[0.98]",
        secondary:
          "border border-cream-300 bg-cream-100 text-earth-700 hover:bg-cream-200 active:scale-[0.98]",
        outline:
          "border border-fresh-600 bg-white text-fresh-600 hover:bg-fresh-50 active:scale-[0.98]",
        ghost: "text-fresh-700 hover:bg-fresh-50",
        accent:
          "bg-wheat-500 text-white shadow-soft hover:bg-wheat-600 hover:shadow-card",
        /* Hero CTA — matches portfolio design */
        heroPrimary:
          "relative overflow-hidden bg-fresh-600 px-6 text-white shadow-lg shadow-fresh-600/25 hover:bg-fresh-700 hover:shadow-fresh-600/35 active:scale-[0.98] sm:px-7",
        heroOutline:
          "border border-fresh-600 bg-white px-6 text-fresh-600 hover:bg-fresh-50 active:scale-[0.98] sm:px-7",
        heroSoft:
          "border border-cream-300 bg-cream-100 px-6 text-earth-700 hover:bg-cream-200 active:scale-[0.98] sm:px-7",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 py-3 text-sm sm:text-base",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
