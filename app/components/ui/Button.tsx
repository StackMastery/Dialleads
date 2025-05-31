import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-3 justify-center cursor-pointer border border-purple-main rounded-xl font-medium transition-all outline-0",
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

type GradientButtonProps = {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export const GradientButton: React.FC<GradientButtonProps> = ({
  icon,
  className,
  children,
}) => {
  return (
    <button
      className={cn(
        ` group relative mt-[30px] text-lg cursor-pointer flex h-[52px] w-full justify-center items-center gap-3 overflow-clip rounded-[0.75rem] border border-violet-600 bg-transparent px-3 py-4 text-violet-600 transition-all duration-200 ease-linear after:absolute after:inset-y-0 after:right-[100%] after:z-[-1] after:w-[150%] after:transition-all after:duration-300 after:ease-linear after:content-[''] after:[background-image:_linear-gradient(to_right,_rgba(113,48,214,1.0)_0%,_rgba(177,136,240,1.0)_70%,_rgba(177,136,240,0.0)_100%)] hover:bg-transparent hover:text-white hover:after:right-[-40%]`,
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};
