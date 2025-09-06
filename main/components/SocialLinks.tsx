import { FaLinkedinIn, FaGithub, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

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
    <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">{children}</div>
    <span className="text-xs sm:text-sm">{label}</span>
  </a>
);

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-1.5">
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
      <Icon link="https://calendar.app.google/QCosZGTnWDNeiCuz6" label="book meeting">
        <FaCalendarAlt />
      </Icon>
    </div>
  );
}
