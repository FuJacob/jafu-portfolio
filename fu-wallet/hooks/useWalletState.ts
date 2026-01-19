"use client";

import { useState, useCallback, useEffect } from "react";
import { CardSection } from "@/lib/types";

interface WalletState {
  expandedCardId: string | null;
  expandedSection: CardSection | null;
}

export function useWalletState() {
  const [state, setState] = useState<WalletState>({
    expandedCardId: null,
    expandedSection: null,
  });

  const expandCard = useCallback((cardId: string, section: CardSection) => {
    setState({ expandedCardId: cardId, expandedSection: section });
  }, []);

  const collapseCard = useCallback(() => {
    setState({ expandedCardId: null, expandedSection: null });
  }, []);

  const toggleCard = useCallback((cardId: string, section: CardSection) => {
    setState((prev) =>
      prev.expandedCardId === cardId
        ? { expandedCardId: null, expandedSection: null }
        : { expandedCardId: cardId, expandedSection: section }
    );
  }, []);

  // Handle escape key to collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.expandedCardId) {
        collapseCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.expandedCardId, collapseCard]);

  return {
    expandedCardId: state.expandedCardId,
    expandedSection: state.expandedSection,
    isExpanded: state.expandedCardId !== null,
    expandCard,
    collapseCard,
    toggleCard,
  };
}
