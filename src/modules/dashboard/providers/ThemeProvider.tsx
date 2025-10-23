import React, { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import type { Theme, ThemeProviderProps, ThemeContextType } from "@/types";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme;
    return stored || defaultTheme;
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    const updateTheme = () => {
      let effectiveTheme = theme;

      if (theme === "system") {
        effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
      }

      const isDarkMode = effectiveTheme === "dark";
      setIsDark(isDarkMode);

      root.setAttribute("data-theme", effectiveTheme);
    };

    updateTheme();
    localStorage.setItem("theme", theme);

    // Listen for system theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
