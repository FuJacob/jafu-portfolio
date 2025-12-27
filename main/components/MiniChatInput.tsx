import { FaArrowUp } from "react-icons/fa";

interface MiniChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export default function MiniChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
}: MiniChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        onSubmit();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-1">
      <div className="relative">
        <textarea
          placeholder={isLoading ? "thinking..." : "ask me anything..."}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          className="w-full px-3 py-2 pr-10 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 hover:border-black dark:hover:border-gray-400 focus:outline-none focus:border-black dark:focus:border-gray-400 transition resize-none overflow-hidden min-h-[40px] max-h-[200px]"
          style={{ height: "auto" }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = Math.min(target.scrollHeight, 200) + "px";
          }}
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="absolute right-2 top-2 flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 hover:bg-black dark:hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          <FaArrowUp className="w-3 h-3" />
        </button>
      </div>
    </form>
  );
}
