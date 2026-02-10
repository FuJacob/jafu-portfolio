"use client";

import { AboutCard as AboutCardType } from "@/lib/types";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CardShell } from "./CardShell";
import { CardExpansion } from "./CardExpansion";

interface AboutCardProps {
  card: AboutCardType;
  isExpanded: boolean;
  onClick: () => void;
}

export function AboutCard({ card, isExpanded, onClick }: AboutCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const bgColor = isDark ? card.colors.dark : card.colors.light;
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedColor = isDark ? "text-white/70" : "text-gray-600";
  const borderColor = `color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`;
  const summary =
    card.summary ||
    "Waterloo CS student focused on infrastructure, distributed systems, and product-minded engineering. Previously interned at HubSpot and Bridgewell.";
  const imageSrc = card.media?.type === "image" ? card.media.src : card.avatar;
  const imageAlt = card.media?.caption || card.name;

  return (
    <CardShell
      bgColor={bgColor}
      borderColor={borderColor}
      isExpanded={isExpanded}
      onToggle={onClick}
      header={
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 flex items-center justify-center overflow-hidden">
              <Image
                src={card.education.logo}
                alt={card.education.school}
                width={16}
                height={16}
                sizes="16px"
                className="object-contain"
              />
            </div>
            <div className={`truncate text-sm font-semibold ${textColor}`}>
              {card.name}
            </div>
          </div>
          <span
            className={`shrink-0 text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.status}
          </span>
        </div>
      }
    >
      <CardExpansion
        isExpanded={isExpanded}
        summary={summary}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
      />
    </CardShell>
  );
}
