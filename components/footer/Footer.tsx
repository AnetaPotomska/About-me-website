import { useTranslations } from 'next-intl'
import { EmailFooter } from './EmailFooter'
import { GithubFooter } from './GithubFooter'
import { LinkedinFooter } from './LinkedinFooter'

export const Footer = () => {
  const t = useTranslations('footer')
  return (
    <>
      <footer className="pb-4 mt-auto text-center">
        <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
          <EmailFooter />
          <LinkedinFooter />
          <GithubFooter />
        </div>
        <small>
          &copy; {t('name')}
          <br />
          {t('footerText')}
        </small>
      </footer>
    </>
  )
}
