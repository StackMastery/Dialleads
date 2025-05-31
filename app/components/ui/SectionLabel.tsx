import { cn } from "@/lib/utils";
import React from "react";

const SectionLabel = ({
  icon,
  className,
  children,
}: {
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <label
        className={cn(
          "flex justify-center w-fit items-center border gap-2 px-5 py-2 rounded-full border-gray-400/40 text-gray-800/60",
          className
        )}
      >
        <span>{icon}</span>
        {children}
      </label>
    </>
  );
};

export default SectionLabel;
