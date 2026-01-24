"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("pt-1 pb-3", className)}>
      <span className="text-caption text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
