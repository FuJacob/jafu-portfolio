"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("pt-1.5 pb-0.5 sm:pt-2 sm:pb-1", className)}>
      <h2 className="text-caption text-muted-foreground">
        {label}
      </h2>
    </div>
  );
}
