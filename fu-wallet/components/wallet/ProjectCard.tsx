"use client";

import { ProjectCard as ProjectCardType } from "@/lib/types";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { MediaDisplay } from "./MediaDisplay";

function DevpostIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
    </svg>
  );
}

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
            <h3 className={`text-sm font-semibold ${textColor}`}>
              {card.title}
            </h3>
          </div>
          <span
            className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.tagline}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardDetails({ card }: { card: ProjectCardType }) {
  const paragraphs = card.description.split("\n\n");

  return (
    <div className="px-1 pt-3 pb-3 space-y-2">
      {/* Description paragraphs */}
      <div className="space-y-2">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-xs text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Media */}
      {card.media && <MediaDisplay media={card.media} />}

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
        {card.devpostUrl && (
          <a
            href={card.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            <DevpostIcon className="h-3 w-3" />
            Devpost
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
