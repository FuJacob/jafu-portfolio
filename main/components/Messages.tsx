interface Message {
  text: string;
  isUser: boolean;
}

interface MessagesProps {
  messages: Message[];
  isLoading?: boolean;
}

export default function Messages({ messages, isLoading }: MessagesProps) {
  if (messages.length === 0) return null;

  return (
    <div className="h-full overflow-y-auto py-2 sm:py-4">
      <div className="space-y-2 sm:space-y-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${
              message.isUser 
                ? 'border border-gray-300 rounded-full bg-white text-gray-700 px-4 sm:px-6 py-2 sm:py-3 max-w-fit ml-auto text-sm sm:text-base' 
                : 'text-gray-800 mr-8 sm:mr-12 text-sm sm:text-base'
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
          <div className="text-gray-800 mr-8 sm:mr-12">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}