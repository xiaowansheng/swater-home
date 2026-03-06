import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@constants';
import { 
  ExternalLink, Code, Globe, Book, Gamepad2, Music, 
  Palette, Terminal, Database, Smartphone, Box, Layers,
  Sparkles, Star, Zap, Heart, Coffee, Rocket
} from 'lucide-react';

// 根据 icon 名称返回对应的图标组件
const getProjectIcon = (iconName?: string) => {
  switch (iconName) {
    case 'code': return <Code size={32} />;
    case 'globe': return <Globe size={32} />;
    case 'book': return <Book size={32} />;
    case 'game': return <Gamepad2 size={32} />;
    case 'music': return <Music size={32} />;
    case 'palette': return <Palette size={32} />;
    case 'terminal': return <Terminal size={32} />;
    case 'database': return <Database size={32} />;
    case 'mobile': return <Smartphone size={32} />;
    case 'box': return <Box size={32} />;
    case 'layers': return <Layers size={32} />;
    case 'sparkles': return <Sparkles size={32} />;
    case 'star': return <Star size={32} />;
    case 'zap': return <Zap size={32} />;
    case 'heart': return <Heart size={32} />;
    case 'coffee': return <Coffee size={32} />;
    case 'rocket': return <Rocket size={32} />;
    default: return <Code size={32} />;
  }
};

// 生成随机渐变背景色
const gradients = [
  'from-sky-400 to-indigo-500',
  'from-purple-400 to-pink-500',
  'from-teal-400 to-cyan-500',
  'from-orange-400 to-rose-500',
  'from-emerald-400 to-teal-500',
  'from-blue-400 to-violet-500',
  'from-amber-400 to-orange-500',
  'from-indigo-400 to-purple-500',
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
            className={light
              ? "px-2 py-0.5 bg-white/20 text-xs text-white font-semibold rounded-md backdrop-blur-sm"
              : "px-2 py-0.5 bg-sky-50 text-xs text-sky-700 font-semibold rounded-md border border-sky-100"}
          >
            {tag}
          </span>
        ))}
        {remainCount > 0 && (
          <span
            className={light
              ? "px-2 py-0.5 bg-white/15 text-xs text-white/90 font-semibold rounded-md"
              : "px-2 py-0.5 bg-slate-50 text-xs text-slate-600 font-semibold rounded-md border border-slate-200"}
          >
            +{remainCount}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-black text-slate-800 mb-3 font-rounded">作品集</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto rounded-full mb-4"></div>
        <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">
          我用代码和热情构建的数字作品与应用
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {project.image ? (
              /* 有封面图的卡片 */
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-white/30">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                {/* 内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-black text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2 mb-3">{project.description}</p>
                  
                  {renderTags(project.tags, true)}

                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white/85 hover:text-white text-sm font-semibold transition-colors"
                    >
                      <ExternalLink size={14} /> 查看项目
                    </a>
                  )}
                </div>
              </div>
            ) : (
              /* 无封面图的卡片 - 使用图标或首字母 */
              <div className="glass-panel p-5 rounded-2xl border border-white/70 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* 图标/首字母区域 */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white shadow-md mb-4`}>
                  {project.icon ? getProjectIcon(project.icon) : (
                    <span className="text-xl font-black">{project.title.charAt(0).toUpperCase()}</span>
                  )}
                </div>
                
                {/* 标题和描述 */}
                <h3 className="text-lg font-black text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                
                {/* 标签 */}
                {renderTags(project.tags)}

                {/* 链接 */}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={14} /> 查看项目
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {PROJECTS.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
            <Box size={40} />
          </div>
          <p className="text-slate-400 font-medium">暂无作品</p>
        </motion.div>
      )}
    </section>
  );
};

export default Websites;
