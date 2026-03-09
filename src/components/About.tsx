import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Twitter,
  Instagram,
  Mail,
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
import { ABOUT_CONFIG } from '@constants';

const QQIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size} fill="currentColor">
    <path d="M824.8 613.2c-16-81.4-45.6-123.8-143.4-142.8l-12.2-2.2c16.2-46.8 14-99.8-19.4-141.4-42.2-53-118-72.2-184.8-46.6-66.8-25.6-142.6-6.4-184.8 46.6-33.4 41.6-35.6 94.6-19.4 141.4l-12.2 2.2c-97.8 19-127.4 61.4-143.4 142.8-17.6 89.6-12.8 112.6 30 119.8 42.8 7.2 60-16.2 60-16.2s3.6 22 46.8 28.2c43.2 6.2 78-4.4 78-4.4s-14.4 74.8 68.8 81c82 6 100-34.4 100-34.4s18 40.4 100 34.4c83.2-6.2 68.8-81 68.8-81s34.8 10.6 78 4.4c43.2-6.2 46.8-28.2 46.8-28.2s17.2 23.4 60 16.2c42.8-7.2 47.6-30.2 30-119.8z" />
  </svg>
);

const GiteeIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 1024 1024" width={size} height={size} fill="currentColor">
    <path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H507.2L496 499.2l-5.6 10.4 108.8 108.8h112c31.2 0 56-24.8 56-56V454.4zM476.8 692.8V536L320 379.2V560c0 40 32.8 72.8 72.8 72.8H476.8z" />
  </svg>
);

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'github':
      return <Github size={18} />;
    case 'twitter':
      return <Twitter size={18} />;
    case 'instagram':
      return <Instagram size={18} />;
    case 'mail':
      return <Mail size={18} />;
    case 'qq':
      return <QQIcon size={18} />;
    case 'gitee':
      return <GiteeIcon size={18} />;
    default:
      return <Github size={18} />;
  }
};

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
  return '掌握';
};

const SocialBtn: React.FC<{ icon: React.ReactNode; href: string; label: string; platform: string }> = ({
  icon,
  href,
  label,
  platform,
}) => {
  const getStyles = (p: string) => {
    switch (p) {
      case 'github':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-slate-900 hover:border-slate-300';
      case 'twitter':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-sky-600 hover:border-sky-200';
      case 'instagram':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-pink-600 hover:border-pink-200';
      case 'mail':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-rose-600 hover:border-rose-200';
      case 'qq':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-cyan-600 hover:border-cyan-200';
      case 'gitee':
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-orange-600 hover:border-orange-200';
      default:
        return 'bg-white/90 text-slate-700 border-slate-200/70 hover:text-slate-900 hover:border-slate-300';
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 border font-semibold text-sm shadow-sm hover:-translate-y-px ${getStyles(
        platform,
      )}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};

const About: React.FC = () => {
  const { hero, profile, statusSnapshot, capabilities, learning } = ABOUT_CONFIG;
  const cleanDescriptions = profile.descriptions.filter((desc) => {
    const text = desc.trim();
    return text.length > 0 && !/^\d+$/.test(text);
  });

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
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-1 -right-2 bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm border border-emerald-200 inline-flex items-center gap-1"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {hero.identity.rarity}
          </motion.span>
        </div>

        <h1 className="text-3xl md:text-4xl font-rounded font-black text-slate-800 mb-2">
          {hero.identity.nickname}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-pink-500">{hero.identity.suffix}</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-4">{hero.identity.title}</p>

        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          <span className="bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-100">{hero.identity.role}</span>
          <span className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full border border-sky-100">{hero.identity.level}</span>
          <span className="bg-pink-50 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full border border-pink-100 flex items-center gap-1.5">
            <MapPin size={12} /> {hero.location}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {hero.socials.map((social) => (
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
            <p className="text-slate-700 font-medium">{profile.summary}</p>
            {cleanDescriptions.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </motion.div>

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
            <div className="rounded-xl p-3 bg-white/75 border border-white/85">
              <p className="text-xs font-semibold text-slate-500 mb-1">职业</p>
              <p className="font-bold text-slate-700 text-sm">{statusSnapshot.occupation}</p>
            </div>
            {statusSnapshot.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl p-3 bg-white/75 border border-white/85">
                <p className="text-xs font-semibold text-slate-500 mb-1">{metric.label}</p>
                <p className={`text-base font-black ${metric.textColor}`}>{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl p-3 bg-white/75 border border-white/85">
            <p className="text-xs font-semibold text-slate-500 mb-1 flex items-center gap-1.5">
              <Target size={12} className="text-rose-500" />
              当前目标
            </p>
            <p className="font-bold text-slate-700 text-sm sm:text-base">{statusSnapshot.currentQuest}</p>
          </div>
        </motion.div>

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
      </div>
    </section>
  );
};

export default About;
