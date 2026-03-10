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
  title: "我不想努力了",
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
    title: "个人博客系统",
    description: "基于 Java 21 和 Next.js 构建的个人博客，支持 Markdown 文章预览、说说、访客等功能。",
    icon: "book",
    tags: ["Java", "Next.js", "Markdown"],
    url: "http://blog.wbxnl.com"
  },
  {
    id: 2,
    title: "个人博客后台",
    description: "基于 React 和 Ant Design 构建的个人博客后台，支持 Markdown 写作和自动部署。",
    icon: "book",
    tags: ["React", "Ant Design", "Markdown"],
    url: "http://admin.wbxnl.com"
  },
];
