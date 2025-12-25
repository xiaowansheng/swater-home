import { ConfigProvider } from "./context/ConfigContext";
import { DynamicBackground } from "./components/DynamicBackground";
import { ProfileCard } from "./components/ProfileCard";
import { SocialLinks, FeaturedLinks } from "./components/SocialLinks";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { CustomCursor } from "./components/CustomCursor";
import { ParallaxWrapper } from "./components/ParallaxWrapper";
import { FloatingDecorations } from "./components/FloatingDecorations";
import { MusicPlayer } from "./components/MusicPlayer";
import { VisitorCounter } from "./components/Widgets";
import { LoadingScreen } from "./components/LoadingScreen";
import { useConfig } from "./context/ConfigContext";
import { motion } from "framer-motion";

const Content = () => {
  const { currentContent } = useConfig();

  if (!currentContent) return null;

  return (
    <LoadingScreen>
      <CustomCursor />
      <FloatingDecorations />
      
      {/* Top Left - Brand */}
      <div className="fixed top-6 left-6 z-50 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary font-black italic text-xl tracking-tighter pointer-events-auto"
        >
          YUME.LOG
        </motion.div>
      </div>

      {/* Top Right - Language Switcher */}
      <LanguageSwitcher />

      {/* Bottom Left - Music */}
      <MusicPlayer />
      
      <main className="min-h-screen relative p-6 md:p-12 flex flex-col items-center justify-center pt-32 pb-32">
        <DynamicBackground />
        
        <div className="z-10 w-full flex flex-col items-center gap-12 max-w-2xl">
          <ParallaxWrapper>
            <ProfileCard />
          </ParallaxWrapper>
          
          <div className="w-full space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-slate-500 font-black tracking-[0.3em] text-[10px] uppercase mb-8 opacity-40">
                ✧ Explore My World ✧
              </h2>
              <FeaturedLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-slate-500 font-black tracking-[0.3em] text-[10px] uppercase mb-8 opacity-40">
                ✧ Connect With Me ✧
              </h2>
              <SocialLinks />
            </motion.div>
          </div>

          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center flex flex-col items-center gap-4"
          >
            <VisitorCounter />
            <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase opacity-30 hover:opacity-100 transition-opacity">
              {currentContent.footer}
            </p>
          </motion.footer>
        </div>
      </main>
    </LoadingScreen>
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
