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
      return <Palette size={15} />;
    case '后端':
    case 'Backend':
      return <Terminal size={15} />;
    case 'React':
      return <Code size={15} />;
    case '咖啡':
    case 'Coffee':
    case 'Java':
      return <Coffee size={15} />;
    case 'Go':
    case 'Python':
      return <Terminal size={15} />;
    case 'TypeScript':
      return <FileCode size={15} />;
    case 'Vue':
      return <Layers size={15} />;
    default:
      return <Code size={15} />;
  }
};

const getSkillLevelLabel = (level: number) => {
  if (level >= 90) return 'MASTER';
  if (level >= 75) return 'PRO';
  if (level >= 60) return 'ADV';
  if (level >= 40) return 'MID';
  return 'INIT';
};

/* Skill bar gradient by index */
const skillGradients = [
  'linear-gradient(90deg, #f472b6, #c084fc)',
  'linear-gradient(90deg, #818cf8, #38bdf8)',
  'linear-gradient(90deg, #34d399, #22d3ee)',
  'linear-gradient(90deg, #fb923c, #f472b6)',
  'linear-gradient(90deg, #a78bfa, #818cf8)',
  'linear-gradient(90deg, #22d3ee, #34d399)',
];

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

/* Section card header */
const CardHeader: React.FC<{ icon: React.ReactNode; title: string; color?: string }> = ({
  icon,
  title,
  color = 'rgba(244,114,182,0.18)',
}) => (
  <div className="flex items-center gap-2.5 mb-4">
    <div
      className="p-1.5 rounded-lg flex-shrink-0"
      style={{ background: color, boxShadow: '0 0 12px rgba(244,114,182,0.2)' }}
    >
      {icon}
    </div>
    <h3
      className="text-sm font-rounded font-black tracking-wide"
      style={{ color: '#f0abfc', textShadow: '0 0 12px rgba(244,114,182,0.3)' }}
    >
      {title}
    </h3>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(244,114,182,0.4), transparent)' }} />
  </div>
);

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
      {/* ── Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="text-center mb-10"
      >
        <div className="anime-sticker mx-auto w-fit mb-4">
          <span className="kira" />
          CHARACTER FILE
        </div>

        {/* Avatar */}
        <div className="relative w-fit mx-auto mb-5">
          {/* Outer glow ring */}
          <div
            className="absolute -inset-4 rounded-full opacity-60"
            style={{
              background: 'conic-gradient(from 0deg, #f472b6, #818cf8, #22d3ee, #34d399, #f472b6)',
              filter: 'blur(10px)',
              animation: 'holo-shift 4s linear infinite',
              backgroundSize: '200% 200%',
            }}
          />
          {/* Ring border */}
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px]"
            style={{
              background: 'linear-gradient(135deg, #f472b6, #818cf8, #22d3ee)',
              backgroundSize: '200% 200%',
              animation: 'holo-shift 4s linear infinite',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 group">
              <img
                src={hero.identity.avatarUrl}
                alt="Avatar"
                className="block w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          {isValidString(hero.identity.rarity) && (
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 text-[11px] font-black px-2.5 py-1 rounded-full inline-flex items-center gap-1"
              style={{
                background: 'rgba(15,10,35,0.9)',
                border: '1px solid rgba(52,211,153,0.5)',
                color: '#34d399',
                boxShadow: '0 0 10px rgba(52,211,153,0.3)',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '9px',
              }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px #34d399' }} />
              {hero.identity.rarity}
            </motion.span>
          )}
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-rounded font-black mb-2">
          <span style={{ color: '#f0e6ff' }}>{hero.identity.nickname}</span>
          <span
            style={{
              background: 'linear-gradient(135deg, #f472b6, #818cf8, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'holo-shift 4s linear infinite',
            }}
          >
            {hero.identity.suffix}
          </span>
        </h1>
        <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-5" style={{ color: '#a78bfa' }}>
          {hero.identity.title}
        </p>

        {/* Tags */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {isValidArray(hero.identity.tags) &&
            hero.identity.tags.map((tag, index) => {
              const tagStyles = [
                { bg: 'rgba(244,114,182,0.12)', border: 'rgba(244,114,182,0.35)', color: '#f9a8d4' },
                { bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.35)', color: '#c4b5fd' },
                { bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.35)', color: '#67e8f9' },
              ];
              const s = tagStyles[index % tagStyles.length];
              return (
                <span
                  key={index}
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                >
                  {tag}
                </span>
              );
            })}
        </div>

        {/* Social chips */}
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

      {/* ── Cards ── */}
      <div className="space-y-5">
        {/* About */}
        {(isValidString(profile.summary) || isValidArray(cleanDescriptions)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-5 rounded-2xl"
          >
            <CardHeader
              icon={<Quote size={15} style={{ color: '#f472b6' }} />}
              title="关于我"
              color="rgba(244,114,182,0.15)"
            />
            <div className="space-y-2 leading-relaxed text-sm sm:text-base" style={{ color: '#c4b5fd' }}>
              {isValidString(profile.summary) && (
                <p className="font-semibold" style={{ color: '#e2d9f3' }}>{profile.summary}</p>
              )}
              {cleanDescriptions.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Status */}
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
                    className="glass-panel p-5 rounded-2xl"
                    style={{ borderLeft: '3px solid #f472b6' }}
                  >
                    <CardHeader
                      icon={<Compass size={15} style={{ color: '#818cf8' }} />}
                      title="当前状态"
                      color="rgba(129,140,248,0.15)"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {isValidString(statusSnapshot.occupation) && (
                        <div
                          className="rounded-xl p-3"
                          style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.15)' }}
                        >
                          <p className="text-xs font-bold mb-1" style={{ color: '#a78bfa' }}>职业</p>
                          <p className="font-black text-sm" style={{ color: '#f0e6ff' }}>{statusSnapshot.occupation}</p>
                        </div>
                      )}
                      {isValidString(statusSnapshot.industry) && (
                        <div
                          className="rounded-xl p-3"
                          style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.15)' }}
                        >
                          <p className="text-xs font-bold mb-1" style={{ color: '#a78bfa' }}>行业</p>
                          <p className="font-black text-sm" style={{ color: '#f0e6ff' }}>{statusSnapshot.industry}</p>
                        </div>
                      )}
                      {isValidString(statusSnapshot.location) && (
                        <div
                          className="rounded-xl p-3"
                          style={{ background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.15)' }}
                        >
                          <p className="text-xs font-bold mb-1 flex items-center gap-1.5" style={{ color: '#a78bfa' }}>
                            <MapPin size={11} style={{ color: '#f472b6' }} />
                            位置
                          </p>
                          <p className="font-black text-sm" style={{ color: '#f0e6ff' }}>{statusSnapshot.location}</p>
                        </div>
                      )}
                    </div>
                    {isValidString(statusSnapshot.currentQuest) && (
                      <div
                        className="mt-3 rounded-xl p-3"
                        style={{ background: 'rgba(244,114,182,0.07)', border: '1px solid rgba(244,114,182,0.18)' }}
                      >
                        <p className="text-xs font-bold mb-1 flex items-center gap-1.5" style={{ color: '#a78bfa' }}>
                          <Target size={11} style={{ color: '#f472b6' }} />
                          当前目标
                        </p>
                        <p className="font-black text-sm sm:text-base" style={{ color: '#f0e6ff' }}>
                          {statusSnapshot.currentQuest}
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}

              {/* Metrics */}
              {isValidArray(statusSnapshot.metrics) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel p-5 rounded-2xl"
                >
                  <CardHeader
                    icon={<Zap size={15} style={{ color: '#22d3ee' }} />}
                    title="关键指标"
                    color="rgba(34,211,238,0.15)"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {statusSnapshot.metrics.map((metric, i) => {
                      const colors = ['#f472b6', '#818cf8', '#22d3ee', '#34d399', '#fb923c', '#a78bfa'];
                      const c = colors[i % colors.length];
                      return (
                        <div
                          key={metric.label}
                          className="rounded-xl p-3"
                          style={{
                            background: `${c}0d`,
                            border: `1px solid ${c}26`,
                          }}
                        >
                          <p className="text-xs font-bold mb-1" style={{ color: '#a78bfa' }}>{metric.label}</p>
                          <p className="text-base font-black" style={{ color: c, textShadow: `0 0 10px ${c}66` }}>
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          )}

        {/* Skills */}
        {isValidArray(capabilities.skills) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="glass-panel p-5 rounded-2xl"
          >
            <CardHeader
              icon={<Zap size={15} style={{ color: '#f472b6' }} />}
              title="核心能力"
              color="rgba(244,114,182,0.15)"
            />
            <div className="space-y-4">
              {capabilities.skills.map((skill, index) => {
                const gradient = skillGradients[index % skillGradients.length];
                return (
                  <div key={skill.name} className="grid grid-cols-[auto,minmax(0,1fr)] items-center gap-3">
                    <span
                      className="p-1.5 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: gradient,
                        boxShadow: `0 0 10px rgba(244,114,182,0.25)`,
                        color: 'white',
                      }}
                    >
                      {getSkillIcon(skill.name)}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold truncate" style={{ color: '#f0e6ff' }}>{skill.name}</span>
                        <span
                          className="font-black text-[10px] px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
                          style={{
                            background: 'rgba(244,114,182,0.12)',
                            border: '1px solid rgba(244,114,182,0.3)',
                            color: '#f9a8d4',
                            fontFamily: 'Orbitron, sans-serif',
                          }}
                        >
                          {getSkillLevelLabel(skill.level)}
                        </span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
                          className="skill-bar-fill"
                          style={{ background: gradient }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Learning */}
        {isValidArray(learning.tags) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-5 rounded-2xl"
          >
            <CardHeader
              icon={<Rocket size={15} style={{ color: '#fb923c' }} />}
              title="正在学习"
              color="rgba(251,146,60,0.15)"
            />
            <div className="flex flex-wrap gap-2">
              {learning.tags.map((tag, i) => {
                const tagColors = [
                  { bg: 'rgba(244,114,182,0.12)', border: 'rgba(244,114,182,0.3)', color: '#f9a8d4' },
                  { bg: 'rgba(129,140,248,0.12)', border: 'rgba(129,140,248,0.3)', color: '#c4b5fd' },
                  { bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.3)', color: '#67e8f9' },
                  { bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.3)', color: '#86efac' },
                  { bg: 'rgba(251,146,60,0.12)', border: 'rgba(251,146,60,0.3)', color: '#fdba74' },
                ];
                const s = tagColors[i % tagColors.length];
                return (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-bold cursor-default transition-colors"
                    style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
