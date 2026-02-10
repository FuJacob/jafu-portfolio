"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  label: string;
  className?: string;
}

export function SectionDivider({ label, className }: SectionDividerProps) {
  return (
    <div className={cn("pt-3 pb-1 sm:pt-4 sm:pb-2", className)}>
      <h2 className="text-caption text-muted-foreground">
        {label}
      </h2>
    </div>
  );
}
