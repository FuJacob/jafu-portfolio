"use client";

import { walletSections, aboutCard } from "@/lib/data";
import { useWalletState } from "@/hooks/useWalletState";
import { WalletHeader } from "./WalletHeader";
import { SectionDivider } from "./SectionDivider";
import { CardStack } from "./CardStack";
import { motion, AnimatePresence } from "framer-motion";

export function WalletContainer() {
  const { expandedCardId, expandedSection, toggleCard } = useWalletState();

  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center py-8">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center -30px",
        }}
      />

      {/* Fixed height container to prevent layout shift */}
      <div className="w-full max-w-sm px-4 min-h-[600px] relative z-10">
        {/* Header - fixed at top with all about info */}
        <WalletHeader
          name={aboutCard.name}
          education={aboutCard.education.program}
          socials={aboutCard.socials}
          calendarLink={aboutCard.calendarLink}
        />

        {/* Content area */}
        <div>
          <div>
            {walletSections.map((section) => {
              const isSectionExpanded = expandedSection === section.id;
              const isOtherSectionExpanded =
                expandedCardId && !isSectionExpanded;

              return (
                <motion.div
                  key={section.id}
                  animate={{
                    opacity: isOtherSectionExpanded ? 0 : 1,
                    height: isOtherSectionExpanded ? 0 : "auto",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  style={{
                    overflow: isOtherSectionExpanded ? "hidden" : "visible",
                    pointerEvents: isOtherSectionExpanded ? "none" : "auto",
                  }}
                >
                  {/* Section divider */}
                  <AnimatePresence>
                    {!expandedCardId && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      >
                        <SectionDivider label={section.label} />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card stack */}
                  <CardStack
                    cards={section.cards}
                    section={section.id}
                    expandedCardId={expandedCardId}
                    onCardClick={toggleCard}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
