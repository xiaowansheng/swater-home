import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@constants';
import { ExternalLink, Heart } from 'lucide-react';

const Websites: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-black text-slate-800 mb-4 font-rounded uppercase tracking-tight">Portfolio</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto rounded-full shadow-sm shadow-sky-100 mb-6"></div>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          A collection of digital experiences and applications I've built with passion and code.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className="group relative h-96 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-500"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Overlay Glass Panel */}
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-3xl border-l-[6px] border-sky-400 opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
              <h3 className="text-2xl font-black text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-500 mb-5 line-clamp-2 text-sm font-medium">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-sky-50 text-[10px] text-sky-600 font-bold rounded-lg border border-sky-100 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.url || '#'} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl text-xs font-black transition-all shadow-lg shadow-sky-100"
                >
                  <ExternalLink size={16} /> VISIT SITE
                </a>
                <button className="flex items-center gap-2 bg-white/80 hover:bg-white text-rose-500 px-4 py-2.5 rounded-xl text-xs font-black transition-all border border-rose-100 shadow-sm">
                  <Heart size={16} className="fill-rose-100" /> 24
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Websites;