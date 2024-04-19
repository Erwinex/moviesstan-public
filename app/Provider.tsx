"use client";

import { ThemeProvider } from "next-themes";

// That's a theme provider from next-themes wich is a context base theme selection popular library and it's identical to context
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div>{children}</div>
    </ThemeProvider>
  );
}
