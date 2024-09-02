import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education',
}

export default function EducationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
