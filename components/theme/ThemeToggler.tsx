'use client'

import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'
import { useTheme } from './ThemeProvider'

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <div className={theme === 'dark' ? 'dark-mode' : ''} onClick={toggleTheme}>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </div>
    </>
  )
}
