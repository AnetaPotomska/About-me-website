import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('education.title'),
    description: t('education.description'),
  }
}

export default function EducationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
