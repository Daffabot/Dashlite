import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import type { Theme, ThemeProviderProps, ThemeContextType } from "@/types";

/**
 * ThemeProvider — handles light/dark/system theme with full mobile safety.
 * No flicker, no mismatch, consistent color rendering across devices.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = localStorage.getItem("theme") as Theme | null;
    return stored || defaultTheme;
  });

  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;

    const applyTheme = (t: Theme) => {
      let resolved = t;
      if (t === "system") {
        resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      }

      root.setAttribute("data-theme", resolved);
      root.style.colorScheme = resolved;
      setIsDark(resolved === "dark");
    };

    applyTheme(theme);
    setMounted(true);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme("system");
      media.addEventListener("change", handler);
      return () => media.removeEventListener("change", handler);
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore Safari private mode errors
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark,
    }),
    [theme, isDark, toggleTheme]
  );

  if (!mounted) return null; // prevent initial paint flicker

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};