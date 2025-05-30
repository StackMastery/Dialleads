import React from "react";

const H2 = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={`text-white text-5xl md:text-6xl font-bold ${className}`}>
      {children}
    </h2>
  );
};

export default H2;
