"use client";
import { useTheme } from "next-themes";
export default function ThemeSelection() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <select
        className="rounded-full cursor-pointer inline-block sm:hidden"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">&#127763;</option>
        <option value="dark">&#127761;</option>
        <option value="light">&#127765;</option>
      </select>
      <select
        className="rounded-md cursor-pointer hidden sm:inline-block"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">&#127763; System</option>
        <option value="dark">&#127761; Dark</option>
        <option value="light">&#127765; Light</option>
      </select>
    </div>
  );
}
