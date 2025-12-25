import { ConfigProvider } from "./context/ConfigContext";
import { ProfileCard } from "./components/ProfileCard";
import { SocialLinks, FeaturedLinks } from "./components/SocialLinks";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { CustomCursor } from "./components/CustomCursor";
import { ParallaxWrapper } from "./components/ParallaxWrapper";
import { MusicPlayer } from "./components/MusicPlayer";
import { VisitorCounter } from "./components/Widgets";
import { LoadingScreen } from "./components/LoadingScreen";
import { ThemeToggle } from "./components/ThemeToggle";
import { SEOHead } from "./components/SEOHead";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useConfig } from "./context/ConfigContext";
import { usePerformance } from "./hooks/usePerformance";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";

// Lazy load heavy components for better performance
const LazyDynamicBackground = lazy(() => 
  import("./components/DynamicBackground").then(module => ({ default: module.DynamicBackground }))
);

const LazyFloatingDecorations = lazy(() => 
  import("./components/FloatingDecorations").then(module => ({ default: module.FloatingDecorations }))
);

const Content = () => {
  const { currentContent, error } = useConfig();
  usePerformance(); // Initialize performance monitoring

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Failed to load configuration
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!currentContent) return <LoadingScreen><div /></LoadingScreen>;

  return (
    <LoadingScreen>
      <SEOHead />
      <CustomCursor />
      
      <Suspense fallback={<div />}>
        <LazyFloatingDecorations />
      </Suspense>
      
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

      {/* Top Right - Controls */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* Bottom Left - Music */}
      <MusicPlayer />
      
      <main className="min-h-screen relative p-6 md:p-12 flex flex-col items-center justify-center pt-32 pb-32">
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-slate-900 dark:to-slate-800" />}>
          <LazyDynamicBackground />
        </Suspense>
        
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
              <h2 className="text-center text-slate-500 dark:text-slate-400 font-black tracking-[0.3em] text-[10px] uppercase mb-8 opacity-40">
                ✧ Explore My World ✧
              </h2>
              <FeaturedLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-slate-500 dark:text-slate-400 font-black tracking-[0.3em] text-[10px] uppercase mb-8 opacity-40">
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
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold tracking-widest uppercase opacity-30 hover:opacity-100 transition-opacity">
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
    <ErrorBoundary>
      <ConfigProvider>
        <Content />
      </ConfigProvider>
    </ErrorBoundary>
  );
}

export default App;
