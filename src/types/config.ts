export interface LinkItem {
  name: string;
  url: string;
  icon: string;
}

export interface LanguageContent {
  name: string;
  nickname: string;
  bio: string;
  location: string;
  occupation: string;
  skills: string[];
  quotes: string[];
  links: LinkItem[];
  footer: string;
}

export interface SocialItem {
  platform: string;
  url: string;
  icon: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  backgroundAlpha: number;
}

export interface Config {
  activeLang: 'auto' | 'zh' | 'en';
  background: 'sakura' | 'stars';
  avatar?: string;
  backgroundImage?: string;
  theme: ThemeConfig;
  content: {
    zh: LanguageContent;
    en: LanguageContent;
  };
  social: SocialItem[];
}
