import React from 'react';
import { Heart } from 'lucide-react';
import { SITE_CONFIG, APP_NAME } from '@constants';
import { SOCIAL_LABELS, SOCIAL_PLATFORMS, type SocialPlatform } from '../constants/socialPlatforms';
import { getSocialIcon } from './socialIcons';

type SocialLink = { platform: SocialPlatform; url: string; label: string };

const getFooterSocialIcon = (platform: SocialPlatform) => {
  return getSocialIcon(platform, 20);
};

const getFooterSocialClass = (platform: SocialPlatform) => `social-icon social-icon--${platform}`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socials = (SITE_CONFIG?.socials ?? {}) as Partial<Record<SocialPlatform, string>>;
  const iconLinks = SOCIAL_PLATFORMS.reduce<SocialLink[]>((acc, platform) => {
    const url = socials[platform];
    if (!url || !url.trim()) return acc;
    acc.push({ platform, url, label: SOCIAL_LABELS[platform] });
    return acc;
  }, []);

  return (
    <footer className="relative z-10 w-full pt-3 pb-[calc(env(safe-area-inset-bottom)+6rem)] sm:pb-[calc(env(safe-area-inset-bottom)+7rem)] mt-4 sm:mt-6 text-sm text-center text-slate-500">
      <div className="glass-panel mx-auto w-[90%] md:w-3/4 lg:w-1/2 rounded-2xl p-6 flex flex-col items-center gap-4 border border-white/80">
        <div className="anime-sticker">
          <span className="kira" />
          OTAKU MODE
        </div>

        {iconLinks.length > 0 && (
          <div className="flex items-center gap-4">
            {iconLinks.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target={item.platform === 'mail' ? undefined : '_blank'}
                rel={item.platform === 'mail' ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                className={getFooterSocialClass(item.platform)}
              >
                {getFooterSocialIcon(item.platform)}
              </a>
            ))}
          </div>
        )}

        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-pink-300/70 to-transparent" />

        <div className="flex flex-col gap-2">
          <p className="font-medium font-rounded">© {currentYear} {APP_NAME}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 text-xs">
            Made with <Heart size={12} className="text-rose-400 fill-rose-400" /> by {APP_NAME.replace('Home', '').replace('Space', '')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
