import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
};

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored === "light" ? "light" : "dark";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
};
