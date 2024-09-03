import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import BootstrapClient from '@/components/BootstrapClient'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--ff',
})

export const metadata: Metadata = {
  title: 'Aneta Potomská',
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Životopis a zdokumentovaní vytvořených projektů Anety Potomské.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className={'theme-container d-flex flex-column min-vh-100 ' + roboto.variable}>
        <ThemeProvider>
          {children}
          <BootstrapClient />
        </ThemeProvider>
      </body>
    </html>
  )
}
