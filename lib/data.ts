import {
  AboutCard,
  ExperienceCard,
  ProjectCard,
  ChatCard,
  WalletSection,
} from "./types";

export const headerInfo = {
  name: "Jacob Fu",
  subtitle: "UWaterloo CS",
  icon: "/inner-content/me.png",
  calendarLink: "https://calendar.app.google/QCosZGTnWDNeiCuz6",
  socials: {
    linkedin: "https://www.linkedin.com/in/fujacob/",
    github: "https://github.com/fujacob/",
    twitter: "https://x.com/fujacobb/",
    email: "jjacobfu@gmail.com",
  },
};

export const personalCard: AboutCard = {
  id: "about-personal",
  type: "about",
  section: "about",
  colors: { light: "#ffe4f1", dark: "#db2777" },
  name: "Jacob Fu",
  avatar: "/inner-content/random.jpeg",
  status: "Open to Internships",
  summary:
    "I build products with clear user impact. Outside work, I play volleyball and badminton. I watch Naruto.",
  media: {
    type: "image",
    src: "/inner-content/me.png",
    caption: "Jacob Fu",
  },
};

export const educationCard: AboutCard = {
  id: "about-education",
  type: "about",
  section: "about",
  colors: { light: "#fff1b8", dark: "#d97706" },
  name: "University of Waterloo",
  avatar: "/companies/waterloo.png",
  education: {
    school: "University of Waterloo",
    program: "Computer Science",
    logo: "/companies/waterloo.png",
  },
  status: "Bachelor of Computer Science",
  summary:
    "I study computer science at Waterloo. I focus on infrastructure, distributed systems, and product delivery. I interned at HubSpot, Kaimz, and Bridgewell.",
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
    summary:
      "Built AI editor flows that turn prompts into structured, brand-safe modules.",
    description:
      "I worked on HubSpot's AI Platform team for the Content Editor.\n\nI owned orchestration across prompt parsing, module generation, and validation. The flow improved consistency and speed for marketing teams building production pages.",
    bullets: [],
    colors: { light: "#ffd8b5", dark: "#f97316" },
    media: {
      type: "image",
      src: "/inner-content/content-editor.png",
      caption: "HubSpot Content Editor UI",
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
    summary:
      "Built a Go security agent across 20+ devices. Shipped a RAG assistant that cut investigation time by 70%.",
    description:
      "I built a Go agent that collected logs from 20+ devices.\n\nI added JWT auth and streamed records to S3. I shipped a RAG assistant for analysts. Incident investigation time dropped 70%.",
    bullets: [],
    colors: { light: "#e9d5ff", dark: "#9333ea" },
  },
  {
    id: "exp-hubspot-1",
    type: "experience",
    section: "experiences",
    company: "HubSpot",
    logo: "/companies/hubspot.png",
    role: "Software Engineering Intern (Sales Workspace)",
    period: "Summer 2025",
    summary:
      "Improved Sales Workspace performance. Page load speed increased 12%, payload size dropped 35%.",
    description:
      "I worked on Sales Workspace used by 200k+ reps each day.\n\nI tuned GraphQL caching and query patterns, which improved load speed by 12%. I resolved 45+ support tickets and reduced payload size by 35%.",
    bullets: [],
    colors: { light: "#cffafe", dark: "#0891b2" },
    media: {
      type: "image",
      src: "/inner-content/sales-workspace.png",
      caption: "Sales Workspace dashboard view",
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
    summary:
      "Built onboarding APIs and document checks. Added email scheduling and increased document completion by 28%.",
    description:
      "I built REST APIs for document upload and validation.\n\nThe new flow cut onboarding time by 35%. I shipped automated email scheduling, which increased completion rates by 28%.",
    bullets: [],
    colors: { light: "#ecfccb", dark: "#65a30d" },
    media: {
      type: "image",
      src: "/inner-content/bridgewell.png",
      caption: "Client onboarding workflow",
    },
  },
];

export const projects: ProjectCard[] = [
  {
    id: "proj-pickle",
    type: "project",
    section: "projects",
    title: "Pickle",
    tagline: "Real-Time AI Co-Host",
    image: "/projects/pickle.jpg",
    summary:
      "Built a real-time AI co-host for streamers. Reads chat and screen context. Response latency stayed under 1.5 seconds.",
    description:
      "I built a co-host for Twitch streamers.\n\nThe app reads chat, tracks on-screen context, and responds in real time. I used FastAPI and Electron with hybrid memory. Median latency stayed under 1.5 seconds.",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/FuJacob/nexhacks",
    devpostUrl: "https://devpost.com/software/pickle-0faw9d",
    colors: { light: "#ccfbf1", dark: "#0f766e" },
    media: {
      type: "youtube",
      src: "YOBwplgd4hc",
      caption: "Pickle demo video",
    },
  },
  {
    id: "proj-rbveal",
    type: "project",
    section: "projects",
    title: "RBveal",
    tagline: "Voice Phishing Simulator",
    image: "/projects/rbveal.png",
    summary:
      "Built a multi-stage phishing simulator. Won RBC 1st place at UofTHacks 2025. Voice latency stayed under 1.2 seconds.",
    description:
      "We built a phishing simulator for live scam demos.\n\nThe project won RBC 1st place at UofTHacks 2025. I built the voice agent with Deepgram and Twilio. End-to-end voice latency stayed under 1.2 seconds.",
    award: "UofTHacks Winner, RBC 1st Place Prize ($1,000)",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/FuJacob/rbveal",
    colors: { light: "#fce7f3", dark: "#be185d" },
    media: {
      type: "youtube",
      src: "v8duvEudLiU",
      caption: "RBveal demo video",
    },
  },
  {
    id: "proj-mapletenders",
    type: "project",
    section: "projects",
    title: "MapleTenders",
    tagline: "AI Tender Search Platform",
    image: "/projects/mapletenders.png",
    summary:
      "Built a government tender search platform. ETL ingests 2400+ tenders per day from 30+ sources.",
    description:
      "I built a platform for Canadian government contract search.\n\nThe ETL pipeline ingests 2400+ tenders each day from 30+ federal, provincial, and municipal sources into PostgreSQL. I deployed on AWS EC2 with Docker and NGINX. I added semantic search with Sentence Transformers and Elasticsearch.",
    technologies: [],
    bullets: [],
    githubUrl: "https://github.com/FuJacob/mapletenders",
    colors: { light: "#ffe4e6", dark: "#e11d48" },
  },
];

export const chatCard: ChatCard = {
  id: "chat-me",
  type: "chat",
  section: "chat",
  title: "Ask About My Work",
  subtitle: "Direct answers on projects and intern roles",
  summary:
    "Ask about architecture, stack choices, and tradeoffs. You get concise answers with examples and measured outcomes.",
  colors: { light: "#ddd6fe", dark: "#7c3aed" },
};

export const walletSections: WalletSection[] = [
  { id: "about", label: "About Me", cards: [personalCard, educationCard] },
  { id: "experiences", label: "Work", cards: experiences },
  { id: "projects", label: "Projects", cards: projects },
  { id: "chat", label: "Ask Me", cards: [chatCard] },
];
