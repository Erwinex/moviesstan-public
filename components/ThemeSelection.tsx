"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// This is a component that allows the user to select a theme from a dropdown menu.
export default function ThemeSelection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <div>
        <select
          className="rounded-full cursor-pointer inline-block md:hidden border-2 border-slate-400"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">&#127763;</option>
          <option value="dark">&#127761;</option>
          <option value="light">&#127765;</option>
        </select>
        <select
          className="rounded-md cursor-pointer hidden md:inline-block border-2 border-slate-700"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="system">&#127763; System</option>
          <option value="dark">&#127761; Dark</option>
          <option value="light">&#127765; Light</option>
        </select>
      </div>
    )
  );
}
