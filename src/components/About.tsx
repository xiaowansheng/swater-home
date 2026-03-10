import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  MapPin,
  Code,
  Palette,
  Terminal,
  Coffee,
  FileCode,
  Layers,
  Compass,
  Quote,
  Target,
  Rocket,
} from 'lucide-react';
import { ABOUT_CONFIG, SITE_CONFIG } from '@constants';
import { SOCIAL_LABELS, isSocialPlatform, type SocialPlatform } from '../constants/socialPlatforms';
import { getSocialIcon } from './socialIcons';
import { isValidString, isValidArray, cleanStringArray } from '../utils/configValidation';

const getSkillIcon = (name: string) => {
  switch (name) {
    case '前端':
    case 'Frontend':
      return <Palette size={16} />;
    case '后端':
    case 'Backend':
      return <Terminal size={16} />;
    case 'React':
      return <Code size={16} />;
    case '咖啡':
    case 'Coffee':
    case 'Java':
      return <Coffee size={16} />;
    case 'Go':
    case 'Python':
      return <Terminal size={16} />;
    case 'TypeScript':
      return <FileCode size={16} />;
    case 'Vue':
      return <Layers size={16} />;
    default:
      return <Code size={16} />;
  }
};

const getSkillLevelLabel = (level: number) => {
  if (level >= 90) return '精通';
  if (level >= 75) return '熟练';
  if (level >= 60) return '掌握';
  if (level >= 40) return '入门';
  return '认识';
};

const SocialBtn: React.FC<{ icon: React.ReactNode; href: string; label: string; platform: string }> = ({
  icon,
  href,
  label,
  platform,
}) => {
  const platformClass = `social-chip--${platform as SocialPlatform}`;
  const isMail = href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={isMail ? undefined : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      title={label}
      aria-label={label}
      className={`social-chip ${platformClass}`}
    >
      <span className="social-chip__icon">{icon}</span>
      <span>{label}</span>
    </a>
  );
};

