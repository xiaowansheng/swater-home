import { ConfigProvider } from "./context/ConfigContext";
import { DynamicBackground } from "./components/DynamicBackground";
import { ProfileCard } from "./components/ProfileCard";
import { SocialLinks } from "./components/SocialLinks";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useConfig } from "./context/ConfigContext";

const Content = () => {
  const { currentContent } = useConfig();

  if (!currentContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin text-4xl text-primary">✨</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative p-4 md:p-8 flex flex-col items-center justify-center">
      <LanguageSwitcher />
      <DynamicBackground />
      
      <div className="z-10 w-full flex flex-col items-center gap-8 max-w-2xl">
        <ProfileCard />
        
        <div className="w-full">
          <h2 className="text-center text-slate-400 font-bold tracking-widest text-xs uppercase mb-4">
            FIND ME ON
          </h2>
          <SocialLinks />
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">
            {currentContent.footer}
          </p>
        </div>
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
