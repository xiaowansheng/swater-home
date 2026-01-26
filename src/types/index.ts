export interface NavItem {
  label: string;
  id: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
  GALLERY = 'GALLERY',
  BLOG = 'BLOG'
}