import { useConfig } from "../context/ConfigContext";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useConfig();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 107, 157, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="glass px-3 py-2 rounded-full text-xs font-black uppercase tracking-widest text-primary dark:text-primary border-primary/20 shadow-md"
    >
      {lang === 'zh' ? 'EN' : '中文'}
    </motion.button>
  );
};
