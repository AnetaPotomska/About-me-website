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
  time: string
}

export type EducationType = {
  schoolName: string
  time: string
  description: string
  adittional?: string
  details: EducationDetails
}

export type Semester = {
  label: string
  content: string[]
}

export type EducationDetails = {
  label: string
  paragraphs: string[]
  semesters?: Semester[]
}

export type SkillsContent = {
  header: string
  list: string[]
}

export type Language = {
  value: string
  label: string
}
