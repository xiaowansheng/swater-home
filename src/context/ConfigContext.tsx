import React, { createContext, useContext, useEffect, useState } from 'react';
import { Config, LanguageContent } from '../types/config';

interface ConfigContextType {
  config: Config | null;
  currentContent: LanguageContent | null;
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  isLoading: boolean;
  error: string | null;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/config.json');
        if (!response.ok) {
          throw new Error(`Failed to load config: ${response.status}`);
        }
        
        const data: Config = await response.json();
        setConfig(data);
        
        // Determine initial language
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
          const root = document.documentElement;
          root.style.setProperty('--primary-color', data.theme.primary);
          root.style.setProperty('--secondary-color', data.theme.secondary);
          root.style.setProperty('--background-alpha', data.theme.backgroundAlpha.toString());
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        console.error('Failed to load config:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadConfig();
  }, []);

  const currentContent = config ? config.content[lang] : null;

  return (
    <ConfigContext.Provider value={{ 
      config, 
      currentContent, 
      lang, 
      setLang, 
      isLoading, 
      error 
    }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error('useConfig must be used within a ConfigProvider');
  return context;
};

