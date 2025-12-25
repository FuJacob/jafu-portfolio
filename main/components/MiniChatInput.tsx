import { FaPaperPlane } from "react-icons/fa";

interface MiniChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export default function MiniChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
}: MiniChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-1">
      <div className="relative">
        <input
          type="text"
          placeholder={disabled ? "thinking..." : "ask me anything..."}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 hover:border-black dark:hover:border-gray-400 focus:outline-none focus:border-black dark:focus:border-gray-400 transition"
        />
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <FaPaperPlane className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
