import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail, Zap, Heart, Star, MapPin } from 'lucide-react';
import { HOME_CONFIG } from '@constants';

const Hero: React.FC = () => {
  const { identity, socials, stats, status, bio } = HOME_CONFIG;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github size={18} />;
      case 'twitter': return <Twitter size={18} />;
      case 'instagram': return <Instagram size={18} />;
      case 'mail': return <Mail size={18} />;
      default: return <Github size={18} />;
    }
  };

  return (
    <section className="min-h-screen pt-12 pb-24 px-4 flex flex-col items-center justify-center max-w-7xl mx-auto overflow-hidden">
      
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
              {/* Background Glows */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-full opacity-40 blur-md"></div>
              
              {/* Avatar Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white p-1.5 rounded-full shadow-2xl border-4 border-white overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden bg-sky-50 relative">
                  <img 
                    src={identity.avatarUrl} 
                    alt="Avatar" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full border-0 group-hover:border-[8px] border-white/20 transition-all duration-300"></div>
                </div>
                
                {/* SSR Badge */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-lg border border-white z-30"
                >
                  {identity.rarity}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Identity Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-4"
          >
            <h4 className="text-sky-500 font-bold tracking-widest text-sm mb-2">{identity.title}</h4>
            <h1 className="text-5xl md:text-7xl font-rounded font-black text-gray-800 leading-none mb-3">
              {identity.nickname}<span className="text-sky-400">{identity.suffix}</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="bg-sky-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                {identity.level}
              </span>
              <p className="text-gray-500 font-bold tracking-wide">{identity.role}</p>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 p-4 glass-panel rounded-2xl border-l-8 border-sky-400"
        >
          <span className="flex items-center text-gray-400 text-xs font-black uppercase tracking-widest mr-2 border-r pr-4 border-gray-200">Connect</span>
          {socials.map((social) => (
            <SocialBtn 
              key={social.platform} 
              href={social.url} 
              icon={getSocialIcon(social.platform)} 
              label={social.label}
            />
          ))}
        </motion.div>

        {/* Row 3: Main Stats & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {/* Stats Box */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="glass-panel p-6 rounded-3xl"
           >
              <h3 className="font-bold text-gray-700 mb-6 flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" /> Attributes
              </h3>
              
              <div className="space-y-4">
                {stats.map(stat => (
                  <StatBar key={stat.label} label={stat.label} val={stat.val} color={stat.color} />
                ))}
              </div>
           </motion.div>

           {/* Info/Attributes */}
           <div className="flex flex-col gap-6">
              {/* Location & Role */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-panel p-6 rounded-3xl flex-1 flex flex-col justify-center gap-4"
              >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 shadow-inner">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Base Location</p>
                     <p className="font-bold text-gray-800 text-lg">{status.location}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 shadow-inner">
                     <Zap size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-400 font-bold uppercase">Class Specialization</p>
                     <p className="font-bold text-gray-800 text-lg">{status.occupation}</p>
                   </div>
                 </div>
              </motion.div>

              {/* Current Status */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 rounded-3xl bg-gradient-to-r from-sky-400 to-indigo-400 text-white shadow-xl shadow-sky-200"
              >
                 <div className="flex justify-between items-start">
                   <div>
                     <p className="text-xs opacity-80 font-bold uppercase mb-2">Current Activity</p>
                     <p className="font-bold text-xl leading-tight">{status.currentQuest}</p>
                   </div>
                   <Heart className="fill-white/20 text-white" />
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Row 4: Biography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-panel p-8 rounded-3xl border-t-4 border-sky-400"
        >
           <p className="text-gray-600 leading-relaxed font-semibold italic text-lg text-center md:text-left">
             "{bio}"
           </p>
        </motion.div>

      </div>
    </section>
  );
};

const SocialBtn: React.FC<{ icon: React.ReactNode; href: string; label: string }> = ({ icon, href, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-500 hover:text-white hover:bg-sky-500 transition-all shadow-sm border border-sky-50 font-bold text-sm"
  >
    {icon} 
    <span className="hidden sm:inline">{label}</span>
  </a>
);

const StatBar: React.FC<{ label: string; val: number; color: string }> = ({ label, val, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-16 text-xs font-black text-gray-400 text-right uppercase tracking-tighter">{label}</span>
    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${val}%` }}
        transition={{ duration: 1, delay: 1 }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
    <span className="w-10 text-xs font-black text-gray-800">{val}%</span>
  </div>
);

export default Hero;