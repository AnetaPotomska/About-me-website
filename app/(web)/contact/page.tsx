import { ContactForm } from '@/components/contact/ContactForm'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Contact() {
  const t = useTranslations('contactMePage')

  const email = process.env.EMAIL || 'aneta.potomska@seznam.cz'

  return (
    <>
      <div className="contact-title">
        <h2>{t('contactDialog')}:</h2>
        <Link
          title={t('emailLabel')}
          aria-label={t('emailLabel')}
          href={`mailto:${email}`}
          target="_blank"
          className="no-text-decorations"
        >
          <h2 className="no-wrap important-text">
            aneta.
            <wbr />
            potomska@
            <wbr />
            seznam.cz
          </h2>
        </Link>
      </div>
      <hr />
      <ContactForm
        label={t('contactOnPage.label')}
        textInput={t.raw('contactOnPage.form.textInput')}
        textBoxInput={t.raw('contactOnPage.form.textBoxInput')}
        submitLabel={t('contactOnPage.submitLabel')}
      />
    </>
  )
}
