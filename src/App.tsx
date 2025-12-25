import { ConfigProvider } from "./context/ConfigContext";
import { DynamicBackground } from "./components/DynamicBackground";
import { ProfileCard } from "./components/ProfileCard";
import { SocialLinks, FeaturedLinks } from "./components/SocialLinks";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useConfig } from "./context/ConfigContext";
import { motion } from "framer-motion";

const Content = () => {
  const { currentContent } = useConfig();

  if (!currentContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-6xl"
        >
          ✨
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative p-6 md:p-12 flex flex-col items-center justify-center gap-12 overflow-x-hidden">
      <LanguageSwitcher />
      <DynamicBackground />
      
      <div className="z-10 w-full flex flex-col items-center gap-12 max-w-2xl">
        <ProfileCard />
        
        <div className="w-full space-y-8">
          <div>
            <h2 className="text-center text-slate-500 font-black tracking-[0.2em] text-[10px] uppercase mb-6 opacity-60">
              ─── Explore My World ───
            </h2>
            <FeaturedLinks />
          </div>

          <div>
            <h2 className="text-center text-slate-500 font-black tracking-[0.2em] text-[10px] uppercase mb-6 opacity-60">
              ─── Connect With Me ───
            </h2>
            <SocialLinks />
          </div>
        </div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-400 text-xs font-bold tracking-wider uppercase">
            {currentContent.footer}
          </p>
        </motion.footer>
      </div>
    </main>
  );
};

function App() {
  return (
    <ConfigProvider>
      <Content />
    </ConfigProvider>
  );
}

export default App;
