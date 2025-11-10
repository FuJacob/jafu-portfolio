interface Message {
  text: string;
  isUser: boolean;
}

interface MessagesProps {
  messages: Message[];
  isLoading?: boolean;
  fullHeight?: boolean;
}

export default function Messages({
  messages,
  isLoading,
  fullHeight = true,
}: MessagesProps) {
  if (messages.length === 0) return null;

  return (
    <div
      className={`${fullHeight ? "h-full" : ""} overflow-y-auto py-2 md:py-4`}
    >
      <div className="space-y-2 md:space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.isUser
                ? "border border-gray-300 bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 max-w-fit ml-auto text-sm md:text-base"
                : "text-gray-800 mr-8 md:mr-12 text-sm md:text-base"
            }`}
          >
            {message.isUser ? (
              <p>{message.text}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            )}
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-800 mr-8 md:mr-12">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}
