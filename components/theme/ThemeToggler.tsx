'use client'

import { useTranslations } from 'next-intl'
import { MoonIcon } from '../icons/MoonIcon'
import { SunIcon } from '../icons/SunIcon'
import { useTheme } from './ThemeProvider'

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme()
  const t = useTranslations('themeToggle')
  const label = theme === 'light' ? t('sunIcon') : t('moonIcon')

  return (
    <>
      <div title={label} aria-label={label} onClick={toggleTheme}>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </div>
    </>
  )
}
