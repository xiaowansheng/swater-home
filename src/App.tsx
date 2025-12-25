import { ConfigProvider } from "./context/ConfigContext";
import { DynamicBackground } from "./components/DynamicBackground";
import { ProfileCard } from "./components/ProfileCard";
import { SocialLinks, FeaturedLinks } from "./components/SocialLinks";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { CustomCursor } from "./components/CustomCursor";
import { ParallaxWrapper } from "./components/ParallaxWrapper";
import { FloatingDecorations } from "./components/FloatingDecorations";
import { MusicPlayer } from "./components/MusicPlayer";
import { ClockWidget, WeatherWidget, VisitorCounter } from "./components/Widgets";
import { LoadingScreen } from "./components/LoadingScreen";
import { useConfig } from "./context/ConfigContext";
import { motion } from "framer-motion";

const Content = () => {
  const { config, currentContent } = useConfig();

  if (!currentContent) return null;

  return (
    <LoadingScreen>
      <CustomCursor />
      <FloatingDecorations />
      <MusicPlayer />
      
      <main className="min-h-screen relative p-6 md:p-12 flex flex-col items-center justify-center gap-12 overflow-x-hidden">
        {/* Top Floating Widgets */}
        <div className="fixed top-6 left-6 flex flex-wrap gap-3 z-50">
          <ClockWidget />
          <WeatherWidget />
          <VisitorCounter />
        </div>
        
        <LanguageSwitcher />
        <DynamicBackground />
        
        <div className="z-10 w-full flex flex-col items-center gap-12 max-w-2xl mt-12 md:mt-0">
          <ParallaxWrapper>
            <ProfileCard />
          </ParallaxWrapper>
          
          <div className="w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-slate-500 font-black tracking-[0.2em] text-[10px] uppercase mb-6 opacity-60">
                ─── Explore My World ───
              </h2>
              <FeaturedLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-slate-500 font-black tracking-[0.2em] text-[10px] uppercase mb-6 opacity-60">
                ─── Connect With Me ───
              </h2>
              <SocialLinks />
            </motion.div>
          </div>

          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400 text-xs font-bold tracking-wider uppercase">
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
