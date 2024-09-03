import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
//<Toaster position="top-right" />
