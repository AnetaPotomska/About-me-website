'use client'

import { Theme, ThemeContextType } from '@/lib/types'
import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark-mode')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark-mode')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === 'dark') {
        document.body.classList.add('dark-mode')
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.body.classList.add('dark-mode')
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error('useTheme muset be used within a ThemeProvider')
  }
  return context
}
