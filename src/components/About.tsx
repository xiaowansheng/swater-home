import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Instagram, Mail, 
  Zap, Heart, Star, MapPin, 
  Code, Palette, Terminal, Coffee, FileCode, Layers,
  Compass, Clock, Sparkles, Quote, Target, Rocket
} from 'lucide-react';
import { HOME_CONFIG, ABOUT_CONFIG } from '@constants';

// --- Icons & Helpers ---

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
    case 'github': return <Github size={18} />;
    case 'twitter': return <Twitter size={18} />;
    case 'instagram': return <Instagram size={18} />;
    case 'mail': return <Mail size={18} />;
    case 'qq': return <QQIcon size={18} />;
    case 'gitee': return <GiteeIcon size={18} />;
    default: return <Github size={18} />;
  }
};

const getSkillIcon = (name: string) => {
  switch(name) {
    case '前端': return <Palette size={16} />;
    case '后端': return <Terminal size={16} />;
    case 'React': return <Code size={16} />;
    case '咖啡': return <Coffee size={16} />;
    case 'Frontend': return <Palette size={16} />;
    case 'Backend': return <Terminal size={16} />;
    case 'Coffee': return <Coffee size={16} />;
    case 'Java': return <Coffee size={16} />;
    case 'Go': return <Terminal size={16} />;
    case 'Python': return <Terminal size={16} />;
    case 'TypeScript': return <FileCode size={16} />;
    case 'Vue': return <Layers size={16} />;
    default: return <Code size={16} />;
  }
};

