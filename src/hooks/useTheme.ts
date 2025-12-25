import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

const lightTheme: ThemeColors = {
  primary: '#ff6b9d',
  secondary: '#fb923c',
  background: '#ffffff',
  surface: '#f8fafc',
  text: '#1e293b',
  textSecondary: '#64748b'
};

const darkTheme: ThemeColors = {
  primary: '#ff6b9d',
  secondary: '#fb923c',
  background: '#0f172a',
  surface: '#1e293b',
  text: '#f1f5f9',
  textSecondary: '#94a3b8'
};

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'auto';
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      let shouldBeDark = false;

      if (themeMode === 'dark') {
        shouldBeDark = true;
      } else if (themeMode === 'light') {
        shouldBeDark = false;
      } else {
        // auto mode
        shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      setIsDark(shouldBeDark);
      
      const theme = shouldBeDark ? darkTheme : lightTheme;
      const root = document.documentElement;
      
      // Apply CSS custom properties
      Object.entries(theme).forEach(([key, value]) => {
        root.style.setProperty(`--theme-${key}`, value);
      });

      // Update class for Tailwind dark mode
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (themeMode === 'auto') {
        updateTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem('theme-mode', mode);
  };

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return {
    themeMode,
    isDark,
    setTheme,
    toggleTheme
  };
};