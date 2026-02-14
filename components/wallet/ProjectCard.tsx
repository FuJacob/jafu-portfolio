"use client";

import { ProjectCard as ProjectCardType } from "@/lib/types";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ExternalLink, Github, Link2 } from "lucide-react";
import { CardShell } from "./CardShell";
import { CardExpansion } from "./CardExpansion";

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
  const borderColor = `color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`;
  const summary = card.summary || card.description.split("\n\n")[0] || card.tagline;
  const imageSrc = card.media?.type === "image" ? card.media.src : card.image;
  const imageAlt = card.media?.caption || card.title;
  const links = [
    card.githubUrl
      ? {
          href: card.githubUrl,
          label: "GitHub",
          icon: <Github className="h-3 w-3" aria-hidden="true" />,
        }
      : null,
    card.devpostUrl
      ? {
          href: card.devpostUrl,
          label: "Devpost",
          icon: <Link2 className="h-3 w-3" aria-hidden="true" />,
        }
      : null,
    card.liveUrl
      ? {
          href: card.liveUrl,
          label: "Live",
          icon: <ExternalLink className="h-3 w-3" aria-hidden="true" />,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <CardShell
      bgColor={bgColor}
      borderColor={borderColor}
      isExpanded={isExpanded}
      onToggle={onClick}
      header={
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5">
            {card.image && (
              <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 overflow-hidden shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={24}
                  height={24}
                  sizes="24px"
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className={`truncate text-[15px] font-semibold ${textColor}`}>
              {card.title}
            </div>
          </div>
          <span
            className={`max-w-32 truncate text-right text-[11px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            {card.tagline}
          </span>
        </div>
      }
    >
      <CardExpansion
        isExpanded={isExpanded}
        summary={summary}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        links={links}
      />
    </CardShell>
  );
}
