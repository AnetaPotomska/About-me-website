import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('about.title'),
    description: t('about.description'),
  }
}

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
