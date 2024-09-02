import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O mně',
}

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
