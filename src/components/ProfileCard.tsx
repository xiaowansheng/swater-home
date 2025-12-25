import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { useConfig } from "../context/ConfigContext";
import { useState, useRef } from "react";

export const ProfileCard = () => {
  const { currentContent } = useConfig();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!currentContent) return null;

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % currentContent.quotes.length);
    // Play pop sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden"
    >
      <audio ref={audioRef} src="https://www.myinstants.com/media/sounds/pop-sound-effect.mp3" />
      
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />

      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        onClick={nextQuote}
        className="w-32 h-32 mx-auto rounded-full border-4 border-primary p-1 cursor-pointer bg-white overflow-hidden shadow-lg mb-6"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-orange-50 flex items-center justify-center text-4xl">
          ✨
        </div>
      </motion.div>

      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
        {currentContent.name}
      </h1>
      <p className="text-slate-500 font-medium mb-4">@{currentContent.nickname}</p>
      
      <p className="text-slate-700 leading-relaxed mb-6">
        {currentContent.bio}
      </p>

      <div className="flex justify-center gap-4 text-sm text-slate-500 mb-8">
        <span className="flex items-center gap-1">
          <MapPin size={16} className="text-primary" />
          {currentContent.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase size={16} className="text-secondary" />
          {currentContent.occupation}
        </span>
      </div>

      <motion.div
        key={quoteIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary/5 rounded-2xl p-4 italic text-slate-600 border border-primary/10 relative"
      >
        <span className="absolute -top-3 left-4 bg-white px-2 text-primary text-xs font-bold rounded-full border border-primary/20">
          QUOTE
        </span>
        "{currentContent.quotes[quoteIndex]}"
      </motion.div>
    </motion.div>
  );
};

