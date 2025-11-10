import ProjectCard from "@/components/shared/ProjectCard";

interface Project {
  title: string;
  description: string;
  award?: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    title: "RBveal – Multi-Stage Phishing Simulator",
    award: "UofTHacks Winner – RBC 1st Place Prize ($1,000)",
    description:
      "Multi-stage phishing simulator with dynamic email generation, banking interface simulations, and AI-powered call agents.",
    technologies: ["Next.js", "React", "WebSockets", "OpenAI", "Twilio"],
    highlights: [],
    image: "/projects/rbveal.png",
    githubUrl: "https://github.com/FuJacob/rbveal",
  },
  {
    title: "MapleTenders – Gov. Contract Discovery Portal",
    description:
      "B2B platform for discovering government tender opportunities with AI-powered semantic search across 2400+ daily tenders from 30+ sources.",
    technologies: ["Python", "FastAPI", "Elasticsearch", "Docker", "AWS"],
    highlights: [],
    image: "/projects/mapletenders.png",
    liveUrl: "https://mapletenders.ca",
    githubUrl: "https://github.com/FuJacob/mapletenders",
  },
  {
    title: "Cleo – Personal AI Assistant for macOS",
    description:
      "macOS menu bar AI assistant for instant explanations of selected text with focus tracking and personalized knowledge base using local LLM inference.",
    technologies: ["Swift", "SwiftUI", "Ollama", "SQLite"],
    highlights: [],
    image: "/projects/cleo.png",
    githubUrl: "https://github.com/fujacob/cleo",
  },
  {
    title: "FairFi – Bias Detection for Call-Agents",
    award: "DeltaHacks Winner – Procter & Gamble 1st Place Prize ($750)",
    description:
      "Web app analyzing financial service employee bias in real-time using Twilio and Cohere, with insights stored in MongoDB.",
    technologies: ["Next.js", "React", "Twilio", "Cohere", "MongoDB"],
    highlights: [],
    image: "/projects/fairfi.jpg",
    githubUrl: "https://github.com/fujacob/fairfi",
  },
  {
    title: "LeetDance – LeetCode But For TikTok Dances",
    description:
      "Full-stack TikTok dance challenges platform with real-time feedback system using MediaPipe and OpenCV for timestamped critiques.",
    technologies: ["Next.js", "FastAPI", "OpenCV", "MongoDB"],
    highlights: [],
    image: "/projects/leetdance.png",
    githubUrl: "https://github.com/FuJacob/leetdance",
  },
  {
    title: "Metro Apocalypse – Zombie Tag .IO Game",
    award: "248k+ users, 4.2M+ plays, $2,500+ CAD revenue",
    description:
      "Multiplayer HTML5 .io game using Modd.io Game Engine with Patreon subscriptions and in-game microtransactions monetization.",
    technologies: ["HTML5", "JavaScript", "Modd.io"],
    highlights: [],
    image: "/projects/metroapocalypse.png",
    liveUrl: "https://www.patreon.com/amuletio",
  },
  {
    title: "AnonAlyze – Social Media Cyber-risk Analyzer",
    award: "CTRL+HACK+DEL Winner – 1Password Best Security Hack",
    description:
      "Full-stack web app using OpenAI and Apify APIs to identify users' privacy vulnerabilities from social media data.",
    technologies: ["Next.js", "React", "OpenAI", "Apify"],
    highlights: [],
    image: "/projects/anonalyze.png",
    githubUrl: "https://github.com/fujacob/AnonAlyze",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
