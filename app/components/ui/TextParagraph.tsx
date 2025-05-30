import React from "react";
import { cn } from "@/lib/utils";

const TextParagraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "w-full max-w-[33.938rem] text-center font-normal text-[#DCDAE0] text-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextParagraph;
