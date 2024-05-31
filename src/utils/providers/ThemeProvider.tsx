'use client';

import { ThemeSwitcher } from "@/components";
import { useState } from "react";

type Props = { children: React.ReactNode, };

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<boolean>(false);

  const toggleTheme = () => setTheme(!theme);

  const darkMode = 'bg-black text-white'

  return (
    <div className={theme ? "dark" : ""}>
      {children}
      {/* <ThemeSwitcher
        onClick={toggleTheme}
        className={theme ? "fixed bottom-7 right-7 bg-gray-light w-16 h-16 rounded-full" : `${darkMode} fixed bottom-7 right-7 w-16 h-16 rounded-full`}
        theme={theme}
      /> */}
    </div>
  );
};