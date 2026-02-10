"use client";

import { WalletCard as WalletCardType } from "@/lib/types";
import { AboutCard } from "./AboutCard";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectCard } from "./ProjectCard";
import { ChatCard } from "./ChatCard";

interface CardStackProps {
  cards: WalletCardType[];
  expandedCardId: string | null;
  onCardClick: (cardId: string) => void;
}

export function CardStack({ cards, expandedCardId, onCardClick }: CardStackProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {cards.map((card) => {
        const isExpanded = card.id === expandedCardId;

        return (
          <div key={card.id} className="transition-transform duration-200 ease-out motion-reduce:transition-none">
            {renderCard(card, isExpanded, () => onCardClick(card.id))}
          </div>
        );
      })}
    </div>
  );
}

function renderCard(card: WalletCardType, isExpanded: boolean, onClick: () => void) {
  switch (card.type) {
    case "about":
      return <AboutCard card={card} isExpanded={isExpanded} onClick={onClick} />;
    case "experience":
      return <ExperienceCard card={card} isExpanded={isExpanded} onClick={onClick} />;
    case "project":
      return <ProjectCard card={card} isExpanded={isExpanded} onClick={onClick} />;
    case "chat":
      return <ChatCard card={card} isExpanded={isExpanded} onClick={onClick} />;
  }
}