const SocialBtn: React.FC<{ icon: React.ReactNode; href: string; label: string; platform: string }> = ({ icon, href, label, platform }) => {
  const getStyles = (p: string) => {
    switch (p) {
      case 'github': return "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-800 hover:text-white hover:border-gray-800";
      case 'twitter': return "bg-sky-50 text-sky-500 border-sky-100 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]";
      case 'instagram': return "bg-pink-50 text-pink-600 border-pink-100 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C]";
      case 'mail': return "bg-red-50 text-red-600 border-red-100 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]";
      case 'qq': return "bg-sky-50 text-sky-500 border-sky-100 hover:bg-[#12B7F5] hover:text-white hover:border-[#12B7F5]";
      case 'gitee': return "bg-orange-50 text-orange-600 border-orange-100 hover:bg-[#C71D23] hover:text-white hover:border-[#C71D23]";
      default: return "bg-white/90 text-slate-700 border-white/60 hover:text-white hover:bg-sky-400";
    }
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all border font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 ${getStyles(platform)}`}
    >
      {icon} 
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};

// --- Main Component ---

const About: React.FC = () => {
  const { identity, socials, stats, status, bio: homeBio } = HOME_CONFIG;
  const { description1, description2, metrics, skills, learning } = ABOUT_CONFIG;

  return (
    <section className="min-h-screen pt-20 pb-16 px-4 max-w-3xl mx-auto">
      
      {/* ========== HERO SECTION ========== */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        {/* Avatar */}
        <div className="relative inline-block mb-5">
          <div className="absolute -inset-3 bg-gradient-to-tr from-sky-400 via-indigo-400 to-purple-400 rounded-full opacity-25 blur-2xl animate-pulse"></div>
          <div className="relative w-28 h-28 bg-white p-1 rounded-full shadow-xl border-4 border-white overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-sky-50 to-indigo-50">
              <img src={identity.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
          {/* Rarity Badge */}
          <motion.span 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md shadow-lg border-2 border-white"
          >
            {identity.rarity}
          </motion.span>
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl md:text-4xl font-rounded font-black text-slate-800 mb-2">
          {identity.nickname}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">{identity.suffix}</span>
        </h1>
        
        {/* Tags */}
        <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
          <span className="bg-gradient-to-r from-sky-100 to-sky-50 text-sky-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-sky-100">{identity.role}</span>
          <span className="bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-100">{identity.level}</span>
          <span className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-100 flex items-center gap-1">
            <MapPin size={10} /> {status.location}
          </span>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-2">
          {socials.map((social) => (
            <SocialBtn key={social.platform} platform={social.platform} href={social.url} icon={getSocialIcon(social.platform)} label={social.label} />
          ))}
        </div>
      </motion.div>

      {/* ========== VERTICAL STACKED CONTENT ========== */}
      <div className="space-y-5">
        
        {/* 1. Bio Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-panel p-5 rounded-2xl border-l-4 border-sky-400"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-sky-100 rounded-lg text-sky-500"><Quote size={16} /></div>
            <h3 className="text-base font-black text-slate-800">关于我</h3>
          </div>
          
          {/* Quote */}
          <div className="mb-4 p-3 bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-xl border border-slate-100 relative">
            <Sparkles size={12} className="absolute top-2 right-2 text-sky-300" />
            <p className="text-slate-600 font-medium italic leading-relaxed text-sm">"{homeBio}"</p>
          </div>

          {/* Detailed Bio */}
          <div className="space-y-2 text-slate-600 leading-relaxed text-sm">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </motion.div>

        {/* 2. Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {metrics.map((metric, index) => (
            <div 
              key={metric.label} 
              className={`glass-panel p-4 rounded-xl border-l-4 ${index === 0 ? 'border-sky-400' : 'border-indigo-400'}`}
            >
              <div className={`text-xl font-black ${metric.textColor} mb-0.5`}>{metric.value}</div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
          
          <div className="glass-panel p-4 rounded-xl border-l-4 border-teal-400">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Compass size={12} className="text-teal-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">职业</span>
            </div>
            <p className="font-bold text-slate-700 text-sm truncate">{status.occupation}</p>
          </div>

          <div className="glass-panel p-4 rounded-xl border-l-4 border-rose-400">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Target size={12} className="text-rose-500" />
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">当前</span>
            </div>
            <p className="font-bold text-slate-700 text-sm truncate">{status.currentQuest}</p>
          </div>
        </motion.div>

        {/* 3. Character Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-5 rounded-2xl border-l-4 border-teal-400"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-teal-100 rounded-lg text-teal-500"><Star size={16} /></div>
            <h3 className="font-black text-slate-700 text-base">角色属性</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="relative w-full h-2 bg-slate-200/60 rounded-full overflow-hidden mb-1.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * i }}
                    className={`h-full ${stat.color} rounded-full`}
                  />
                </div>
                <span className="text-[10px] font-black text-slate-500 uppercase">{stat.label}</span>
                <span className="text-[10px] font-bold text-slate-400 ml-1">{stat.val}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-panel p-5 rounded-2xl border-l-4 border-indigo-400"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-indigo-100 rounded-lg text-indigo-500"><Zap size={16} /></div>
            <h3 className="font-black text-slate-700 text-base">技术栈</h3>
          </div>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex items-center gap-3">
                <span className={`p-1.5 rounded-lg text-white ${skill.color} shadow-sm flex-shrink-0`}>
                  {getSkillIcon(skill.name)}
                </span>
                <span className="text-sm font-bold text-slate-700 w-16 flex-shrink-0">{skill.name}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + (index * 0.08) }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
                <span className="text-xs font-black text-slate-400 w-10 text-right">{skill.level}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. Learning Queue */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-5 rounded-2xl border-l-4 border-amber-400"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-amber-100 rounded-lg text-amber-500"><Rocket size={16} /></div>
            <h4 className="font-black text-slate-700 text-sm uppercase tracking-wide">正在学习</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {learning.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg text-xs font-bold text-amber-700 border border-amber-100 hover:from-amber-100 hover:to-orange-100 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 6. Current Activity Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative overflow-hidden glass-panel p-5 rounded-2xl border-l-4 border-rose-400"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-40"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-rose-100 rounded-lg text-rose-500"><Heart size={16} /></div>
                <span className="text-xs text-rose-500 font-black uppercase tracking-wider">当前活动</span>
              </div>
              <p className="font-bold text-slate-700 leading-snug">{status.currentQuest}</p>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-rose-200 flex-shrink-0 ml-4"
            >
              <Heart size={28} fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;