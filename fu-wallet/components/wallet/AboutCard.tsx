"use client";

import { AboutCard as AboutCardType } from "@/lib/types";
import { useTheme } from "next-themes";
import Image from "next/image";

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
        {/* Same layout as ExperienceCard: Logo, Name, Date on right */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 flex items-center justify-center overflow-hidden">
              <Image
                src={card.education.logo}
                alt={card.education.school}
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            <h3 className={`text-sm font-semibold ${textColor}`}>
              {card.name}
            </h3>
          </div>
          <span
            className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.status}
          </span>
        </div>
      </div>
    </div>
  );
}

import { MediaDisplay } from "./MediaDisplay";

// ... existing AboutCard component ...

export function AboutCardDetails({ card }: { card: AboutCardType }) {
  return (
    <div className="px-1 pt-3 pb-3 space-y-2">
      {/* Education */}
      <p className="text-xs text-muted-foreground">
        {card.education.program} @ {card.education.school}
      </p>

      {/* Personal - as paragraphs */}
      <div className="space-y-2">
        {card.personalFacts.map((fact, i) => (
          <p key={i} className="text-xs text-muted-foreground">
            {fact}
          </p>
        ))}
      </div>

      {/* Media */}
      {card.media && <MediaDisplay media={card.media} colors={card.colors} forceAspectRatio={false} />}
    </div>
  );
}
