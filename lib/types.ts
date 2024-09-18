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

export type ProjectDetails = {
  paragraphs: string[]
  technologies: string[]
}

export type SkillsContent = {
  header: string
  list: string[]
}

export type Language = {
  value: string
  label: string
}
