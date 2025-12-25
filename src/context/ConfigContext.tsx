import React, { createContext, useContext, useEffect, useState } from 'react';
import { Config, LanguageContent } from '../types/config';

interface ConfigContextType {
  config: Config | null;
  currentContent: LanguageContent | null;
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data: Config) => {
        setConfig(data);
        
        let initialLang: 'zh' | 'en' = 'zh';
        if (data.activeLang === 'auto') {
          const browserLang = navigator.language.toLowerCase();
          initialLang = browserLang.includes('zh') ? 'zh' : 'en';
        } else {
          initialLang = data.activeLang;
        }
        setLang(initialLang);

        // Apply theme variables
        if (data.theme) {
          document.documentElement.style.setProperty('--primary-color', data.theme.primary);
          document.documentElement.style.setProperty('--secondary-color', data.theme.secondary);
        }
      })
      .catch((err) => console.error('Failed to load config:', err));
  }, []);

  const currentContent = config ? config.content[lang] : null;

  return (
    <ConfigContext.Provider value={{ config, currentContent, lang, setLang }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within a ConfigProvider');
  return context;
};

