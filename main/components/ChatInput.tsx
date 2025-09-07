
interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

interface ChatInputContainerProps extends ChatInputProps {
  socialLinks: React.ReactNode;
}

export default function ChatInput({
  value,
  onChange,
  onSubmit,
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
              : "start by sending a message here..."
          }
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full min-h-12 sm:min-h-14 text-base sm:text-lg border-none outline-none bg-transparent resize-none"
          rows={1}
        />
      </form>
      {socialLinks}
    </div>
  );
}
