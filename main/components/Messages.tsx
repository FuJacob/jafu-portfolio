interface Message {
  text: string;
  isUser: boolean;
}

interface MessagesProps {
  messages: Message[];
  isLoading?: boolean;
  fullHeight?: boolean;
}

export default function Messages({ messages, isLoading, fullHeight = true }: MessagesProps) {
  if (messages.length === 0) return null;

  return (
    <div className={`${fullHeight ? 'h-full' : ''} overflow-y-auto py-2 sm:py-4`}>
      <div className="space-y-2 sm:space-y-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`animate-in slide-in-from-bottom duration-500 ${
              message.isUser 
                ? 'border border-gray-300 rounded-full bg-white text-gray-700 px-4 sm:px-6 py-2 sm:py-3 max-w-fit ml-auto text-sm sm:text-base hover:shadow-md hover:scale-[1.02] transition-all duration-300' 
                : 'text-gray-800 mr-8 sm:mr-12 text-sm sm:text-base animate-in fade-in duration-600'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {message.isUser ? (
              <p>{message.text}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: message.text }} />
            )}
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-800 mr-8 sm:mr-12 animate-in fade-in duration-300">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
}