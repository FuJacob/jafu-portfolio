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
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "hey thanks for visiting my site, feel free to chat about anything",
      isUser: false,
    },
    { text: "sick let's chat about ...", isUser: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (message?: string) => {
    const userMessage = message || inputValue.trim();
    if (userMessage) {
      // Clear fake messages when starting real conversation
      const realMessages = messages.length === 2 ? [] : messages;
      setMessages([...realMessages, { text: userMessage, isUser: true }]);
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
      } catch {
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
    setMessages([
      {
        text: "hey thanks for visiting my site, feel free to chat about anything",
        isUser: false,
      },
      { text: "sick let's chat about ...", isUser: true },
    ]);
    setInputValue("");
  };

  const hasRealMessages = messages.length > 0;

  return (
    <div
      className={`h-screen flex flex-col ${
        hasRealMessages ? "pt-42" : "justify-center"
      } items-center p-4 sm:p-8`}
    >
      <div
        className={`w-full max-w-2xl ${
          hasRealMessages ? "h-full flex flex-col" : "space-y-4 sm:space-y-6"
        }`}
      >
        {hasRealMessages ? (
          <>
            <div className="flex-shrink-0">
              <Header />
            </div>

            <div className="flex-1 min-h-0">
              <Messages
                messages={messages}
                isLoading={isLoading}
                fullHeight={true}
              />
            </div>

            <div className="flex-shrink-0 pt-2 sm:pt-4">
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={() => handleSubmit()}
                onClear={handleClearChat}
                showClear={hasRealMessages}
                disabled={isLoading}
                socialLinks={<SocialLinks />}
              />
            </div>
          </>
        ) : (
          <>
            <Header />
            <Messages messages={messages} fullHeight={false} />
            <div className="space-y-2 sm:space-y-3">
              <InfoBubbles onBubbleClick={handleBubbleClick} />
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={() => handleSubmit()}
                onClear={handleClearChat}
                showClear={hasRealMessages}
                disabled={isLoading}
                socialLinks={<SocialLinks />}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
