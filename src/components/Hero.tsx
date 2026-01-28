import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail, Zap, Heart, Star, MapPin } from 'lucide-react';
import { HOME_CONFIG } from '@constants';

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

const Hero: React.FC = () => {
  const { identity, socials, stats, status, bio } = HOME_CONFIG;

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

  return (
    <section className="min-h-screen pt-24 pb-24 px-4 flex flex-col items-center max-w-7xl mx-auto">
      
      <div className="w-full flex flex-col gap-8">
        
        {/* Row 1: Avatar + Identity */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Avatar Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 rounded-full opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-full opacity-40 blur-lg"></div>
              
              <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white p-1 rounded-full shadow-2xl border-4 border-white overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden bg-sky-50 relative">
                  <img src={identity.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
                
              {/* SSR Badge */}
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg border border-white z-30"
              >
                {identity.rarity}
              </motion.div>
            </div>
          </motion.div>

          {/* Identity Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-sky-500 font-bold tracking-widest text-xs mb-2">{identity.title}</h4>
            <h1 className="text-5xl md:text-7xl font-rounded font-black text-slate-800 leading-none mb-4">
              {identity.nickname}<span className="text-sky-400">{identity.suffix}</span>
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <span className="bg-sky-500 text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-lg shadow-sky-200 uppercase">
                {identity.level}
              </span>
              <p className="text-slate-500 font-bold tracking-wide text-lg">{identity.role}</p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center md:justify-start gap-3 p-4 glass-panel rounded-2xl border-l-[6px] border-sky-400"
        >
          {socials.map((social) => (
            <SocialBtn key={social.platform} platform={social.platform} href={social.url} icon={getSocialIcon(social.platform)} label={social.label} />
          ))}
        </motion.div>

        {/* Row 3: Main Stats & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
           {/* Stats Box */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="lg:sticky lg:top-24 glass-panel p-6 rounded-3xl border-l-[6px] border-teal-400"
           >
              <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                <Star size={18} className="text-teal-400 fill-teal-400" /> Attributes
              </h3>
              <div className="space-y-4">
                {stats.map(stat => (
                  <StatBar key={stat.label} label={stat.label} val={stat.val} color={stat.color} />
                ))}
              </div>
           </motion.div>

           {/* Info/Status */}
           <div className="lg:sticky lg:top-24 flex flex-col gap-6">
              {/* Location & Role */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-panel p-6 rounded-3xl flex-1 flex flex-col justify-center gap-5 border-l-[6px] border-indigo-400"
              >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-400 border border-slate-100 shadow-sm">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Base Location</p>
                     <p className="font-bold text-slate-700 text-lg leading-tight">{status.location}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-400 border border-slate-100 shadow-sm">
                     <Zap size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Class Specialization</p>
                     <p className="font-bold text-slate-700 text-lg leading-tight">{status.occupation}</p>
                   </div>
                 </div>
              </motion.div>

              {/* Current Status */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-panel p-6 rounded-3xl border-l-[6px] border-rose-400"
              >
                 <div className="flex justify-between items-start">
                   <div>
                     <p className="text-[10px] text-rose-400 font-black uppercase tracking-wider mb-2">Current Activity</p>
                     <p className="font-bold text-slate-700 text-xl leading-tight">{status.currentQuest}</p>
                   </div>
                   <Heart className="text-rose-400 fill-rose-100" />
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Row 4: Biography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-panel p-8 rounded-3xl border-l-[6px] border-slate-300"
        >
           <p className="text-slate-600 leading-relaxed font-medium italic text-lg opacity-80">
             "{bio}"
           </p>
        </motion.div>

      </div>
    </section>
  );
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
    </a>
  );
};

const StatBar: React.FC<{ label: string; val: number; color: string }> = ({ label, val, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-16 text-[10px] font-black text-slate-400 text-right uppercase tracking-wider">{label}</span>
    <div className="flex-1 h-3 bg-slate-200/60 rounded-full overflow-hidden shadow-inner border border-white/40">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${val}%` }}
        transition={{ duration: 1.2, delay: 1 }}
        className={`h-full ${val === 0 ? 'bg-transparent' : color} rounded-full opacity-90`}
      />
    </div>
    <span className={`w-10 text-[10px] font-black ${val === 0 ? 'text-slate-300' : 'text-slate-500'}`}>{val}%</span>
  </div>
);

export default Hero;