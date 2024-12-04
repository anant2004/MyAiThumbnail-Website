"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "w-full rounded-xl dark:border-white/[0.2] hover:border-neutral-200 group/btn relative flex items-center justify-center transition-all duration-300 ease-in-out",
        className
      )}
    >
      {/* Removed background and clipboard icon */}
      <div className="relative z-40">{children}</div>
    </div>
  );
};
