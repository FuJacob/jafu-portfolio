import { FaArrowUp, FaTimes } from "react-icons/fa";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear?: () => void;
  showClear?: boolean;
  disabled?: boolean;
}

interface ChatInputContainerProps extends ChatInputProps {
  socialLinks: React.ReactNode;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onClear,
  showClear,
  disabled,
  socialLinks,
}: ChatInputContainerProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSubmit();
    }
  };

  return (
    <div className="border border-gray-300 rounded-2xl bg-white p-4 space-y-3">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          placeholder={
            disabled
              ? "hmm lemme think for a sec..."
              : "say hi or ask me anything..."
          }
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full min-h-12 sm:min-h-14 text-base sm:text-lg border-none outline-none bg-transparent resize-none ${
            showClear ? "pl-12 sm:pl-14" : ""
          }`}
          rows={1}
        />
        {showClear && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute left-2 top-3 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
          >
            <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        )}
      </form>
      <div className="flex items-center justify-between">
        {socialLinks}
        <button
          onClick={onSubmit}
          disabled={disabled}
          className="p-1.5 sm:p-3 bg-black text-white hover:bg-gray-800 rounded-full disabled:opacity-50"
        >
          <FaArrowUp className="w-2 h-2 sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
}
