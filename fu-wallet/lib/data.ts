import {
  AboutCard,
  ExperienceCard,
  ProjectCard,
  ChatCard,
  WalletSection,
} from "./types";

export const aboutCard: AboutCard = {
  id: "about-me",
  type: "about",
  section: "about",
  colors: { light: "#dbeafe", dark: "#1e40af" },
  name: "Jacob Fu",
  avatar: "/inner-content/me.JPG",
  education: {
    school: "University of Waterloo",
    program: "Open to Internships",
    logo: "/companies/waterloo.png",
  },
  status: "UWaterloo Computer Science",
  interests: ["Infrastructure", "Distributed Systems", "Building Products"],
  personalFacts: [
    "I'm Jacob, a CS student at Waterloo. I like building products that people actually use.",
    "Previously interned at HubSpot and Bridgewell.",
    "When I'm not shipping code, I'm playing volleyball or badminton. I'm also a huge Naruto fan, but we don't talk about Boruto.",
  ],
  calendarLink: "https://calendar.app.google/QCosZGTnWDNeiCuz6",
  socials: {
    linkedin: "https://www.linkedin.com/in/fujacob/",
    github: "https://github.com/fujacob/",
    twitter: "https://x.com/fujacobb/",
    email: "jjacobfu@gmail.com",
  },
  media: {
    type: "image",
    src: "/inner-content/me.png",
    caption: "Me in my natural habitat",
  },
};

export const experiences: ExperienceCard[] = [
  {
    id: "exp-hubspot-2",
    type: "experience",
    section: "experiences",
    company: "HubSpot",
    logo: "/companies/hubspot.png",
    role: "Software Engineering Intern (AI-Editor Platform)",
    period: "Winter 2026",
    description:
      "Building the next-gen Content Editor on the AI Platform team. We're generating complex layouts in real-time from simple text prompts.\n\nI shipped a keyboard-first interaction layer using Redux middleware. It cut content assembly time by 30% for our beta users.",
    bullets: [],
    colors: { light: "#ffedd5", dark: "#ea580c" },
    media: {
      type: "image",
      src: "/inner-content/content-editor.png",
      caption: "HubSpot's current Editor interface",
    },
  },
  {
    id: "exp-kaimz",
    type: "experience",
    section: "experiences",
    company: "Kaimz Inc",
    logo: "/companies/kaimz.png",
    role: "Software Engineering Intern (Security Platform)",
    period: "Fall 2025",
    description:
      "Built a security agent in Go that monitors logs across 20+ devices. It uses JWT auth and pipes everything to S3 for storage.\n\nAlso shipped a RAG chatbot so analysts can query security history. They investigate incidents 70% faster now.",
    bullets: [],
    colors: { light: "#ede9fe", dark: "#7c3aed" },
  },
  {
    id: "exp-hubspot-1",
    type: "experience",
    section: "experiences",
    company: "HubSpot",
    logo: "/companies/hubspot.png",
    role: "Software Engineering Intern (Sales Workspace)",
    period: "Summer 2025",
    description:
      "Worked on the Sales Workspace used by 200k+ daily reps. I sped up page loads by 12% using some aggressive GraphQL caching.\n\nCrushed 45+ support tickets and optimized data fetching patterns. Payload sizes dropped by 35%.",
    bullets: [],
    colors: { light: "#ffedd5", dark: "#ea580c" },
    media: {
      type: "image",
      src: "/inner-content/sales-workspace.png",
      caption: "Sales Workspace dashboard",
    },
  },
  {
    id: "exp-bridgewell",
    type: "experience",
    section: "experiences",
    company: "Bridgewell Financial",
    logo: "/companies/bridgewell.png",
    role: "Software Engineering Intern (Client Onboarding)",
    period: "Winter 2025",
    description:
      "Built the REST APIs that handle document uploads and validation. It cut client onboarding time by 35% and killed a lot of manual work.\n\nAlso shipped an automated email scheduler. Document completion rates jumped 28% immediately.",
    bullets: [],
    colors: { light: "#e0f2fe", dark: "#0284c7" },
    media: {
      type: "image",
      src: "/inner-content/bridgewell.png",
      caption: "Client onboarding dashboard",
    },
  },
];

