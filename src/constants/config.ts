import { NavItem, Project } from '@types';

export const APP_NAME = "SakuraSpace";
export const OWNER_NAME = "Hikari";

export const SITE_CONFIG = {
  socials: {
    // qq: "https://wpa.qq.com/msgrd?v=3&uin=123456789&site=qq&menu=yes",
    github: "https://github.com/swater-home",
    mail: "xiaowansheng@foxmail.com",
  },
};

const ABOUT_IDENTITY = {
  avatarUrl: "./avatar.jpg",
  rarity: "",
  nickname: "Swater",
  suffix: "",
  title: "构建稳定且有体验感的 Web 产品",
  tags: ["全栈开发工程师", "不知道什么等级的开发者"],
};

const ABOUT_SOCIALS = [
  { platform: "github", url: "https://github.com/swater-home", label: "GitHub" },
  { platform: "mail", url: "mailto:hello@example.com", label: "邮箱" },
];

const ABOUT_STATUS = {
  occupation: "全干工程师",
  industry: "智慧物流/系统集成/工业自动化",
  location: "云南昆明",
  currentQuest: "持续学习中...",
};
const ABOUT_METRICS = [
  { label: "经验", value: "3 年以上", textColor: "text-sky-600" },
  { label: "已完成", value: "10+ 个项目", textColor: "text-indigo-600" },
  { label: "开源", value: "1 个项目", textColor: "text-emerald-600" },
];


const ABOUT_SUMMARY = "一名想提前退休的全栈开发者。";

const ABOUT_DESCRIPTIONS = [
  "主要做后端开发相关的东西，前端也会写一些。",
  "平时喜欢研究技术栈、写点小工具，顺便做一些有意思的项目。",
  "半个二次元，比较宅。",
  "空闲时间偶尔刷番、刷剧、玩玩手游或者在 Steam 上打打游戏。"
];


const ABOUT_CAPABILITIES = {
  skills: [
    { name: "后端", level: 75, color: "bg-indigo-500" },
    { name: "前端", level: 65, color: "bg-sky-500" },
    { name: "Linux", level: 60, color: "bg-slate-500" },
    { name: "Java", level: 75, color: "bg-red-500" },
    { name: "Go", level: 50, color: "bg-cyan-500" },
    { name: "Node", level: 50, color: "bg-green-500" },
    { name: "Python", level: 40, color: "bg-emerald-500" },
    { name: "React", level: 70, color: "bg-blue-500" },
    { name: "Vue", level: 65, color: "bg-emerald-500" },
    { name: "Angular", level: 30, color: "bg-rose-500" },
  ],
};

const ABOUT_LEARNING = {
  tags: ["Go", "Python", "Rust", "英语"],
};


/**
 * 关于页配置 (About Page Configuration)
 * 与页面区块一一对应：hero / profile / statusSnapshot / capabilities / learning
 */
export const ABOUT_CONFIG = {
  hero: {
    identity: ABOUT_IDENTITY,
    socials: ABOUT_SOCIALS,
  },
  profile: {
    summary: ABOUT_SUMMARY,
    descriptions: ABOUT_DESCRIPTIONS,
  },
  statusSnapshot: {
    occupation: ABOUT_STATUS.occupation,
    industry: ABOUT_STATUS.industry,
    location: ABOUT_STATUS.location,
    currentQuest: ABOUT_STATUS.currentQuest,
    metrics: ABOUT_METRICS,
  },
  capabilities: ABOUT_CAPABILITIES,
  learning: ABOUT_LEARNING,
};

export const NAV_ITEMS: NavItem[] = [
  { label: '关于', id: '/' },
  { label: '作品', id: '/websites' },
];

export const FEATURED_PROJECTS: Project[] = [];

export const COMMUNITY_PROJECTS: Project[] = [
  {
    id: 1,
    title: "EtherDream",
    description: "构建在以太坊上的生成艺术平台。支持 NFT 铸造和交易。",
    image: "https://picsum.photos/id/106/600/400",
    tags: ["Web3", "Solidity", "Three.js"],
    url: "https://example.com/etherdream"
  },
  {
    id: 2,
    title: "Sakura UI",
    description: "一个用于构建动漫风格网站的轻量级组件库。提供丰富的组件和主题。",
    image: "https://picsum.photos/id/20/600/400",
    tags: ["TypeScript", "Tailwind", "NPM"],
    url: "https://example.com/sakura-ui"
  },
  {
    id: 3,
    title: "代码片段管理器",
    description: "一个简洁的代码片段管理工具，支持语法高亮、分类和快速搜索。",
    icon: "code",
    tags: ["React", "Electron", "SQLite"],
    url: "https://example.com/snippets"
  },
  {
    id: 4,
    title: "个人博客系统",
    description: "基于 Next.js 构建的个人博客，支持 Markdown 写作和自动部署。",
    icon: "book",
    tags: ["Next.js", "MDX", "Vercel"],
    url: "https://example.com/blog"
  },
  {
    id: 5,
    title: "在线简历",
    description: "一个现代化的在线简历网站，支持暗色模式和多语言切换。",
    icon: "globe",
    tags: ["React", "i18n", "PDF导出"],
    url: "https://resume.example.com"
  },
  {
    id: 6,
    title: "终端工具集",
    description: "常用的命令行工具合集，提升开发效率。",
    icon: "terminal",
    tags: ["Go", "CLI", "Open Source"],
    url: "https://github.com/example/tools"
  },
  {
    id: 7,
    title: "音乐播放器",
    description: "一个简约的网页音乐播放器，支持歌词显示和播放列表。",
    icon: "music",
    tags: ["Vue", "Web Audio", "PWA"],
  },
  {
    id: 8,
    title: "待办清单",
    description: "简洁高效的待办事项管理应用，支持分类和提醒。",
    tags: ["React", "LocalStorage"],
    url: "https://todo.example.com"
  },
  {
    id: 9,
    title: "API 文档站",
    description: "自动生成的 API 文档网站，支持在线测试和代码示例。",
    tags: ["OpenAPI", "Swagger", "Node.js"],
    url: "https://api-docs.example.com"
  }
];
