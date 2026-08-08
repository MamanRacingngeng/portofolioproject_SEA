import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "label-font inline-flex items-center justify-center gap-2 whitespace-nowrap border-2 border-ink text-xs font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-v26yellow text-ink shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        dark: "bg-ink text-white shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        outline:
          "bg-white text-ink shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        ghost: "border-transparent bg-transparent shadow-none hover:bg-ink/5",
        sky: "bg-v26sky text-ink shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        coral:
          "bg-v26coral text-white shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        heroPrimary: "bg-v26yellow text-ink shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
        heroOutline:
          "bg-white text-ink shadow-[4px_4px_0_#0e0e0e] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0e0e0e]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-[10px]",
        lg: "h-12 px-7 text-sm",
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
