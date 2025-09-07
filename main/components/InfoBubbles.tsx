import { FaUser, FaBriefcase, FaRocket, FaBolt, FaEnvelope } from "react-icons/fa";

interface InfoBubbleProps {
  text: string;
  onClick: () => void;
}

const InfoBubble = ({ text, onClick, icon }: InfoBubbleProps & { icon: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-full bg-gray-50 text-gray-600 hover:text-gray-800 hover:border-gray-300 hover:bg-white hover:scale-105 hover:shadow-md transition-all duration-300 text-xs cursor-pointer animate-in zoom-in"
  >
    <span className="w-3 h-3 flex items-center justify-center">{icon}</span>
    {text}
  </button>
);

interface InfoBubblesProps {
  onBubbleClick: (message: string) => void;
}

export default function InfoBubbles({ onBubbleClick }: InfoBubblesProps) {
  const bubbles = [
    { text: "about", message: "tell me about yourself", icon: <FaUser /> },
    { text: "work", message: "where have you worked previously", icon: <FaBriefcase /> },
    { text: "projects", message: "what kind of projects have you worked on", icon: <FaRocket /> },
    { text: "skills", message: "what are your technical skills", icon: <FaBolt /> },
    { text: "contact", message: "how can i contact you", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex gap-2 sm:gap-3 overflow-x-auto justify-center px-2 sm:px-0 animate-in slide-in-from-bottom duration-500 delay-300 py-1">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="animate-in zoom-in duration-400"
          style={{ animationDelay: `${400 + index * 100}ms` }}
        >
          <InfoBubble
            text={bubble.text}
            icon={bubble.icon}
            onClick={() => onBubbleClick(bubble.message)}
          />
        </div>
      ))}
    </div>
  );
}
