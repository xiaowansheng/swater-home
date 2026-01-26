import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail, Zap, Heart, Star, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@constants';

const Hero: React.FC = () => {
  const { socials } = SITE_CONFIG;

  return (
    <section className="min-h-screen pt-12 pb-24 px-4 flex items-center justify-center max-w-7xl mx-auto overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full h-full items-center">
        
        {/* Left Column: Avatar UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:col-span-4 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Background Glows */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-full opacity-40 blur-md"></div>
            
            {/* Avatar Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white p-2 rounded-full shadow-2xl border-4 border-white overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden bg-sky-50 relative">
                <img 
                  src={SITE_CONFIG.avatarUrl} 
                  alt="Avatar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Border effect on hover */}
                <div className="absolute inset-0 rounded-full border-0 group-hover:border-[12px] border-white/20 transition-all duration-300"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-sky-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg border-2 border-white z-30"
              >
                {SITE_CONFIG.level}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Status Panel (Info) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-8 flex flex-col gap-4 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Header Name Plate */}
          <div className="glass-panel p-6 rounded-3xl border-l-8 border-sky-400">
            <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
              <div>
                <h4 className="text-sky-500 font-bold tracking-widest text-sm mb-1">{SITE_CONFIG.title}</h4>
                <h1 className="text-5xl md:text-6xl font-rounded font-black text-gray-800 leading-none">
                  {SITE_CONFIG.name.split('.')[0]}<span className="text-sky-400">.{SITE_CONFIG.name.split('.')[1]}</span>
                </h1>
              </div>
              <div className="flex gap-2">
                 <SocialBtn href={socials.github} icon={<Github size={18} />} />
                 <SocialBtn href={socials.twitter} icon={<Twitter size={18} />} />
                 <SocialBtn href={socials.instagram} icon={<Instagram size={18} />} />
                 <SocialBtn href={socials.mail} icon={<Mail size={18} />} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Stats Box */}
             <div className="glass-panel p-5 rounded-3xl">
                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" /> Stats
                </h3>
                
                <div className="space-y-3">
                  {SITE_CONFIG.stats.map(stat => (
                    <StatBar key={stat.label} label={stat.label} val={stat.val} color={stat.color} />
                  ))}
                </div>
             </div>

             {/* Info/Attributes */}
             <div className="flex flex-col gap-4">
                {/* Location & Role */}
                <div className="glass-panel p-5 rounded-3xl flex-1 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-500">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <p className="text-xs text-gray-500 font-bold uppercase">Base</p>
                       <p className="font-bold text-gray-800">{SITE_CONFIG.location}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                       <Zap size={20} />
                     </div>
                     <div>
                       <p className="text-xs text-gray-500 font-bold uppercase">Class</p>
                       <p className="font-bold text-gray-800">{SITE_CONFIG.role}</p>
                     </div>
                   </div>
                </div>

                {/* Current Status */}
                <div className="glass-panel p-5 rounded-3xl bg-gradient-to-r from-sky-400 to-indigo-400 text-white shadow-lg shadow-sky-200">
                   <div className="flex justify-between items-start">
                     <div>
                       <p className="text-xs opacity-80 font-bold uppercase mb-1">Current Quest</p>
                       <p className="font-bold text-lg leading-tight">{SITE_CONFIG.currentQuest}</p>
                     </div>
                     <Heart className="fill-white/20 text-white" />
                   </div>
                </div>
             </div>
          </div>

          {/* Description */}
          <div className="glass-panel p-6 rounded-3xl">
             <p className="text-gray-600 leading-relaxed font-medium">
               "{SITE_CONFIG.bio}"
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const SocialBtn: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-white hover:bg-sky-400 transition-all shadow-sm border border-sky-50"
  >
    {icon}
  </a>
);

const StatBar: React.FC<{ label: string; val: number; color: string }> = ({ label, val, color }) => (
  <div className="flex items-center gap-3">
    <span className="w-12 text-xs font-bold text-gray-500 text-right">{label}</span>
    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${val}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
    <span className="w-8 text-xs font-bold text-gray-400">{val}</span>
  </div>
);

export default Hero;