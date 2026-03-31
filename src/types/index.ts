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

export enum ViewState {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WEBSITES = 'WEBSITES',
  BLOG = 'BLOG'
}

export interface TrackEnterParams {
  visitorUuid?: string;
  pageKey?: string;
  pageUrl?: string;
  referer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  contentType?: string;
  contentId?: number;
}

export interface TrackEnterResult {
  visitorUuid: string;
  sessionId: string;
  newVisitor: boolean;
  newSession: boolean;
  pagePvCounted: boolean;
  contentReadCounted: boolean;
}