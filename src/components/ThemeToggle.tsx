"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Initialize with dark mode by default
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("dark");
    body.classList.remove("light-mode");
    
    // Listen for theme changes from other components
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsDark(customEvent.detail.isDark);
    };
    
    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isDark) {
      html.classList.add("dark");
      body.classList.remove("light-mode");
    } else {
      html.classList.remove("dark");
      body.classList.add("light-mode");
    }
    
    // Emit theme change event for other components
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { isDark } }));
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition <= 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full bg-mews-card border border-mews-border hover:border-mews-accent transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-mews-text" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
