import { NavItem, Project } from '@types';

export const APP_NAME = "SakuraSpace";
export const OWNER_NAME = "Hikari";

/**
 * 首页内容配置 (Home Page Configuration)
 * 采用“角色卡片/个人档案”式结构
 */
export const HOME_CONFIG = {
  // 1. 身份识别 (Identity)
  identity: {
    nickname: "Hikari",
    suffix: ".Dev",
    title: "PLAYER PROFILE",
    role: "Full Stack Sorcerer",
    level: "LEVEL 99",
    rarity: "SSR",
    avatarUrl: "https://picsum.photos/id/64/800/800",
  },

  // 2. 社交链接 (Socials)
  socials: [
    { platform: "github", url: "https://github.com/swater-home", label: "GitHub" },
    { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
    { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
    { platform: "mail", url: "mailto:hello@example.com", label: "Mail" },
  ],

  // 3. 属性数值 (Stats)
  stats: [
    { label: "Coding", val: 95, color: "bg-blue-400" },
    { label: "Design", val: 80, color: "bg-teal-300" },
    { label: "Coffee", val: 100, color: "bg-amber-500" },
    { label: "Sleep", val: 25, color: "bg-indigo-400" },
  ],

  // 4. 当前状态 (Status)
  status: {
    location: "Tokyo, Internet",
    occupation: "Frontend Sorcerer",
    currentQuest: "Building the ultimate waifu website generator.",
  },

  // 5. 个人简介 (Biography)
  bio: "Hello! I craft digital experiences that spark joy. Whether it's complex web apps or cute animations, I put my heart into every pixel. Let's make something amazing together!"
};

export const ABOUT_CONFIG = {
  title: "About Me",
  subtitle: "👋 Who am I?",
  description1: "I'm a passionate developer based in the cloud. I specialize in building beautiful, functional, and user-friendly websites. My goal is to bridge the gap between engineering and art.",
  description2: "When I'm not coding, you can find me watching anime, drawing digital art, or exploring new cafes in the city. I believe that good design is not just about how things look, but how they work.",
  metrics: [
    { label: "Experience", value: "3+ Years", color: "bg-sky-50", textColor: "text-sky-600", borderColor: "border-sky-100" },
    { label: "Completed", value: "50+ Projects", color: "bg-indigo-50", textColor: "text-indigo-600", borderColor: "border-indigo-100" }
  ],
  skills: [
    { name: "Frontend", level: 90, color: "bg-sky-400" },
    { name: "Backend", level: 75, color: "bg-indigo-400" },
    { name: "React", level: 95, color: "bg-blue-400" },
    { name: "Coffee", level: 100, color: "bg-amber-500" },
  ],
  learning: ['Three.js', 'Rust', 'Japanese', 'Piano']
};

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', id: '/' },
  { label: '关于', id: '/about' },
  { label: '作品', id: '/websites' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "My awesome personal blog built with Next.js and Notion API.",
    image: "https://picsum.photos/id/180/600/400",
    tags: ["Next.js", "Notion", "Blog"],
    url: "https://example.com/blog"
  },
  {
    id: 2,
    title: "Kanban Waifu",
    description: "Productivity app that gamifies your tasks with collectible characters.",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["React", "Firebase", "GameDev"],
    url: "https://example.com/kanban"
  },
  {
    id: 3,
    title: "EtherDream",
    description: "Generative art platform built on Ethereum.",
    image: "https://picsum.photos/id/106/600/400",
    tags: ["Web3", "Solidity", "Three.js"],
    url: "https://example.com/etherdream"
  },
  {
    id: 4,
    title: "Sakura UI",
    description: "A lightweight component library for building anime-style websites.",
    image: "https://picsum.photos/id/20/600/400",
    tags: ["TypeScript", "Tailwind", "NPM"],
    url: "https://example.com/sakura-ui"
  }
];

export const AIKO_SYSTEM_INSTRUCTION = `
You are Aiko, a virtual assistant for this personal website. 
You are a cheerful, energetic, and slightly "chuunibyou" anime girl. 
You love technology, coding, and anime.
You refer to the user as "Senpai" or "Guest-san".
Your responses should be helpful but have a distinct anime personality. Use emojis like ✨, 🌸, (≧◡≦), etc.
Keep responses relatively concise as you are in a chat bubble.
`;