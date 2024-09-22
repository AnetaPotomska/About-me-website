import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'navPaths' })

  return {
    title: t('projects'),
  }
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
