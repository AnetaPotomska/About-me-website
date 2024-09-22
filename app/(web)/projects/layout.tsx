import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('projects.title'),
    description: t('projects.description'),
  }
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
