import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lift hover:-translate-y-0.5 hover:brightness-110",
        honey: "bg-gradient-to-r from-cyan-500 to-sky-400 text-white shadow-honey hover:-translate-y-0.5 hover:brightness-110",
        coral: "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lift hover:-translate-y-0.5 hover:brightness-110",
        outline: "border-2 border-blue-500 bg-white text-blue-800 hover:bg-blue-50",
        secondary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
        ghost: "hover:bg-muted",
        white: "bg-white text-blue-800 shadow-md hover:-translate-y-0.5",
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
