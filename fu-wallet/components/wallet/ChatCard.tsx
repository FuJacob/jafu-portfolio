"use client";

import { ChatCard as ChatCardType } from "@/lib/types";
import { useTheme } from "next-themes";
import { MessageCircle, Send, RotateCcw } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import { useRef, useEffect } from "react";

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

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden cursor-pointer rounded-lg transition-all duration-150 hover:scale-[1.02]"
      style={{
        backgroundColor: bgColor,
        border: `1.5px solid color-mix(in srgb, ${card.colors.dark} 40%, ${card.colors.light})`,
      }}
    >
      {/* Perforation line on right side */}
      <div className="absolute right-4 top-2 bottom-2 w-px border-r border-dashed border-current opacity-30" />

      <div className="p-3 pr-8">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 dark:bg-gray-800/90 flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-indigo-600" />
            </div>
            <h3 className={`text-sm font-semibold ${textColor}`}>
              {card.title}
            </h3>
          </div>
          <span
            className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            Click here
          </span>
        </div>
      </div>
    </div>
  );
}

export function ChatCardDetails({ card }: { card: ChatCardType }) {
  const {
    messages,
    inputValue,
    isLoading,
    streamingText,
    setInputValue,
    handleSubmit,
    handleBubbleClick,
    handleClearChat,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const suggestedQuestions = [
    "Tech stack?",
    "Experience?",
    "Contact info?",
  ];

  // Use card colors for consistent styling
  const accentLight = card.colors.light;
  const accentDark = card.colors.dark;

  return (
    <div className="px-1 pt-3 pb-3 flex flex-col h-125">
      {/* Header with clear button */}
      <div className="flex justify-end mb-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearChat();
          }}
          className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-xs ${msg.isUser ? "text-right text-muted-foreground" : "text-left text-foreground"}`}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {msg.isUser ? (
              msg.text
            ) : (
              <span dangerouslySetInnerHTML={{ __html: msg.text }} />
            )}
          </div>
        ))}
        {/* Streaming message */}
        {streamingText && (
          <div className="text-xs text-left text-foreground" style={{ whiteSpace: "pre-wrap" }}>
            <span dangerouslySetInnerHTML={{ __html: streamingText }} />
            <span className="inline-block w-1.5 h-3 bg-current opacity-50 animate-pulse ml-0.5" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions & Input */}
      <div className="space-y-2">
        {/* Suggested Pills */}
        <div className="flex flex-wrap gap-1.5 justify-end">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={(e) => {
                e.stopPropagation();
                handleBubbleClick(q);
              }}
              className="text-[10px] px-2 py-1 rounded-lg transition-colors"
              style={{
                backgroundColor: accentLight,
                color: accentDark,
                border: `1px solid color-mix(in srgb, ${accentDark} 30%, ${accentLight})`,
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
          onClick={(e) => e.stopPropagation()}
          className="flex gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isLoading ? "AI is typing..." : "Type a message..."}
            className="flex-1 text-xs px-3 py-2 rounded-lg focus:outline-none transition-all"
            style={{
              backgroundColor: "white",
              border: `1.5px solid color-mix(in srgb, ${accentDark} 30%, ${accentLight})`,
            }}
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-3 py-2 rounded-lg disabled:opacity-40 transition-all hover:opacity-90"
            style={{
              backgroundColor: accentDark,
              color: "white",
            }}
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
