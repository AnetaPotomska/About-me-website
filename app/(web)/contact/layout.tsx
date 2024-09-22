import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('contact.title'),
    description: t('contact.description'),
  }
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
