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
          },
          {
            path: '/projects',
            name: t('projects'),
          },
          {
            path: '/skills',
            name: t('skills'),
          },
          {
            path: '/education',
            name: t('education'),
          },
          {
            path: '/contact',
            name: t('contact'),
          },
        ]}
      />
      <main>
        <div className="container-fluid page-container">
          <div className="page-content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
