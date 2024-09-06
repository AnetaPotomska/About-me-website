import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio',
}

export default function SkillsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
