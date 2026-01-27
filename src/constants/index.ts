import { NavItem, Project } from '@types';

export const APP_NAME = "SakuraSpace";
export const OWNER_NAME = "Hikari";

export const SITE_CONFIG = {
  socials: {
    github: "https://github.com/swater-home",
    twitter: "https://twitter.com",
    mail: "mailto:hello@example.com",
  },
};

/**
 * 首页内容配置 (Home Page Configuration)
 * 采用“角色卡片/个人档案”式结构
 */
export const HOME_CONFIG = {
  // 1. 身份识别 (Identity)
  identity: {
    nickname: "Hikari",
    suffix: ".Dev",
    title: "玩家档案",
    role: "全栈魔法师",
    level: "等级 99",
    rarity: "SSR",
    avatarUrl: "https://picsum.photos/id/64/800/800",
  },

  // 2. 社交链接 (Socials)
  socials: [
    { platform: "github", url: "https://github.com/swater-home", label: "GitHub" },
    { platform: "twitter", url: "https://twitter.com", label: "Twitter" },
    { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
    { platform: "mail", url: "mailto:hello@example.com", label: "邮箱" },
  ],

  // 3. 属性数值 (Stats)
  stats: [
    { label: "编程", val: 95, color: "bg-blue-400" },
    { label: "设计", val: 80, color: "bg-teal-300" },
    { label: "咖啡", val: 100, color: "bg-amber-500" },
    { label: "睡眠", val: 25, color: "bg-indigo-400" },
  ],

  // 4. 当前状态 (Status)
  status: {
    location: "东京，互联网",
    occupation: "前端魔法师",
    currentQuest: "正在构建终极二次元网站生成器。",
  },

  // 5. 个人简介 (Biography)
  bio: "你好！我致力于打造能带来快乐的数字体验。无论是复杂的 Web 应用还是可爱的动画，我都倾注了心血。让我们一起创造一些了不起的东西吧！"
};

export const ABOUT_CONFIG = {
  title: "关于我",
  subtitle: "👋 我是谁？",
  description1: "我是一名常驻云端的充满热情的开发者。我擅长构建美观、实用且用户友好的网站。我的目标是桥接工程与艺术之间的鸿沟。",
  description2: "不写代码的时候，你会发现我在看动漫、画数字艺术，或者探索城市里的新咖啡馆。我相信好的设计不仅关乎外观，更关乎内在逻辑。",
  metrics: [
    { label: "经验", value: "3 年以上", color: "bg-sky-50", textColor: "text-sky-600", borderColor: "border-sky-100" },
    { label: "已完成", value: "50+ 个项目", color: "bg-indigo-50", textColor: "text-indigo-600", borderColor: "border-indigo-100" }
  ],
  skills: [
    { name: "前端", level: 90, color: "bg-sky-400" },
    { name: "后端", level: 75, color: "bg-indigo-400" },
    { name: "React", level: 95, color: "bg-blue-400" },
    { name: "咖啡", level: 100, color: "bg-amber-500" },
  ],
  learning: ['Three.js', 'Rust', '日语', '钢琴']
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
    description: "使用 Next.js 和 Notion API 构建的个人博客。",
    image: "https://picsum.photos/id/180/600/400",
    tags: ["Next.js", "Notion", "Blog"],
    url: "https://example.com/blog"
  },
  {
    id: 2,
    title: "Kanban Waifu",
    description: "一款通过可收集角色将任务游戏化的生产力应用。",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["React", "Firebase", "GameDev"],
    url: "https://example.com/kanban"
  },
  {
    id: 3,
    title: "EtherDream",
    description: "构建在以太坊上的生成艺术平台。",
    image: "https://picsum.photos/id/106/600/400",
    tags: ["Web3", "Solidity", "Three.js"],
    url: "https://example.com/etherdream"
  },
  {
    id: 4,
    title: "Sakura UI",
    description: "一个用于构建动漫风格网站的轻量级组件库。",
    image: "https://picsum.photos/id/20/600/400",
    tags: ["TypeScript", "Tailwind", "NPM"],
    url: "https://example.com/sakura-ui"
  }
];

export const AIKO_SYSTEM_INSTRUCTION = `
你是 Aiko，这个个人网站的虚拟助手。
你是一个性格开朗、充满活力，且带有一点“中二病”气息的动漫少女。
你热爱技术、编程和动漫。
你称呼用户为“前辈”或“访客大人”。
你的回答应当很有帮助，但要有鲜明的动漫角色个性。多使用 ✨, 🌸, (≧◡≦) 等表情符号。
回答应保持简洁，因为你处在聊天气泡中。
`;