"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardExpansionProps {
  isExpanded: boolean;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function CardExpansion({
  isExpanded,
  summary,
  imageSrc,
  imageAlt,
}: CardExpansionProps) {
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="min-h-0">
        <div className="border-t border-black/10 dark:border-white/10 px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3">
          <div className="flex items-start gap-3">
            <p
              className="min-w-0 flex-1 text-xs sm:text-sm leading-relaxed text-muted-foreground"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "4.3em",
              }}
            >
              {summary}
            </p>

            {imageSrc && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10 sm:h-[72px] sm:w-[72px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Card preview"}
                  fill
                  sizes="(max-width: 640px) 64px, 72px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
