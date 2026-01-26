import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Coffee } from 'lucide-react';
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
    <section className="min-h-screen pt-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{ABOUT_CONFIG.title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-indigo-300 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            {ABOUT_CONFIG.subtitle}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {ABOUT_CONFIG.description1}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {ABOUT_CONFIG.description2}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_CONFIG.metrics.map(metric => (
              <div key={metric.label} className={`${metric.color} p-4 rounded-2xl border ${metric.borderColor}`}>
                <h4 className={`font-bold ${metric.textColor} mb-1`}>{metric.value}</h4>
                <p className="text-sm text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 px-2">Skill Stats</h3>
          {ABOUT_CONFIG.skills.map((skill, index) => (
            <div key={skill.name} className="bg-white/60 p-4 rounded-2xl border border-white/50 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className={`p-1.5 rounded-lg text-white ${skill.color}`}>
                    {getIcon(skill.name)}
                  </span>
                  {skill.name}
                </div>
                <span className="text-gray-500 text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  className={`h-full ${skill.color} rounded-full`}
                ></motion.div>
              </div>
            </div>
          ))}

          <div className="mt-8 glass-panel p-6 rounded-3xl text-center">
            <h4 className="font-bold text-gray-700 mb-2">Currently Learning</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {ABOUT_CONFIG.learning.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-500 border border-gray-200">
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