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
      className="flex flex-wrap justify-center gap-4 mt-8"
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
            whileHover={{ y: -5, backgroundColor: "rgba(255, 107, 157, 0.1)" }}
            className="glass p-4 rounded-2xl flex items-center gap-3 transition-colors duration-300 group"
          >
            <IconComponent size={20} className="group-hover:text-primary transition-colors" />
            <span className="font-medium text-slate-700">{social.platform}</span>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

