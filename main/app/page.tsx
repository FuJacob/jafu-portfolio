"use client";
import { useState } from "react";
import Header from "@/components/Header";
import ChatInput from "@/components/ChatInput";
import SocialLinks from "@/components/SocialLinks";
import Messages from "@/components/Messages";
import InfoBubbles from "@/components/InfoBubbles";

interface Message {
  text: string;
  isUser: boolean;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (message?: string) => {
    const userMessage = message || inputValue.trim();
    if (userMessage) {
      setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
      if (!message) setInputValue("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: userMessage }),
        });

        const data = await response.json();

        if (response.ok) {
          setMessages((prev) => [
            ...prev,
            { text: data.answer, isUser: false },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              text: "Sorry, I couldn't process your message. Please try again.",
              isUser: false,
            },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I couldn't process your message. Please try again.",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBubbleClick = (message: string) => {
    handleSubmit(message);
  };

  const handleClearChat = () => {
    setMessages([]);
    setInputValue("");
  };

  const hasMessages = messages.length > 0;

  return (
    <div
      className={`h-screen flex flex-col ${
        hasMessages ? "pt-42" : "justify-center"
      } items-center p-4 sm:p-8`}
    >
      <div
        className={`w-full max-w-2xl ${
          hasMessages ? "h-full flex flex-col" : "space-y-4 sm:space-y-6"
        }`}
      >
        {hasMessages ? (
          <>
            <div className="flex-shrink-0">
              <Header />
            </div>

            <div className="flex-1 min-h-0">
              <Messages messages={messages} isLoading={isLoading} />
            </div>

            <div className="flex-shrink-0 pt-2 sm:pt-4 space-y-2 sm:space-y-4">
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={() => handleSubmit()}
                onClear={handleClearChat}
                showClear={hasMessages}
                disabled={isLoading}
              />
              <SocialLinks />
            </div>
          </>
        ) : (
          <>
            <Header />
            <Messages messages={messages} />
            <div className="space-y-2 sm:space-y-3">
              <InfoBubbles onBubbleClick={handleBubbleClick} />
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={() => handleSubmit()}
                onClear={handleClearChat}
                showClear={hasMessages}
                disabled={isLoading}
              />
              <SocialLinks />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
