"use client";

import { walletSections, headerInfo } from "@/lib/data";
import { useWalletState } from "@/hooks/useWalletState";
import { WalletHeader } from "./WalletHeader";
import { SectionDivider } from "./SectionDivider";
import { CardStack } from "./CardStack";

export function WalletContainer() {
  const { expandedCardId, toggleCard } = useWalletState();
  const visibleSections = walletSections.filter((section) => section.id !== "chat");

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background py-6 sm:py-8">
      <main className="relative z-10 min-h-[620px] w-full max-w-sm px-2 sm:max-w-md sm:px-3 lg:max-w-lg lg:px-4">
        <WalletHeader
          name={headerInfo.name}
          icon={headerInfo.icon}
          subtitle={headerInfo.subtitle}
          socials={headerInfo.socials}
          calendarLink={headerInfo.calendarLink}
        />

        <div className="space-y-1 sm:space-y-1.5">
          {visibleSections.map((section) => (
            <section key={section.id} className="space-y-1 sm:space-y-1.5">
              <SectionDivider label={section.label} />
              <CardStack
                cards={section.cards}
                expandedCardId={expandedCardId}
                onCardClick={toggleCard}
              />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
