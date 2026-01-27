import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Coffee, Zap, Heart } from 'lucide-react';
import { ABOUT_CONFIG } from '@constants';

const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Frontend': return <Palette size={18} />;
      case 'Backend': return <Terminal size={18} />;
      case 'React': return <Code size={18} />;
      case 'Coffee': return <Coffee size={18} />;
      default: return <Code size={18} />;
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-black text-slate-800 mb-4 font-rounded uppercase tracking-tight">{ABOUT_CONFIG.title}</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto rounded-full shadow-sm shadow-sky-100"></div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 lg:sticky lg:top-28 glass-panel p-8 rounded-3xl border-l-[6px] border-sky-400"
        >
          <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
            {ABOUT_CONFIG.subtitle}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6 font-medium">
            {ABOUT_CONFIG.description1}
          </p>
          <p className="text-slate-600 leading-relaxed mb-8 font-medium">
            {ABOUT_CONFIG.description2}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_CONFIG.metrics.map(metric => (
              <div key={metric.label} className="bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
                <h4 className={`text-2xl font-black ${metric.textColor.replace('600', '500')} mb-1`}>{metric.value}</h4>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Skills */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           className="lg:col-span-5 lg:sticky lg:top-28 space-y-5"
        >
          <div className="glass-panel p-6 rounded-3xl border-l-[6px] border-indigo-400">
            <h3 className="text-xl font-black text-slate-800 mb-6 px-1 flex items-center gap-2">
               <Zap size={20} className="text-indigo-400" /> Proficiency
            </h3>
            <div className="space-y-5">
              {ABOUT_CONFIG.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2 px-1">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                      <span className={`p-1.5 rounded-lg text-white ${skill.color} shadow-sm`}>
                        {getIcon(skill.name)}
                      </span>
                      {skill.name}
                    </div>
                    <span className="text-slate-400 text-xs font-black">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-white/40 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.6 + (index * 0.1) }}
                      className={`h-full ${skill.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="glass-panel p-6 rounded-3xl border-l-[6px] border-teal-400">
            <h4 className="font-black text-slate-700 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
               <Heart size={16} className="text-teal-400" /> Currently Learning
            </h4>
            <div className="flex flex-wrap gap-2">
              {ABOUT_CONFIG.learning.map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white/60 rounded-full text-xs font-bold text-slate-500 border border-white/80 shadow-sm hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;