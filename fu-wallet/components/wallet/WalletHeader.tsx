"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface WalletHeaderProps {
  name: string;
  education: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
  };
  calendarLink: string;
  className?: string;
}

export function WalletHeader({
  name,
  education,
  socials,
  calendarLink,
  className,
}: WalletHeaderProps) {
  return (
    <header className={cn("py-2", className)}>
      <div className="flex justify-between">
        {/* Left: Name + Education */}
        <div>
          <h1 className="text-headline text-foreground">{name}</h1>
          <p className="text-body text-muted-foreground">{education}</p>
        </div>

        {/* Right: Socials + Book a meeting - aligned properly */}
        <div className="flex flex-col items-end justify-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <div className="w-px h-3 bg-border mx-1" />
            <ThemeToggle />
          </div>
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-caption text-muted-foreground hover:text-foreground transition-colors"
          >
            book a meeting →
          </a>
        </div>
      </div>
    </header>
  );
}
