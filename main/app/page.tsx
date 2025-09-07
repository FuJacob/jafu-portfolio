"use client";
import ChatLayout from "@/components/ChatLayout";
import { useChat } from "@/hooks/useChat";

export default function Home() {
  const {
    messages,
    inputValue,
    isLoading,
    hasStartedConvo,
    setInputValue,
    handleSubmit,
    handleBubbleClick,
    handleClearChat,
  } = useChat();

  return (
    <ChatLayout
      messages={messages}
      inputValue={inputValue}
      isLoading={isLoading}
      hasStartedConvo={hasStartedConvo}
      onInputChange={setInputValue}
      onSubmit={() => handleSubmit()}
      onBubbleClick={handleBubbleClick}
      onClearChat={handleClearChat}
    />
  );
}
