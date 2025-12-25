"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex items-center justify-center w-8 h-8 border border-gray-300 bg-white text-gray-700"
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4 flex items-center justify-center">
          <FaSun />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-8 h-8 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-black dark:hover:border-gray-400 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="w-4 h-4 flex items-center justify-center">
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </div>
    </button>
  );
}
