import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause, SkipForward, Volume2 } from "lucide-react";
import { useConfig } from "../context/ConfigContext";

export const MusicPlayer = () => {
  const { config } = useConfig();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!config?.features.musicPlayer) return null;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            className="glass p-4 rounded-2xl mb-4 flex flex-col gap-3 min-w-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
                <Music size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary truncate w-32">
                  {config.widgets.music.title}
                </p>
                <p className="text-[10px] text-slate-400">Playing BGM...</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between gap-4">
              <button onClick={togglePlay} className="p-2 hover:bg-primary/10 rounded-full transition-colors text-primary">
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={isPlaying ? { x: ["-100%", "100%"] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-primary"
                />
              </div>
              <Volume2 size={16} className="text-slate-400" />
            </div>
            
            <audio ref={audioRef} src={config.widgets.music.url} loop />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`glass p-4 rounded-full shadow-lg text-primary ${isPlaying ? 'animate-pulse' : ''}`}
      >
        <Music size={24} />
      </motion.button>
    </div>
  );
};

