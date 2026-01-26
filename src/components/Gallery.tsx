import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@constants';
import { ExternalLink, Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of my recent coding projects, designs, and experiments.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                    <ExternalLink size={16} /> View
                  </button>
                  <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors backdrop-blur-sm">
                    <Heart size={16} /> 24
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;