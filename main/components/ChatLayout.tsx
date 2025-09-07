import Header from "@/components/Header";
import ChatInput from "@/components/ChatInput";
import ActionButtons from "@/components/SocialLinks";
import Messages from "@/components/Messages";
import FakeMessages from "@/components/FakeMessages";
import InfoBubbles from "@/components/InfoBubbles";

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatLayoutProps {
  messages: Message[];
  inputValue: string;
  isLoading: boolean;
  hasStartedConvo: boolean;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onBubbleClick: (message: string) => void;
  onClearChat: () => void;
}

export default function ChatLayout({
  messages,
  inputValue,
  isLoading,
  hasStartedConvo,
  onInputChange,
  onSubmit,
  onBubbleClick,
  onClearChat,
}: ChatLayoutProps) {
  return (
    <div
      className={`h-screen flex flex-col ${
        hasStartedConvo ? "pt-42" : "justify-center"
      } items-center p-4 sm:p-8`}
      style={{
        backgroundImage: "url('/bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`relative z-10 w-full max-w-2xl transition-all duration-700 ease-in-out ${
          hasStartedConvo ? "h-full flex flex-col" : "space-y-4 sm:space-y-6"
        }`}
      >
        {hasStartedConvo ? (
          <div className="animate-in fade-in duration-500 h-full flex flex-col">
            <div className="flex-shrink-0 animate-in slide-in-from-top duration-600">
              <Header />
            </div>

            <div className="flex-1 min-h-0 animate-in fade-in duration-700 delay-200">
              <Messages
                messages={messages}
                isLoading={isLoading}
                fullHeight={true}
              />
            </div>

            <div className="flex-shrink-0 pt-2 sm:pt-4 animate-in slide-in-from-bottom duration-600 delay-300">
              <ChatInput
                value={inputValue}
                onChange={onInputChange}
                onSubmit={onSubmit}
                disabled={isLoading}
                socialLinks={
                  <ActionButtons
                    onClearChat={onClearChat}
                    canClearChat={hasStartedConvo}
                    onSubmit={onSubmit}
                    disabled={isLoading}
                  />
                }
              />
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500 space-y-4 sm:space-y-6">
            <div className="animate-in slide-in-from-top duration-700">
              <Header />
            </div>
            <div className="animate-in fade-in duration-600 delay-200">
              <FakeMessages />
            </div>
            <div className="space-y-2 sm:space-y-3 animate-in slide-in-from-bottom duration-600 delay-300">
              <InfoBubbles onBubbleClick={onBubbleClick} />
              <ChatInput
                value={inputValue}
                onChange={onInputChange}
                onSubmit={onSubmit}
                disabled={isLoading}
                socialLinks={
                  <ActionButtons
                    onClearChat={onClearChat}
                    canClearChat={hasStartedConvo}
                    onSubmit={onSubmit}
                    disabled={isLoading}
                  />
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
