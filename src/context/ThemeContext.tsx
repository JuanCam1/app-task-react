import { createContext, useState, useEffect, ReactNode } from 'react';

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;

  openMode: boolean;
  toggleOpenMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProps {
  children: ReactNode
}
export const ThemeProvider = ({ children }: ThemeProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    return savedMode;
  });
  
  const [openMode, setOpenMode] = useState<boolean>(() => {
    const savedMode = JSON.parse(localStorage.getItem('openMode') || 'false');
    return savedMode;
  });

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
    }     
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  useEffect(() => {
    localStorage.setItem('openMode', JSON.stringify(openMode));
  }, [openMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };
  
  const toggleOpenMode = () => {
    setOpenMode((prevMode) => !prevMode);
  };

  const value: ThemeContextType = {
    darkMode,
    toggleDarkMode,
    openMode,
    toggleOpenMode
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
