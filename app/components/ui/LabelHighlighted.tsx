"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const LabelHighlighted = ({
  bg,
  icon,
  className,
  children,
}: {
  bg: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [windowLoaded, setwindowLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );

  useEffect(() => {
    setwindowLoaded(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayText = children;
  if (typeof children === "string") {
    if (windowWidth < 400) {
      displayText =
        children.length > 5 ? children.slice(0, 20) + "…" : children;
    } else if (windowWidth < 600) {
      displayText =
        children.length > 10 ? children.slice(0, 10) + "…" : children;
    }
  }

  return (
    <label className="bg-gradient-to-r from-purple-main to-violet-500 flex w-fit rounded-full p-[1px] overflow-hidden">
      <div
        style={{
          background:
            bg ||
            "linear-gradient(120deg, rgba(32, 30, 44, 1.0) 0%, rgba(53, 50, 63, 1.0) 100%)",
        }}
        className={cn(
          "flex items-center gap-2 px-5 py-[6px] rounded-full overflow-hidden",
          className
        )}
      >
        {icon}
        <span className="text-white whitespace-nowrap">
          {windowLoaded ? displayText : "......."}
        </span>
      </div>
    </label>
  );
};

export default LabelHighlighted;
