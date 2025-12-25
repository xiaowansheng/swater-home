import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useConfig } from "../context/ConfigContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const SocialLinks = () => {
  const { config } = useConfig();

  if (!config) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-4 mt-4"
    >
      {config.social.map((social) => {
        const IconComponent = (Icons as any)[social.icon] || Icons.Link;
        return (
          <motion.a
            key={social.platform}
            variants={item}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={social.platform}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 107, 157, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="glass p-4 rounded-2xl flex items-center justify-center transition-all duration-300 group"
          >
            <IconComponent size={24} className="group-hover:text-primary transition-colors text-slate-600" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export const FeaturedLinks = () => {
  const { currentContent } = useConfig();

  if (!currentContent) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
    >
      {currentContent.links.map((link) => {
        const IconComponent = (Icons as any)[link.icon] || Icons.ExternalLink;
        return (
          <motion.a
            key={link.name}
            variants={item}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5, backgroundColor: "rgba(255, 107, 157, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="glass p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group"
          >
            <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
              <IconComponent size={20} />
            </div>
            <div className="text-left">
              <span className="block font-bold text-slate-700">{link.name}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Visit Link</span>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};
