"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initialize with dark mode by default
    const html = document.documentElement;
    const body = document.body;
    html.classList.add("dark");
    body.classList.remove("light-mode");
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
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-mews-card border border-mews-border hover:border-mews-accent transition-all duration-300"
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
