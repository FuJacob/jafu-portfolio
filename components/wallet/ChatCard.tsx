"use client";

import { ChatCard as ChatCardType } from "@/lib/types";
import { useTheme } from "next-themes";
import { MessageCircle } from "lucide-react";
import { CardShell } from "./CardShell";
import { CardExpansion } from "./CardExpansion";

interface ChatCardProps {
  card: ChatCardType;
  isExpanded: boolean;
  onClick: () => void;
}

export function ChatCard({ card, isExpanded, onClick }: ChatCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const bgColor = isDark ? card.colors.dark : card.colors.light;
  const textColor = isDark ? "text-white" : "text-gray-900";
  const mutedColor = isDark ? "text-white/70" : "text-gray-600";
  const borderColor = `color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`;
  const summary =
    card.summary ||
    "Ask about internships, projects, and technical strengths. You can get a concise walkthrough of my recent work and preferred stacks.";

  return (
    <CardShell
      bgColor={bgColor}
      borderColor={borderColor}
      isExpanded={isExpanded}
      onToggle={onClick}
      header={
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-indigo-600" />
            </div>
            <div className={`truncate text-sm font-semibold ${textColor}`}>
              {card.title}
            </div>
          </div>
          <span
            className={`shrink-0 text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            Ask me
          </span>
        </div>
      }
    >
      <CardExpansion isExpanded={isExpanded} summary={summary} />
    </CardShell>
  );
}
