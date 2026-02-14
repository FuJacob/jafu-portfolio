"use client";

import { ExperienceCard as ExperienceCardType } from "@/lib/types";
import Image from "next/image";
import { useTheme } from "next-themes";
import { CardShell } from "./CardShell";
import { CardExpansion } from "./CardExpansion";

interface ExperienceCardProps {
  card: ExperienceCardType;
  isExpanded: boolean;
  onClick: () => void;
}

export function ExperienceCard({
  card,
  isExpanded,
  onClick,
}: ExperienceCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const bgColor = isDark ? card.colors.dark : card.colors.light;
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedColor = isDark ? "text-white/70" : "text-gray-600";
  const borderColor = `color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`;
  const summary = card.summary || card.description.split("\n\n")[0] || card.role;
  const imageSrc = card.media?.type === "image" ? card.media.src : card.logo;
  const imageAlt = card.media?.caption || card.company;
  const roleLabel = "Software Engineering Intern";

  return (
    <CardShell
      bgColor={bgColor}
      borderColor={borderColor}
      isExpanded={isExpanded}
      onToggle={onClick}
      header={
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5">
            <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 flex items-center justify-center overflow-hidden">
              <Image
                src={card.logo}
                alt={card.company}
                width={16}
                height={16}
                sizes="16px"
                className="object-contain"
              />
            </div>
            <div className={`truncate text-[15px] font-semibold ${textColor}`}>
              {card.company}
              <span className={`ml-1 text-[11px] font-medium ${mutedColor}`}>
                -- {roleLabel}
              </span>
            </div>
          </div>
          <span
            className={`shrink-0 text-[11px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.period}
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
