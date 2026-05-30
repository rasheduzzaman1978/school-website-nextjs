"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-white hover:scale-105 transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-slate-700 text-lg" />
      )}
    </button>
  );
}