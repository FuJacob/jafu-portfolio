import { Input } from "@/components/ui/input";
import { FaArrowUp, FaTimes } from "react-icons/fa";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onClear?: () => void;
  showClear?: boolean;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onClear,
  showClear,
  disabled,
}: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        type="text"
        placeholder={
          disabled
            ? "hmm lemme think for a sec..."
            : "say hi or ask me anything..."
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full h-12 sm:h-14 rounded-full text-base sm:text-lg ${
          showClear ? "pl-14 sm:pl-16 pr-12" : "pl-4 sm:pl-6 pr-12"
        }`}
      />
      {showClear && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
        >
          <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      )}
      <button
        type="submit"
        disabled={disabled}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
      >
        <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </form>
  );
}
