import { NavItem, Project } from '@types';
import { ViewState } from '@types';

export const APP_NAME = "SakuraSpace";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: ViewState.HOME },
  { label: 'About', id: ViewState.ABOUT },
  { label: 'Gallery', id: ViewState.GALLERY },
  // { label: 'Blog', id: ViewState.BLOG },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neon Genesis Code",
    description: "A cyberpunk-themed IDE theme extension for VS Code with over 10k downloads.",
    image: "https://picsum.photos/id/133/600/400",
    tags: ["VS Code", "Theme", "Design"]
  },
  {
    id: 2,
    title: "Kanban Waifu",
    description: "Productivity app that gamifies your tasks with collectible characters.",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["React", "Firebase", "GameDev"]
  },
  {
    id: 3,
    title: "EtherDream",
    description: "Generative art platform built on Ethereum.",
    image: "https://picsum.photos/id/106/600/400",
    tags: ["Web3", "Solidity", "Three.js"]
  },
  {
    id: 4,
    title: "Sakura UI",
    description: "A lightweight component library for building anime-style websites.",
    image: "https://picsum.photos/id/20/600/400",
    tags: ["TypeScript", "Tailwind", "NPM"]
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