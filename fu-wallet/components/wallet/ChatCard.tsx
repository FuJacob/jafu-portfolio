"use client";

import { ChatCard as ChatCardType } from "@/lib/types";
import { useTheme } from "next-themes";
import { MessageCircle, Send, Loader2 } from "lucide-react";
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
      style={{ backgroundColor: bgColor }}
    >
      {/* Perforation line on right side */}
      <div className="absolute right-4 top-2 bottom-2 w-px border-r border-dashed border-current opacity-30" />

      <div className="p-3 pr-8">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white/90 flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-indigo-600" />
            </div>
            <h3 className={`text-sm font-semibold ${textColor}`}>
              {card.title}
            </h3>
          </div>
          <span
            className={`text-[10px] font-medium uppercase tracking-wide ${mutedColor}`}
          >
            AI
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
    setInputValue,
    handleSubmit,
    handleBubbleClick,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const suggestedQuestions = [
    "Tell me about yourself",
    "What projects have you worked on?",
    "What are your technical skills?",
  ];

  return (
    <div className="px-1 pt-3 pb-3 flex flex-col" style={{ height: "350px" }}>
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3 pr-1">
        {messages.length === 0 ? (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">
              Ask me anything about my experience, projects, or background.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBubbleClick(q);
                  }}
                  className="text-[10px] px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`text-xs ${
                msg.isUser
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <span
                className={`inline-block px-2.5 py-1.5 rounded-lg max-w-[85%] ${
                  msg.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
                dangerouslySetInnerHTML={
                  msg.isUser ? undefined : { __html: msg.text }
                }
              >
                {msg.isUser ? msg.text : undefined}
              </span>
            </div>
          ))
        )}
        {isLoading && (
          <div className="text-left">
            <span className="inline-block px-2.5 py-1.5 rounded-lg bg-secondary text-secondary-foreground">
              <Loader2 className="h-3 w-3 animate-spin" />
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area - fixed at bottom */}
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
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 text-xs px-3 py-2 rounded-lg bg-secondary border-0 focus:outline-none focus:ring-1 focus:ring-ring"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !inputValue.trim()}
          className="px-3 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 transition-opacity"
        >
          <Send className="h-3 w-3" />
        </button>
      </form>
    </div>
  );
}