const About: React.FC = () => {
  const { hero, profile, statusSnapshot, capabilities, learning } = ABOUT_CONFIG;
  const configuredSocials = (SITE_CONFIG?.socials ?? {}) as Record<string, string>;
  const aboutLabelMap = new Map<string, string>(
    hero.socials.map((social) => [String(social.platform), String(social.label)]),
  );
  const mergedSocials = Object.entries(configuredSocials).reduce<Array<{ platform: string; url: string; label: string }>>(
    (acc, [platform, url]) => {
      if (!isSocialPlatform(platform)) return acc;
      if (!url || !url.trim()) return acc;
      acc.push({
        platform,
        url,
        label: aboutLabelMap.get(platform) ?? SOCIAL_LABELS[platform],
      });
      return acc;
    },
    [],
  );
  const displaySocials = mergedSocials.length > 0 ? mergedSocials : hero.socials;
  const cleanDescriptions = cleanStringArray(profile.descriptions);

  return (
    <section className="min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="anime-sticker mx-auto w-fit mb-3">
          <span className="kira" />
          CHARACTER FILE
        </div>

        <div className="relative w-fit mx-auto mb-4">
          <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-300 via-sky-300 to-pink-300 rounded-full opacity-25 blur-2xl animate-pulse"></div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white p-1 rounded-full shadow-xl border-4 border-white overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-50 to-pink-50">
              <img
                src={hero.identity.avatarUrl}
                alt="Avatar"
                className="block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          {isValidString(hero.identity.rarity) && (
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-1 -right-2 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm border border-emerald-200 inline-flex items-center gap-1"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {hero.identity.rarity}
            </motion.span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-rounded font-black text-slate-800 mb-2">
          {hero.identity.nickname}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500">{hero.identity.suffix}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-4">{hero.identity.title}</p>

        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {isValidArray(hero.identity.tags) && hero.identity.tags.map((tag, index) => {
            const colors = [
              "bg-cyan-50 text-cyan-700 border-cyan-100",
              "bg-sky-50 text-sky-700 border-sky-100",
              "bg-pink-50 text-pink-700 border-pink-100",
            ];
            const colorClass = colors[index % colors.length];
            return (
              <span key={index} className={`text-xs font-semibold px-3 py-1 rounded-full border ${colorClass}`}>
                {tag}
              </span>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {displaySocials.map((social) => (
            <SocialBtn
              key={social.platform}
              platform={social.platform}
              href={social.url}
              icon={getSocialIcon(social.platform)}
              label={social.label}
            />
          ))}
        </div>
      </motion.div>

      <div className="space-y-5 sm:space-y-6">
        {(isValidString(profile.summary) || isValidArray(cleanDescriptions)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-5 rounded-2xl border border-white/80"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-cyan-100 rounded-lg text-cyan-500">
                <Quote size={16} />
              </div>
              <h3 className="text-base font-black text-slate-800">关于我</h3>
            </div>

            <div className="space-y-2 text-slate-600 leading-relaxed text-sm sm:text-base">
              {isValidString(profile.summary) && (
                <p className="text-slate-700 font-medium">{profile.summary}</p>
              )}
              {cleanDescriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </motion.div>
        )}

        {(isValidString(statusSnapshot.occupation) ||
          isValidString(statusSnapshot.location) ||
          isValidString(statusSnapshot.currentQuest) ||
          isValidArray(statusSnapshot.metrics)) && (
          <div className="space-y-4">
            {(isValidString(statusSnapshot.occupation) ||
              isValidString(statusSnapshot.industry) ||
              isValidString(statusSnapshot.location) ||
              isValidString(statusSnapshot.currentQuest)) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="glass-panel p-5 rounded-2xl border-l-4 border-cyan-400"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-cyan-100 rounded-lg text-cyan-500">
                    <Compass size={16} />
                  </div>
                  <h3 className="text-base font-black text-slate-800">当前状态</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {isValidString(statusSnapshot.occupation) && (
                    <div className="rounded-xl p-3 bg-white/75 border border-white/85">
                      <p className="text-xs font-semibold text-slate-500 mb-1">职业</p>
                      <p className="font-bold text-slate-700 text-sm">{statusSnapshot.occupation}</p>
                    </div>
                  )}
                  {isValidString(statusSnapshot.industry) && (
                    <div className="rounded-xl p-3 bg-white/75 border border-white/85">
                      <p className="text-xs font-semibold text-slate-500 mb-1">行业</p>
                      <p className="font-bold text-slate-700 text-sm">{statusSnapshot.industry}</p>
                    </div>
                  )}
                  {isValidString(statusSnapshot.location) && (
                    <div className="rounded-xl p-3 bg-white/75 border border-white/85">
                      <p className="text-xs font-semibold text-slate-500 mb-1 flex items-center gap-1.5">
                        <MapPin size={12} className="text-rose-500" />
                        位置
                      </p>
                      <p className="font-bold text-slate-700 text-sm">{statusSnapshot.location}</p>
                    </div>
                  )}
                </div>
                {isValidString(statusSnapshot.currentQuest) && (
                  <div className="mt-3 rounded-xl p-3 bg-white/75 border border-white/85">
                    <p className="text-xs font-semibold text-slate-500 mb-1 flex items-center gap-1.5">
                      <Target size={12} className="text-rose-500" />
                      当前目标
                    </p>
                    <p className="font-bold text-slate-700 text-sm sm:text-base">{statusSnapshot.currentQuest}</p>
                  </div>
                )}
              </motion.div>
            )}

            {isValidArray(statusSnapshot.metrics) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-5 rounded-2xl border border-white/80"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-sky-100 rounded-lg text-sky-500">
                    <Zap size={16} />
                  </div>
                  <h3 className="text-base font-black text-slate-800">关键指标</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {statusSnapshot.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl p-3 bg-white/75 border border-white/85">
                      <p className="text-xs font-semibold text-slate-500 mb-1">{metric.label}</p>
                      <p className={`text-base font-black ${metric.textColor}`}>{metric.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        )}

        {isValidArray(capabilities.skills) && (
          <div className="grid grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-5 rounded-2xl border border-white/80"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-sky-100 rounded-lg text-sky-500">
                  <Zap size={16} />
                </div>
                <h3 className="font-black text-slate-700 text-base">核心能力</h3>
              </div>
              <div className="space-y-3">
                {capabilities.skills.map((skill, index) => (
                  <div key={skill.name} className="grid grid-cols-[auto,minmax(0,1fr)] items-center gap-2 sm:gap-3">
                    <span className={`p-1.5 rounded-lg text-white ${skill.color} shadow-sm flex-shrink-0`}>
                      {getSkillIcon(skill.name)}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                        <span className="font-bold text-slate-700 truncate">{skill.name}</span>
                        <span className="text-slate-500 font-semibold">{getSkillLevelLabel(skill.level)}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + index * 0.08 }}
                          className={`h-full ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {isValidArray(learning.tags) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-5 rounded-2xl border border-white/80"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-amber-100 rounded-lg text-amber-500">
                <Rocket size={16} />
              </div>
              <h3 className="font-black text-slate-700 text-base">正在学习</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {learning.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-amber-50 rounded-lg text-sm font-semibold text-amber-700 border border-amber-100 hover:bg-amber-100 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
