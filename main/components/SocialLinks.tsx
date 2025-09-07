import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaTrash,
  FaArrowUp,
} from "react-icons/fa";

const Icon = ({
  link,
  children,
  label,
}: {
  link: string;
  children: React.ReactNode;
  label: string;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full bg-white text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-all"
  >
    <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
      {children}
    </div>
    <span className="text-xs sm:text-sm">{label}</span>
  </a>
);

const Button = ({
  onClick,
  children,
  label,
  disabled = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  label: string;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full bg-white text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-all ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
      {children}
    </div>
    <span className="text-xs sm:text-sm">{label}</span>
  </button>
);

interface ActionButtonsProps {
  onClearChat?: () => void;
  canClearChat?: boolean;
  onSubmit?: () => void;
  disabled?: boolean;
}

export default function ActionButtons({
  onClearChat,
  canClearChat = false,
  onSubmit,
  disabled = false,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-between gap-1.5">
      <Icon link="https://www.linkedin.com/in/fujacob/" label="linkedin">
        <FaLinkedinIn />
      </Icon>
      <Icon link="https://github.com/fujacob/" label="github">
        <FaGithub />
      </Icon>
      <Icon link="https://x.com/fujacobb/" label="X/twitter">
        <div className="text-xs font-black">𝕏</div>
      </Icon>
      <Icon link="mailto:jjacobfu@gmail.com" label="email">
        <FaEnvelope />
      </Icon>
      {onClearChat && (
        <Button
          onClick={onClearChat}
          label="clear chat"
          disabled={!canClearChat}
        >
          <FaTrash />
        </Button>
      )}
      {onSubmit && (
        <button
          onClick={onSubmit}
          disabled={disabled}
          className="p-1.5 sm:p-3 bg-black text-white hover:bg-gray-800 rounded-full disabled:opacity-50"
        >
          <FaArrowUp className="w-2 h-2 sm:w-3 sm:h-3" />
        </button>
      )}
    </div>
  );
}
