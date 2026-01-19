"use client";

import { ProjectCard as ProjectCardType } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "next-themes";

interface ProjectCardProps {
  card: ProjectCardType;
  isExpanded: boolean;
  onClick: () => void;
}

export function ProjectCard({ card, isExpanded, onClick }: ProjectCardProps) {
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
        {/* Same layout as other cards: Logo, Title, Top-right info */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {card.image && (
              <div className="h-6 w-6 rounded bg-white/90 overflow-hidden shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <h3 className={`text-sm font-semibold ${textColor}`}>{card.title}</h3>
          </div>
          {/* Show "Winner" if there's an award */}
          {card.award && (
            <span className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}>
              🏆 Winner
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectCardDetails({ card }: { card: ProjectCardType }) {
  return (
    <div className="p-3 space-y-2">
      {/* Description */}
      <p className="text-xs text-muted-foreground">{card.description}</p>

      {/* Award if present */}
      {card.award && (
        <Badge
          variant="default"
          className="text-[10px] bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30"
        >
          {card.award}
        </Badge>
      )}

      {/* Bullets */}
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
      <div className="flex flex-wrap gap-1.5">
        {card.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px]">
            {tech}
          </Badge>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-1">
        {card.githubUrl && (
          <a
            href={card.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Github className="h-3 w-3" />
            GitHub
          </a>
        )}
        {card.liveUrl && (
          <a
            href={card.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink className="h-3 w-3" />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
