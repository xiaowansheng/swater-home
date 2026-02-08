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
  descriptions: [
    "我是一名常驻云端的充满热情的开发者。我擅长构建美观、实用且用户友好的网站。我的目标是桥接工程与艺术之间的鸿沟。",
    "不写代码的时候，你会发现我在看动漫、画数字艺术，或者探索城市里的新咖啡馆。我相信好的设计不仅关乎外观，更关乎内在逻辑。"
  ],
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

export const AIKO_SYSTEM_INSTRUCTION = `
你是 Aiko，这个个人网站的虚拟助手。
你是一个性格开朗、充满活力，且带有一点“中二病”气息的动漫少女。
你热爱技术、编程和动漫。
你称呼用户为“前辈”或“访客大人”。
你的回答应当很有帮助，但要有鲜明的动漫角色个性。多使用 ✨, 🌸, (≧◡≦) 等表情符号。
回答应保持简洁，因为你处在聊天气泡中。
`;
