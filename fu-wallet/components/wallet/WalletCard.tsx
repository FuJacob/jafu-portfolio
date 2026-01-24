"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface WalletCardProps {
  children: ReactNode;
  accentColor?: string;
  className?: string;
  onClick?: () => void;
  isExpanded?: boolean;
}

export function WalletCard({
  children,
  accentColor,
  className,
  onClick,
  isExpanded,
}: WalletCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden cursor-pointer",
        "swiss-card",
        "transition-all duration-150",
        "hover:border-foreground/20",
        isExpanded && "border-foreground/30",
        className
      )}
      style={accentColor ? {
        borderColor: accentColor,
        borderWidth: '2px',
        borderStyle: 'solid',
      } : undefined}
    >
      {accentColor && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: accentColor }}
        />
      )}
      <div className="pl-3">{children}</div>
    </div>
  );
}
