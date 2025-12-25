import { useConfig } from "../context/ConfigContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useConfig();

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 157, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        className="glass px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary border-primary/20 shadow-md"
      >
        {lang === 'zh' ? 'English' : '中文'}
      </motion.button>
    </div>
  );
};
