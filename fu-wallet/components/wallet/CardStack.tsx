"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { WalletCard as WalletCardType, CardSection } from "@/lib/types";
import { AboutCard, AboutCardDetails } from "./AboutCard";
import { ExperienceCard, ExperienceCardDetails } from "./ExperienceCard";
import { ProjectCard, ProjectCardDetails } from "./ProjectCard";
import { ChatCard, ChatCardDetails } from "./ChatCard";

const STACK_OFFSET = 36; // pixels visible per stacked card header

interface CardStackProps {
  cards: WalletCardType[];
  section: CardSection;
  expandedCardId: string | null;
  onCardClick: (cardId: string, section: CardSection) => void;
}

export function CardStack({
  cards,
  section,
  expandedCardId,
  onCardClick,
}: CardStackProps) {
  const expandedIndex = cards.findIndex((c) => c.id === expandedCardId);
  const isThisSectionExpanded = expandedIndex !== -1;

  // Calculate total height when stacked
  const stackedHeight = STACK_OFFSET * (cards.length - 1) + 52;
  // When expanded, use minimal height for just the card (details will flow naturally)
  const CARD_HEIGHT = 52;

  return (
    <LayoutGroup>
      <motion.div
        className="relative"
        animate={{
          height: isThisSectionExpanded ? CARD_HEIGHT : stackedHeight,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* All cards always rendered - position changes based on expanded state */}
        {cards.map((card, index) => {
          const isExpanded = card.id === expandedCardId;
          const isHidden = isThisSectionExpanded && !isExpanded;

          return (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              className="absolute left-0 right-0"
              animate={{
                y: isExpanded ? 0 : index * STACK_OFFSET,
                opacity: isHidden ? 0 : 1,
                scale: isHidden ? 0.95 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 35,
              }}
              style={{
                zIndex: isExpanded ? 100 : index + 1,
                pointerEvents: isHidden ? "none" : "auto",
              }}
            >
              {renderCard(card, isExpanded, () => onCardClick(card.id, section))}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Details panel - positioned outside the card container for consistent gap */}
      <AnimatePresence>
        {isThisSectionExpanded && expandedIndex !== -1 && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
            className="overflow-hidden"
          >
            {renderCardDetails(cards[expandedIndex])}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

function renderCard(
  card: WalletCardType,
  isExpanded: boolean,
  onClick: () => void
) {
  switch (card.type) {
    case "about":
      return (
        <AboutCard card={card} isExpanded={isExpanded} onClick={onClick} />
      );
    case "experience":
      return (
        <ExperienceCard card={card} isExpanded={isExpanded} onClick={onClick} />
      );
    case "project":
      return (
        <ProjectCard card={card} isExpanded={isExpanded} onClick={onClick} />
      );
    case "chat":
      return (
        <ChatCard card={card} isExpanded={isExpanded} onClick={onClick} />
      );
  }
}

function renderCardDetails(card: WalletCardType) {
  switch (card.type) {
    case "about":
      return <AboutCardDetails card={card} />;
    case "experience":
      return <ExperienceCardDetails card={card} />;
    case "project":
      return <ProjectCardDetails card={card} />;
    case "chat":
      return <ChatCardDetails card={card} />;
  }
}
