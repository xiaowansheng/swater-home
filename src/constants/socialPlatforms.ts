export const SOCIAL_PLATFORMS = [
  'github',
  'gitee',
  'qq',
  'mail',
  'twitter',
  'instagram',
  'linkedin',
  'youtube',
  'facebook',
  'twitch',
  'tiktok',
  'telegram',
  'discord',
  'reddit',
  'whatsapp',
  'wechat',
  'weibo',
  'bilibili',
  'xiaohongshu',
  'zhihu',
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  github: 'GitHub',
  gitee: 'Gitee',
  qq: 'QQ',
  mail: 'Email',
  twitter: 'Twitter',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  facebook: 'Facebook',
  twitch: 'Twitch',
  tiktok: 'TikTok',
  telegram: 'Telegram',
  discord: 'Discord',
  reddit: 'Reddit',
  whatsapp: 'WhatsApp',
  wechat: 'WeChat',
  weibo: 'Weibo',
  bilibili: 'Bilibili',
  xiaohongshu: 'Xiaohongshu',
  zhihu: 'Zhihu',
};

export const isSocialPlatform = (value: string): value is SocialPlatform => {
  return (SOCIAL_PLATFORMS as readonly string[]).includes(value);
};