export const projects: ProjectCard[] = [
  {
    id: "proj-pickle",
    type: "project",
    section: "projects",
    title: "Pickle",
    tagline: "AI Streamer Companion",
    image: "/projects/pickle.jpg",
    description:
      "A real-time AI co-host for Twitch streamers. It watches the screen, reads chat, and actually talks back.\n\nBuilt with FastAPI and Electron. I used a hybrid memory system to keep conversation latency under 1.5s.",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/FuJacob/nexhacks",
    devpostUrl: "https://devpost.com/software/pickle-0faw9d",
    colors: { light: "#dcfce7", dark: "#16a34a" },
    media: {
      type: "youtube",
      src: "YOBwplgd4hc",
      caption: "Pickle demo at NexHacks",
    },
  },
  {
    id: "proj-rbveal",
    type: "project",
    section: "projects",
    title: "RBveal",
    tagline: "Phishing Simulator",
    image: "/projects/rbveal.png",
    description:
      "A multi-stage simulator that demos modern phishing scams. We took home 1st place at UofTHacks 2025.\n\nI built the voice agent using Deepgram and Twilio. It holds full conversations with victims with under 1.2s latency.",
    award: "UofTHacks Winner, RBC 1st Place Prize ($1,000)",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/FuJacob/rbveal",
    colors: { light: "#f3e8ff", dark: "#9333ea" },
    media: {
      type: "youtube",
      src: "v8duvEudLiU",
      caption: "RBveal demo at UofTHacks",
    },
  },
  {
    id: "proj-fairfi",
    type: "project",
    section: "projects",
    title: "FairFi",
    tagline: "Call-Agent Bias Detection",
    image: "/projects/fairfi.jpg",
    description:
      "Detects bias in call center agents in real-time. Won P&G's top prize at DeltaHacks 2025.\n\nUses Twilio and Cohere to analyze voice streams. We dump interaction patterns into MongoDB to flag issues.",
    award: "DeltaHacks Winner, P&G 1st Place ($750)",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/fujacob/fairfi",
    devpostUrl: "https://devpost.com/software/fairfi",
    colors: { light: "#ffedd5", dark: "#ea580c" },
  },
  {
    id: "proj-metroapocalypse",
    type: "project",
    section: "projects",
    title: "Metro Apocalypse",
    tagline: "Zombie Tag .IO Game",
    image: "/projects/metroapocalypse.png",
    description:
      "A multiplayer zombie tag game built on Modd.io. It blew up to 248k+ users and 4.2M plays.\n\nMonetized via Patreon and microtransactions. Generated over $2,500 CAD while I was in high school.",
    technologies: [],
    bullets: [],
    liveUrl: "https://www.patreon.com/amuletio",
    colors: { light: "#ecfccb", dark: "#65a30d" },
    media: {
      type: "image",
      src: "/inner-content/metro-apocalypse.png",
      caption: "Metro Apocalypse gameplay",
    },
  },
  {
    id: "proj-uwshuffle",
    type: "project",
    section: "projects",
    title: "UW Shuffle",
    tagline: "Course Scheduler",
    image: "/projects/uw-shuffle.png",
    description:
      "A scheduler for Waterloo students that brute-forces the best timetable. Live at uwshuffle.com.\n\nBuilt with Next.js. Hundreds of students use it every term to save their sanity.",
    technologies: [],
    bullets: [],
    liveUrl: "https://uwshuffle.com",
    colors: { light: "#fef3c7", dark: "#d97706" },
    media: { type: "youtube", src: "TtSnpr8bm3E", caption: "UW Shuffle demo" },
  },
];

export const chatCard: ChatCard = {
  id: "chat-me",
  type: "chat",
  section: "chat",
  title: "Chat with me",
  subtitle: "Ask me anything about my experience",
  colors: { light: "#e0e7ff", dark: "#4f46e5" },
};

export const walletSections: WalletSection[] = [
  { id: "about", label: "About", cards: [aboutCard] },
  { id: "experiences", label: "Experience", cards: experiences },
  { id: "projects", label: "Projects", cards: projects },
  { id: "chat", label: "Chat", cards: [chatCard] },
];
