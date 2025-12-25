import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, ThemeMode } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { themeMode, isDark, setTheme } = useTheme();

  const themes: { mode: ThemeMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'light', icon: <Sun size={14} />, label: 'Light' },
    { mode: 'dark', icon: <Moon size={14} />, label: 'Dark' },
    { mode: 'auto', icon: <Monitor size={14} />, label: 'Auto' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/20"
    >
      {themes.map(({ mode, icon, label }) => (
        <motion.button
          key={mode}
          onClick={() => setTheme(mode)}
          className={`relative p-2 rounded-full transition-colors ${
            themeMode === mode
              ? 'text-primary bg-white/20 dark:bg-white/10'
              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={label}
        >
          {icon}
          {themeMode === mode && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-primary/20 rounded-full"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};