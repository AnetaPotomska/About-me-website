import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import BootstrapClient from '@/components/BootstrapClient'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--ff',
})

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('home.title'),
    description: t('home.description'),
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={'theme-container d-flex flex-column min-vh-100 ' + roboto.variable}>
        <ThemeProvider>
          <NextIntlClientProvider
            messages={messages}
            timeZone="Europe/Prague"
            now={new Date()}
            locale={locale}
          >
            {children}
          </NextIntlClientProvider>
          <BootstrapClient />
        </ThemeProvider>
      </body>
    </html>
  )
}
