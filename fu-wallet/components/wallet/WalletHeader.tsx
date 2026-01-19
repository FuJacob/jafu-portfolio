"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <header className={cn("py-4", className)}>
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
              aria-label="Twitter/X"
            >
              <Twitter className="h-4 w-4" />
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
