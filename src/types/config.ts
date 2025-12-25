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
  mode?: 'light' | 'dark' | 'auto';
}

export interface FeaturesConfig {
  customCursor: boolean;
  parallax: boolean;
  floatingDecorations: boolean;
  musicPlayer: boolean;
  clock: boolean;
  weather: boolean;
  visitorCounter: boolean;
}

export interface WidgetsConfig {
  music: { url: string; title: string };
  weather: { city: string; apiKey?: string };
  visitor: { siteId: string };
}

export interface LoadingConfig {
  type: string;
  image: string;
  text: { zh: string; en: string };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  twitterHandle?: string;
  siteUrl?: string;
}

export interface Config {
  activeLang: 'auto' | 'zh' | 'en';
  background: 'sakura' | 'stars';
  avatar?: string;
  backgroundImage?: string;
  theme: ThemeConfig;
  features: FeaturesConfig;
  widgets: WidgetsConfig;
  loading: LoadingConfig;
  seo: SEOConfig;
  content: {
    zh: LanguageContent;
    en: LanguageContent;
  };
  social: SocialItem[];
}
