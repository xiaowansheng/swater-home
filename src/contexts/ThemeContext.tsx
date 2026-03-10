import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
    theme: Theme;
    resolvedTheme: 'light' | 'dark';
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'system', resolvedTheme: 'dark', toggle: () => { } });

export const useTheme = () => useContext(ThemeContext);

const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const stored = localStorage.getItem('anime-theme');
            if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
        } catch { }
        return 'system';
    });

    const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
        return theme === 'system' ? getSystemTheme() : theme;
    });

    useEffect(() => {
        const root = document.documentElement;
        const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
        setResolvedTheme(effectiveTheme);

        if (effectiveTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try { localStorage.setItem('anime-theme', theme); } catch { }
    }, [theme]);

    useEffect(() => {
        if (theme !== 'system') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            const systemTheme = mediaQuery.matches ? 'dark' : 'light';
            setResolvedTheme(systemTheme);
            const root = document.documentElement;
            if (systemTheme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const toggle = useCallback(() => {
        setTheme((t) => {
            if (t === 'dark') return 'light';
            if (t === 'light') return 'system';
            return 'dark';
        });
    }, []);

    return <ThemeContext.Provider value={{ theme, resolvedTheme, toggle }}>{children}</ThemeContext.Provider>;
};
