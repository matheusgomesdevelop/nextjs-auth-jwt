'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | string | null;

const defaultTheme = {
    light: {
        white: '#ffffff',
        gray50: '#f9fafb',
        gray500: '#667085',
        gray900: '#101828',
        textColor: '#344054',
    },
    dark: {
        white: '#101828',
        gray50: '#f9fafb',
        gray500: '#f9fafb',
        gray900: '#f9fafb',
        textColor: '#f9fafb',
    },
};

const executeLightTheme = () => {
    document.documentElement.style.setProperty('--white', defaultTheme.light.white);
    document.documentElement.style.setProperty('--gray-500', defaultTheme.light.gray500);
    document.documentElement.style.setProperty('--gray-900', defaultTheme.light.gray900);
    document.documentElement.style.setProperty('--text-color', defaultTheme.light.textColor);
};

const executeDarkTheme = () => {
    document.documentElement.style.setProperty('--white', defaultTheme.dark.white);
    document.documentElement.style.setProperty('--gray-500', defaultTheme.dark.gray50);
    document.documentElement.style.setProperty('--gray-900', defaultTheme.dark.gray50);
    document.documentElement.style.setProperty('--text-color', defaultTheme.dark.gray50);
};

const useTheme = () => {
    const themeStorage: Theme | string | null = globalThis?.localStorage?.getItem('theme');

    const [theme, setTheme] = useState<Theme>(themeStorage || 'light');

    useEffect(() => {
        const initTheme = () => {
            const root = document.querySelector(':root');

            if (root && themeStorage) {
                if (themeStorage === 'light') {
                    executeLightTheme();
                } else {
                    executeDarkTheme();
                }
            }
        };

        themeStorage && initTheme();
    }, [theme, themeStorage]);

    const toggleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return {
        theme,
        setTheme,
        toggleTheme,
    };
};

export default useTheme;
