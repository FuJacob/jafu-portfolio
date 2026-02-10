"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardShellProps {
  bgColor: string;
  borderColor: string;
  isExpanded: boolean;
  onToggle: () => void;
  header: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function CardShell({
  bgColor,
  borderColor,
  isExpanded,
  onToggle,
  header,
  children,
  className,
}: CardShellProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={{
        backgroundColor: bgColor,
        border: `1.5px solid ${borderColor}`,
      }}
    >
      <div className="absolute right-4 top-2 bottom-2 w-px border-r border-dashed border-current opacity-30" />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className={cn(
          "w-full p-3 pr-8 sm:p-4 sm:pr-10 text-left",
          "transition-[filter] duration-150 motion-reduce:transition-none",
          "hover:brightness-[1.02]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/25"
        )}
      >
        {header}
      </button>

      {children}
    </div>
  );
}
