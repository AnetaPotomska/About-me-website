import { Footer } from '@/components/footer/Footer'
import { Navbar } from '@/components/navbar/Navbar'
import { useTranslations } from 'next-intl'

export default function WebLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const t = useTranslations('navPaths')

  return (
    <>
      <Navbar
        navPaths={[
          {
            path: '/about',
            name: t('about'),
            icon: '',
          },
          {
            path: '/projects',
            name: t('projects'),
            icon: '',
          },
          {
            path: '/skills',
            name: t('skills'),
            icon: '',
          },
          {
            path: '/education',
            name: t('education'),
            icon: '',
          },
          {
            path: '/contact',
            name: t('contact'),
            icon: '',
          },
        ]}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}
