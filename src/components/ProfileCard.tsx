import { motion } from "framer-motion";
import { MapPin, Briefcase, Sparkles } from "lucide-react";
import { useConfig } from "../context/ConfigContext";
import { useState, useRef } from "react";
import { ClockWidget, WeatherWidget } from "./Widgets";

export const ProfileCard = () => {
  const { config, currentContent } = useConfig();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!currentContent) return null;

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % currentContent.quotes.length);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 max-w-xl w-full text-center relative overflow-hidden"
    >
      <audio ref={audioRef} src="https://www.myinstants.com/media/sounds/pop-sound-effect.mp3" />
      
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary" />

      {/* Internal Widgets Integration */}
      <div className="absolute top-4 left-6 right-6 flex justify-between items-center pointer-events-none opacity-50">
        <WeatherWidget />
        <ClockWidget />
      </div>

      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        onClick={nextQuote}
        className="w-32 h-32 mx-auto rounded-full border-4 border-primary p-1 cursor-pointer bg-white dark:bg-slate-700 overflow-hidden shadow-lg mb-6 relative group mt-2"
      >
        {config?.avatar ? (
          <img src={config.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-orange-50 dark:from-pink-900/30 dark:to-orange-900/30 flex items-center justify-center text-4xl">
            ✨
          </div>
        )}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-full">
           <Sparkles className="text-white" />
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
        {currentContent.name}
      </h1>
      <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">@{currentContent.nickname}</p>
      
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
        {currentContent.bio}
      </p>

      <div className="flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <span className="flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
          <MapPin size={16} className="text-primary" />
          {currentContent.location}
        </span>
        <span className="flex items-center gap-1.5 bg-slate-100/50 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
          <Briefcase size={16} className="text-secondary" />
          {currentContent.occupation}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {currentContent.skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary text-xs font-bold rounded-full border border-primary/20 dark:border-primary/30"
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.div
        key={quoteIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/40 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-6 italic text-slate-600 dark:text-slate-300 border border-primary/10 dark:border-primary/20 relative shadow-inner group cursor-pointer"
        onClick={nextQuote}
      >
        <span className="absolute -top-3 left-6 bg-primary text-white px-3 py-0.5 text-[10px] font-black rounded-full shadow-md transform -rotate-2 group-hover:rotate-0 transition-transform">
          QUOTES ✨
        </span>
        "{currentContent.quotes[quoteIndex]}"
      </motion.div>
    </motion.div>
  );
};
