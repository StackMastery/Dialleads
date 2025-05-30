import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const ShinyButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="relative z-[10] inline-flex animate-shine items-center justify-center rounded-xl border-[1px] border-l border-t border-white/30 border-b-white/15 border-r-white/15 bg-transparent px-2 py-2  shadow-xl backdrop-blur-[1px] transition-colors">
        <Button
          className={cn(
            ` px-10 h-14 w-full text-lg sm:text-xl font-light`,
            className
          )}
        >
          {children}
        </Button>
      </div>
    </>
  );
};

export default ShinyButton;
