'use client'

import { Moon, Sun } from 'lucide-react';
import { Button } from '../atoms/button';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
  
    return (
      <Button
        variant="secondary"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="text-base text-white bg-primary hover:bg-accent dark:bg-secondary dark:hover:bg-accent"
      >
        <Sun className="h-[2rem] w-[2rem] inline rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
        <Moon className="h-[2rem] w-[2rem] rotate-90 scale-0 transition-all hidden dark:rotate-0 dark:scale-100 dark:inline" />
        Toggle theme
      </Button>
    )
  }