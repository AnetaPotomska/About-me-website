import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'navPaths' })

  return {
    title: t('education'),
  }
}

export default function EducationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
