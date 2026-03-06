import { Project, NavItem } from '@types';

// =================================================================================
// 🌸 PRIVATE LOCAL CONFIGURATION EXAMPLE
// =================================================================================
// Rename this file to 'config.local.ts' to activate it.
// 'config.local.ts' is ignored by git.
// =================================================================================

// 1. Basic Site Info - Uncomment to Override
// export const APP_NAME = "My Custom Site";
// export const OWNER_NAME = "My Name";

// 2. Featured Projects (Your personal work - displayed first)
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Example Private Project",
    description: "This project is only visible locally.",
    image: "https://picsum.photos/id/1/600/400",
    tags: ["Private"],
    url: "http://localhost:3000"
  }
];

// 3. About Page (Optional override - keep the same section structure)
// export const ABOUT_CONFIG = {
//   hero: {
//     identity: {
//       nickname: "YourName",
//       suffix: ".Dev",
//       title: "Your headline",
//       role: "Your role",
//       level: "Your level",
//       rarity: "Available",
//       avatarUrl: "https://example.com/avatar.jpg",
//     },
//     socials: [
//       { platform: "github", url: "https://github.com/yourname", label: "GitHub" },
//       { platform: "mail", url: "mailto:you@example.com", label: "邮箱" },
//     ],
//     location: "Your location",
//   },
//   profile: {
//     summary: "Short intro shown in the first paragraph.",
//     descriptions: ["Extended description 1", "Extended description 2"],
//   },
//   statusSnapshot: {
//     occupation: "Your occupation",
//     currentQuest: "What you are currently focusing on",
//     metrics: [{ label: "经验", value: "5 年", textColor: "text-sky-600" }],
//   },
//   capabilities: {
//     skills: [{ name: "React", level: 90, color: "bg-blue-400" }],
//   },
//   learning: {
//     tags: ["Three.js", "Rust"],
//   },
// };
