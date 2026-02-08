export interface NavItem {
  label: string;
  id: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;        // 可选封面图
  icon?: string;         // 可选图标名称 (如 'code', 'globe', 'book' 等)
  tags: string[];
  url?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WEBSITES = 'WEBSITES',
  BLOG = 'BLOG'
}