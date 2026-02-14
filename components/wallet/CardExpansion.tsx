"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardExpansionProps {
  isExpanded: boolean;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
  links?: {
    href: string;
    label: string;
    icon: ReactNode;
  }[];
}

export function CardExpansion({
  isExpanded,
  summary,
  imageSrc,
  imageAlt,
  links = [],
}: CardExpansionProps) {
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="min-h-0">
        <div className="border-t border-black/10 dark:border-white/10 px-2.5 pr-8 pb-2.5 pt-1.5 sm:px-3 sm:pr-9 sm:pb-3 sm:pt-2">
          <div className="flex items-start gap-2">
            <p
              className="min-w-0 flex-1 text-sm leading-relaxed text-muted-foreground"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "4.2em",
              }}
            >
              {summary}
            </p>

            {imageSrc && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10 sm:h-14 sm:w-14">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Card preview"}
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {links.length > 0 && (
            <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              {links.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-sm border border-black/10 px-1.5 py-0.5 hover:text-foreground dark:border-white/10"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
