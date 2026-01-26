import { NavItem, Project } from '@types';
import { ViewState } from '@types';

export const APP_NAME = "SakuraSpace";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: ViewState.HOME },
  { label: 'About', id: ViewState.ABOUT },
  { label: 'Websites', id: ViewState.WEBSITES },
  // { label: 'Blog', id: ViewState.BLOG },
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