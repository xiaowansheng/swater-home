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
