import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Twitter, Instagram, Mail, 
  Zap, Heart, Star, MapPin, 
  Code, Palette, Terminal, Coffee, FileCode, Layers,
  Compass, Clock, Award, User
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
    case 'Frontend': return <Palette size={18} />;
    case 'Backend': return <Terminal size={18} />;
    case 'React': return <Code size={18} />;
    case 'Coffee': return <Coffee size={18} />;
    case 'Java': return <Coffee size={18} />;
    case 'Go': return <Terminal size={18} />;
    case 'Python': return <Terminal size={18} />;
    case 'TypeScript': return <FileCode size={18} />;
    case 'Vue': return <Layers size={18} />;
    default: return <Code size={18} />;
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
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border font-bold text-sm shadow-sm ${getStyles(platform)}`}
    >
      {icon} 
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden inline">{icon}</span>
    </a>
  );
};

const StatBar: React.FC<{ label: string; val: number; color: string }> = ({ label, val, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-16 text-[10px] font-black text-slate-400 text-right uppercase tracking-wider">{label}</span>
    <div className="flex-1 h-3 bg-slate-200/60 rounded-full overflow-hidden shadow-inner border border-white/40">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${val}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`h-full ${val === 0 ? 'bg-transparent' : color} rounded-full opacity-90`}
      />
    </div>
    <span className={`w-10 text-[10px] font-black ${val === 0 ? 'text-slate-300' : 'text-slate-500'}`}>{val}%</span>
  </div>
);

// --- Main Component ---

const About: React.FC = () => {
  const { identity, socials, stats, status, bio: homeBio } = HOME_CONFIG;
  const { title, subtitle, description1, description2, metrics, skills, learning } = ABOUT_CONFIG;

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
      
      {/* 1. HERO & IDENTITY SECTION - Fused from Home */}
      <div className="flex flex-col items-center mb-16 px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="relative mb-8"
        >
           <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
           <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white p-1 rounded-full shadow-2xl border-4 border-white overflow-hidden group mx-auto">
             <div className="w-full h-full rounded-full overflow-hidden bg-sky-50 relative">
               <img src={identity.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
           </div>
           <div className="absolute top-0 right-0 md:right-2">
              <motion.span 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg border border-white inline-block"
              >
                {identity.rarity}
              </motion.span>
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
           <h1 className="text-4xl md:text-5xl font-rounded font-black text-slate-800 mb-2">
             {identity.nickname}<span className="text-sky-400">{identity.suffix}</span>
           </h1>
           <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-sky-100 text-sky-600 text-[10px] font-black px-2 py-0.5 rounded uppercase">{identity.role}</span>
              <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-2 py-0.5 rounded uppercase">{identity.level}</span>
           </div>

           {/* Socials Row */}
           <div className="flex flex-wrap justify-center gap-3">
             {socials.map((social) => (
               <SocialBtn key={social.platform} platform={social.platform} href={social.url} icon={getSocialIcon(social.platform)} label={social.label} />
             ))}
           </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* 2. LEFT COLUMN: Bio & Status - Fused Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Biography Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl border-l-[6px] border-sky-400"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-sky-50 rounded-lg text-sky-500"><User size={24} /></div>
               <h3 className="text-2xl font-black text-slate-800">{title}</h3>
            </div>
            
            {/* Short Bio Quote from Home */}
            <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 font-medium relative">
               <span className="absolute text-5xl text-slate-200 -top-2 -left-1 font-serif">"</span>
               <p className="relative z-10">{homeBio}</p>
            </div>

            {/* Detailed Bio from About */}
            <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
               <p>{description1}</p>
               <p>{description2}</p>
            </div>
          </motion.div>

          {/* Combined Status & Metrics Grid */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Metric Cards */}
            {metrics.map(metric => (
              <div key={metric.label} className={`bg-white/60 p-5 rounded-2xl border border-white/60 shadow-sm ${metric.borderColor?.replace('100', '200') || ''}`}>
                <h4 className={`text-2xl font-black ${metric.textColor} mb-1`}>{metric.value}</h4>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
            
            {/* Status Cards */}
            <div className="bg-white/60 p-5 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-1">
                 <MapPin size={16} className="text-indigo-400" />
                 <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Base</span>
               </div>
               <p className="font-bold text-slate-700">{status.location}</p>
            </div>

            <div className="bg-white/60 p-5 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-1">
                 <Compass size={16} className="text-teal-400" />
                 <span className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Class</span>
               </div>
               <p className="font-bold text-slate-700">{status.occupation}</p>
            </div>
          </motion.div>

          {/* Current Quest/Activity */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.35 }}
             className="glass-panel p-6 rounded-3xl border-l-[6px] border-rose-400 flex items-center justify-between"
           >
              <div>
                <p className="text-[10px] text-rose-400 font-black uppercase tracking-wider mb-2">Current Activity</p>
                <p className="font-bold text-slate-700 text-lg leading-tight">{status.currentQuest}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 animate-pulse">
                <Heart size={24} fill="currentColor" className="opacity-20" />
                <Heart size={24} className="absolute" />
              </div>
           </motion.div>

        </div>

        {/* 3. RIGHT COLUMN: Skills & Stats - Fused Content */}
        <div className="lg:col-span-5 space-y-6">
          
           {/* Character Attributes (RPG Stats from Home) */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4 }}
             className="glass-panel p-6 rounded-3xl border-l-[6px] border-teal-400"
           >
              <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                <Star size={18} className="text-teal-400 fill-teal-400" /> Character Attributes
              </h3>
              <div className="space-y-4">
                {stats.map(stat => (
                  <StatBar key={stat.label} label={stat.label} val={stat.val} color={stat.color} />
                ))}
              </div>
           </motion.div>

           {/* Tech Stack (Skills from About) */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5 }}
             className="glass-panel p-6 rounded-3xl border-l-[6px] border-indigo-400"
           >
             <h3 className="text-xl font-black text-slate-800 mb-6 px-1 flex items-center gap-2">
                <Zap size={20} className="text-indigo-400" /> Tech Stack
             </h3>
             <div className="space-y-5">
               {skills.map((skill, index) => (
                 <div key={skill.name}>
                   <div className="flex justify-between items-end mb-2 px-1">
                     <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                       <span className={`p-1.5 rounded-lg text-white ${skill.color} shadow-sm`}>
                         {getSkillIcon(skill.name)}
                       </span>
                       {skill.name}
                     </div>
                     <span className="text-slate-400 text-xs font-black">{skill.level}%</span>
                   </div>
                   <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-white/40 shadow-inner">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.level}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.2, delay: 0.6 + (index * 0.1) }}
                       className={`h-full ${skill.color} rounded-full`}
                     ></motion.div>
                   </div>
                 </div>
               ))}
             </div>
           </motion.div>

           {/* Learning Queue */}
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-panel p-6 rounded-3xl border-l-[6px] border-amber-400"
           >
             <h4 className="font-black text-slate-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Clock size={16} className="text-amber-400" /> Learning Queue
             </h4>
             <div className="flex flex-wrap gap-2">
               {learning.map(tag => (
                 <span key={tag} className="px-3 py-1 bg-white/60 rounded-lg text-xs font-bold text-slate-500 border border-white/80 shadow-sm hover:bg-amber-100 hover:text-amber-600 transition-colors cursor-default">
                   {tag}
                 </span>
               ))}
             </div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;