import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-gradient-to-r from-fresh-500 to-fresh-600 text-white shadow-glow hover:brightness-105 hover:scale-[1.03]",
        citrus:
          "rounded-full bg-gradient-to-r from-citrus-400 to-citrus-500 text-white shadow-glow-citrus hover:brightness-105 hover:scale-[1.03]",
        secondary:
          "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "rounded-full border-2 border-fresh-200 bg-white/80 text-fresh-700 backdrop-blur-sm hover:border-fresh-400 hover:bg-fresh-50",
        ghost: "rounded-full hover:bg-fresh-100/80 hover:text-fresh-700",
        glass:
          "rounded-full border border-white/50 bg-white/60 text-foreground shadow-soft backdrop-blur-md hover:bg-white/90",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 rounded-full",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
