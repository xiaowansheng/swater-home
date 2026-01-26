import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: "Frontend", level: 90, icon: <Palette size={18} />, color: "bg-sky-400" },
    { name: "Backend", level: 75, icon: <Terminal size={18} />, color: "bg-indigo-400" },
    { name: "React", level: 95, icon: <Code size={18} />, color: "bg-blue-400" },
    { name: "Coffee", level: 100, icon: <Coffee size={18} />, color: "bg-amber-500" },
  ];

  return (
    <section className="min-h-screen pt-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
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
            <span className="text-3xl">👋</span> Who am I?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm a passionate developer based in the cloud. I specialize in building beautiful, functional, and user-friendly websites. My goal is to bridge the gap between engineering and art.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            When I'm not coding, you can find me watching anime, drawing digital art, or exploring new cafes in the city. I believe that good design is not just about how things look, but how they work.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
               <h4 className="font-bold text-sky-600 mb-1">3+ Years</h4>
               <p className="text-sm text-gray-500">Experience</p>
             </div>
             <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
               <h4 className="font-bold text-indigo-600 mb-1">50+ Projects</h4>
               <p className="text-sm text-gray-500">Completed</p>
             </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 px-2">Skill Stats</h3>
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-white/60 p-4 rounded-2xl border border-white/50 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <span className={`p-1.5 rounded-lg text-white ${skill.color}`}>{skill.icon}</span>
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
              {['Three.js', 'Rust', 'Japanese', 'Piano'].map(tag => (
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