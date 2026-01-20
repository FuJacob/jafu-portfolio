import { useState } from "react";

interface Message {
  text: string;
  isUser: boolean;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStartedConvo, setHasStartedConvo] = useState(false);

  const handleSubmit = async (message?: string) => {
    const userMessage = message || inputValue.trim();
    if (userMessage) {
      setHasStartedConvo(true);
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
    setMessages([]);
    setInputValue("");
    setHasStartedConvo(false);
  };

  return {
    messages,
    inputValue,
    isLoading,
    hasStartedConvo,
    setInputValue,
    handleSubmit,
    handleBubbleClick,
    handleClearChat,
  };
}
