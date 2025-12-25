import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

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
    aria-label={label}
    className="flex items-center justify-center w-8 h-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-black dark:hover:border-gray-400 transition-all duration-300"
  >
    <div className="w-4 h-4 flex items-center justify-center">{children}</div>
  </a>
);

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-1.5">
      <Icon link="https://www.linkedin.com/in/fujacob/" label="linkedin">
        <FaLinkedinIn />
      </Icon>
      <Icon link="https://github.com/fujacob/" label="github">
        <FaGithub />
      </Icon>
      <Icon link="https://x.com/fujacobb/" label="X">
        <div className="text-sm font-black">𝕏</div>
      </Icon>
      <Icon link="mailto:jjacobfu@gmail.com" label="email">
        <FaEnvelope />
      </Icon>
      <ThemeToggle />
    </div>
  );
}
