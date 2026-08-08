import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-colors duration-150 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#669bbc] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#003049] text-[#fdf0d5] hover:bg-[#001a28]",
        honey: "bg-[#669bbc] text-[#fdf0d5] hover:bg-[#558aad]",
        coral: "bg-[#c1121f] text-white hover:bg-[#780000]",
        outline: "border-2 border-[#003049] bg-transparent text-[#003049] hover:bg-[#003049]/5",
        secondary: "bg-[#fdf0d5] text-[#003049] border border-[#003049]/20 hover:bg-white",
        ghost: "hover:bg-[#003049]/5",
        white: "bg-white text-[#003049] border border-[#003049]/15 hover:bg-[#fdf0d5]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
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
