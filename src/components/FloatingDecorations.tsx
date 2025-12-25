import React from "react";
import { motion } from "framer-motion";
import { useConfig } from "../context/ConfigContext";

const DECORS = ["✨", "🌸", "⭐", "🔮", "💠"];

export const FloatingDecorations = () => {
  const { config } = useConfig();

  if (!config?.features.floatingDecorations) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.5, 1, 0.5],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute text-2xl filter blur-[1px]"
        >
          {DECORS[i % DECORS.length]}
        </motion.div>
      ))}
    </div>
  );
};

