import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('skills.title'),
    description: t('skills.description'),
  }
}

export default function SkillsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
