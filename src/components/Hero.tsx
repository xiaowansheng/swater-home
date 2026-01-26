import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail, Zap, Heart, Star, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-12 pb-24 px-4 flex items-center justify-center max-w-7xl mx-auto overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full h-full items-center">
        
        {/* Left Column: Character Card (Avatar) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-[320px] h-[500px] md:w-[380px] md:h-[600px] bg-white p-3 rounded-[2rem] shadow-2xl rotate-[-2deg] hover:rotate-0 transition-all duration-500 border-4 border-white">
            {/* Holographic effect overlay */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-pink-500/10 to-transparent pointer-events-none z-20"></div>
            
            <div className="w-full h-full bg-pink-100 rounded-[1.5rem] overflow-hidden relative">
              <img 
                src="https://picsum.photos/id/433/800/1200" 
                alt="Character" 
                className="w-full h-full object-cover"
              />
              
              {/* Card Footer Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 m-2 rounded-xl border border-pink-200">
                 <div className="flex justify-between items-center mb-1">
                   <h2 className="font-rounded font-extrabold text-2xl text-gray-800">HIKARI</h2>
                   <span className="px-2 py-0.5 bg-pink-500 text-white text-xs font-bold rounded-md">SSR</span>
                 </div>
                 <p className="text-xs font-bold text-gray-500 tracking-wider">LEGENDARY DEVELOPER</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Status Panel (Info) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col gap-4 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Header Name Plate */}
          <div className="glass-panel p-6 rounded-3xl border-l-8 border-pink-400">
            <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
              <div>
                <h4 className="text-pink-500 font-bold tracking-widest text-sm mb-1">PLAYER PROFILE</h4>
                <h1 className="text-5xl md:text-6xl font-rounded font-black text-gray-800 leading-none">
                  Hikari<span className="text-pink-400">.Dev</span>
                </h1>
              </div>
              <div className="flex gap-2">
                 <SocialBtn icon={<Github size={18} />} />
                 <SocialBtn icon={<Twitter size={18} />} />
                 <SocialBtn icon={<Instagram size={18} />} />
                 <SocialBtn icon={<Mail size={18} />} />
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
                  <StatBar label="Coding" val={95} color="bg-blue-400" />
                  <StatBar label="Design" val={80} color="bg-pink-400" />
                  <StatBar label="Coffee" val={100} color="bg-amber-500" />
                  <StatBar label="Sleep" val={25} color="bg-purple-400" />
                </div>
             </div>

             {/* Info/Attributes */}
             <div className="flex flex-col gap-4">
               {/* Location & Role */}
               <div className="glass-panel p-5 rounded-3xl flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Base</p>
                      <p className="font-bold text-gray-800">Tokyo, Internet</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Class</p>
                      <p className="font-bold text-gray-800">Full Stack Sorcerer</p>
                    </div>
                  </div>
               </div>

               {/* Current Status */}
               <div className="glass-panel p-5 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs opacity-80 font-bold uppercase mb-1">Current Quest</p>
                      <p className="font-bold text-lg leading-tight">Building the ultimate waifu website generator.</p>
                    </div>
                    <Heart className="fill-white/20 text-white" />
                  </div>
               </div>
             </div>
          </div>

          {/* Description */}
          <div className="glass-panel p-6 rounded-3xl">
             <p className="text-gray-600 leading-relaxed font-medium">
               "Hello! I craft digital experiences that spark joy. Whether it's complex web apps or cute animations, I put my heart into every pixel. Let's make something amazing together!"
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const SocialBtn: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-500 transition-all shadow-sm border border-pink-100">
    {icon}
  </button>
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