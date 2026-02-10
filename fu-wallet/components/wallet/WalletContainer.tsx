"use client";

import { walletSections, aboutCard } from "@/lib/data";
import { useWalletState } from "@/hooks/useWalletState";
import { WalletHeader } from "./WalletHeader";
import { SectionDivider } from "./SectionDivider";
import { CardStack } from "./CardStack";

export function WalletContainer() {
  const { expandedCardId, toggleCard } = useWalletState();

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white py-10 dark:bg-gray-950 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-45 dark:opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center -30px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #374151 1px, transparent 1px),
            linear-gradient(to bottom, #374151 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          backgroundPosition: "center -30px",
        }}
      />

      <main className="relative z-10 min-h-[720px] w-full max-w-sm px-4 sm:max-w-xl sm:px-6 lg:max-w-3xl lg:px-8">
        <WalletHeader
          name={aboutCard.name}
          education={aboutCard.education.program}
          socials={aboutCard.socials}
          calendarLink={aboutCard.calendarLink}
        />

        <div className="space-y-3">
          {walletSections.map((section) => (
            <section key={section.id} className="space-y-2 sm:space-y-3">
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
