import { useConfig } from "../context/ConfigContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useConfig();

  return (
    <div className="fixed top-6 right-6 flex gap-2 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        className="glass px-4 py-2 rounded-full text-sm font-bold text-primary"
      >
        {lang === 'zh' ? 'English' : '中文'}
      </motion.button>
    </div>
  );
};

