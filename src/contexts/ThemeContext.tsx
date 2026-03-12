import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
    theme: Theme;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'dark', toggle: () => { } });

export const useTheme = () => useContext(ThemeContext);

const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const stored = localStorage.getItem('anime-theme') as Theme | null;
            if (stored === 'light' || stored === 'dark') return stored;
        } catch { }
        // 首次加载，根据系统主题决定
        return getSystemTheme();
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try { localStorage.setItem('anime-theme', theme); } catch { }
    }, [theme]);

    const toggle = useCallback(() => {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    }, []);

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};
