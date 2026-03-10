import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@constants';
import {
  ExternalLink,
  Code,
  Globe,
  Book,
  Gamepad2,
  Music,
  Palette,
  Terminal,
  Database,
  Smartphone,
  Box,
  Layers,
  Sparkles,
  Star,
  Zap,
  Heart,
  Coffee,
  Rocket,
} from 'lucide-react';

const getProjectIcon = (iconName?: string) => {
  switch (iconName) {
    case 'code': return <Code size={28} />;
    case 'globe': return <Globe size={28} />;
    case 'book': return <Book size={28} />;
    case 'game': return <Gamepad2 size={28} />;
    case 'music': return <Music size={28} />;
    case 'palette': return <Palette size={28} />;
    case 'terminal': return <Terminal size={28} />;
    case 'database': return <Database size={28} />;
    case 'mobile': return <Smartphone size={28} />;
    case 'box': return <Box size={28} />;
    case 'layers': return <Layers size={28} />;
    case 'sparkles': return <Sparkles size={28} />;
    case 'star': return <Star size={28} />;
    case 'zap': return <Zap size={28} />;
    case 'heart': return <Heart size={28} />;
    case 'coffee': return <Coffee size={28} />;
    case 'rocket': return <Rocket size={28} />;
    default: return <Code size={28} />;
  }
};

const iconGradients = [
  'linear-gradient(135deg, #f472b6, #c084fc)',
  'linear-gradient(135deg, #818cf8, #38bdf8)',
  'linear-gradient(135deg, #34d399, #22d3ee)',
  'linear-gradient(135deg, #fb923c, #f472b6)',
  'linear-gradient(135deg, #a78bfa, #818cf8)',
  'linear-gradient(135deg, #22d3ee, #34d399)',
  'linear-gradient(135deg, #fde68a, #fb923c)',
  'linear-gradient(135deg, #f472b6, #818cf8)',
];

const Websites: React.FC = () => {
  const renderTags = (tags: string[], light = false) => {
    const visibleTags = tags.slice(0, 3);
    const remainCount = tags.length - visibleTags.length;

    return (
      <div className="flex flex-wrap gap-1.5 mb-3">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] font-bold rounded-md"
            style={
              light
                ? { background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)' }
                : { background: 'rgba(129,140,248,0.12)', color: '#c4b5fd', border: '1px solid rgba(129,140,248,0.25)' }
            }
          >
            {tag}
          </span>
        ))}
        {remainCount > 0 && (
          <span
            className="px-2 py-0.5 text-[11px] font-bold rounded-md"
            style={
              light
                ? { background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }
                : { background: 'rgba(244,114,182,0.12)', color: '#f9a8d4', border: '1px solid rgba(244,114,182,0.25)' }
            }
          >
            +{remainCount}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="min-h-[calc(100vh-7rem)] pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="anime-sticker mx-auto w-fit mb-3">
          <span className="kira" />
          PROJECT ARCHIVE
        </div>
        <h2
          className="text-3xl font-black font-rounded mb-3"
          style={{ color: '#f0abfc', textShadow: '0 0 24px rgba(244,114,182,0.35)' }}
        >
          作品集
        </h2>
        <div className="section-divider w-20 mx-auto mb-4" />
        <p className="max-w-xl mx-auto text-sm font-medium" style={{ color: '#a78bfa' }}>
          我用代码和热情构建的数字作品与应用
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            {project.image ? (
              /* ─── Image card ─── */
              <div
                className="relative h-64 rounded-2xl overflow-hidden transition-all duration-300 group"
                style={{
                  border: '1px solid rgba(244,114,182,0.2)',
                  boxShadow: '0 8px 32px rgba(124,58,237,0.14)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(15,10,30,0.95) 0%, rgba(15,10,30,0.5) 40%, transparent 100%)' }}
                />

                <div className="absolute top-3 right-3 anime-badge">
                  <span className="kira" style={{ width: '6px', height: '6px' }} />
                  NEW
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-black text-white mb-1">{project.title}</h3>
                  <div className="relative group/desc mb-3">
                    <p className="text-white/75 text-sm line-clamp-2">{project.description}</p>
                    <div
                      className="pointer-events-none absolute left-0 top-full mt-2 w-64 rounded-lg px-3 py-2 text-xs shadow-lg opacity-0 translate-y-1 transition-all duration-200 group-hover/desc:opacity-100 group-hover/desc:translate-y-0 z-20"
                      style={{ background: 'rgba(15,10,30,0.95)', color: '#e2d9f3', border: '1px solid rgba(244,114,182,0.25)' }}
                    >
                      {project.description}
                    </div>
                  </div>

                  {renderTags(project.tags, true)}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                      style={{ color: '#f9a8d4' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#f9a8d4')}
                    >
                      <ExternalLink size={13} /> 查看项目
                    </a>
                  )}
                </div>
              </div>
            ) : (
              /* ─── Glass card ─── */
              <div className="glass-panel p-5 rounded-2xl h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background: iconGradients[index % iconGradients.length],
                      boxShadow: '0 4px 16px rgba(244,114,182,0.25)',
                    }}
                  >
                    {project.icon ? getProjectIcon(project.icon) : (
                      <span className="text-xl font-black">{project.title.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="anime-badge">
                    <span className="kira" style={{ width: '6px', height: '6px' }} />
                    二次元企划
                  </span>
                </div>

                <h3 className="text-lg font-black mb-2" style={{ color: '#f0e6ff' }}>{project.title}</h3>
                <div className="relative group/desc mb-4 flex-1">
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#a78bfa' }}>
                    {project.description}
                  </p>
                  <div
                    className="pointer-events-none absolute left-0 top-full mt-2 w-64 rounded-lg px-3 py-2 text-xs shadow-lg opacity-0 translate-y-1 transition-all duration-200 group-hover/desc:opacity-100 group-hover/desc:translate-y-0 z-20"
                    style={{ background: 'rgba(15,10,30,0.95)', color: '#e2d9f3', border: '1px solid rgba(244,114,182,0.25)' }}
                  >
                    {project.description}
                  </div>
                </div>

                {renderTags(project.tags)}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                    style={{ color: '#f9a8d4' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#f9a8d4')}
                  >
                    <ExternalLink size={13} /> 查看项目
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {PROJECTS.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', color: '#a78bfa' }}
          >
            <Box size={40} />
          </div>
          <p className="font-medium" style={{ color: '#a78bfa' }}>暂无作品</p>
        </motion.div>
      )}
    </section>
  );
};

export default Websites;
