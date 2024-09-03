export type NavPath = {
  path: string
  name: string
  icon: string
}

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

export type Attribute = `data-${string}` | 'class'
