"use client";

import { AboutCard as AboutCardType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
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
      style={{ backgroundColor: bgColor }}
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
            <h3 className={`text-sm font-semibold ${textColor}`}>{card.name}</h3>
          </div>
          <span className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}>
            {card.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export function AboutCardDetails({ card }: { card: AboutCardType }) {
  return (
    <div className="p-3 space-y-3">
      {/* Education */}
      <p className="text-xs text-muted-foreground">{card.education.program} @ {card.education.school}</p>

      {/* Interests */}
      <div>
        <h3 className="text-xs font-semibold text-foreground mb-1">Interests</h3>
        <div className="flex flex-wrap gap-1.5">
          {card.interests.map((interest) => (
            <Badge key={interest} variant="outline" className="text-[10px]">
              {interest}
            </Badge>
          ))}
        </div>
      </div>

      {/* Personal */}
      <div>
        <h3 className="text-xs font-semibold text-foreground mb-1">Personal</h3>
        <ul className="space-y-0.5">
          {card.personalFacts.map((fact, i) => (
            <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
              <span className="text-muted-foreground/50">&gt;</span>
              {fact}
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2 pt-1">
        <a
          href={card.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={card.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={card.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          X/Twitter
        </a>
        <a
          href={`mailto:${card.socials.email}`}
          onClick={(e) => e.stopPropagation()}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          Email
        </a>
      </div>
    </div>
  );
}
