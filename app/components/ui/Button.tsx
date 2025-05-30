import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer border border-purple-main rounded-xl font-medium transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-main to-purple-sec text-white hover:opacity-90",
        secondary: "bg-gray-100 text-black hover:bg-gray-200",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className, "")}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
