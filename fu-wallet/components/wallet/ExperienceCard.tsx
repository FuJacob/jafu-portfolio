"use client";

import { ExperienceCard as ExperienceCardType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MediaDisplay } from "./MediaDisplay";

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

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer rounded-lg transition-all duration-150 hover:scale-[1.02]"
      style={{
        backgroundColor: bgColor,
        border: `1.5px solid color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`,
      }}
    >
      {/* Perforation line on right side */}
      <div className="absolute right-4 top-2 bottom-2 w-px border-r border-dashed border-current opacity-30" />

      <div className="p-3 pr-8">
        {/* Credit card layout: Logo small, Company name, Period */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 flex items-center justify-center overflow-hidden">
              <Image
                src={card.logo}
                alt={card.company}
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <div className={`text-sm font-semibold ${textColor}`}>
              {card.company}
            </div>
          </div>
          <span
            className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.period}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ExperienceCardDetails({ card }: { card: ExperienceCardType }) {
  const paragraphs = card.description.split("\n\n");

  return (
    <div className="px-1 pt-3 pb-3 space-y-2">
      {/* Role */}
      <p className="text-xs font-medium text-foreground">{card.role}</p>

      {/* Description paragraphs */}
      <div className="space-y-2">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-xs text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Media */}
      {card.media && <MediaDisplay media={card.media} colors={card.colors} />}

      {/* Details */}
      {card.bullets.length > 0 && (
        <ul className="space-y-0.5">
          {card.bullets.map((bullet, i) => (
            <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
              <span className="text-muted-foreground/50">&gt;</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      {card.technologies && card.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {card.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
