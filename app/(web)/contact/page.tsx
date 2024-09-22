import { ContactForm } from '@/components/contact/ContactForm'
import { Email } from '@/components/contact/Email'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contactMePage')

  return (
    <>
      <div className="contact-title">
        <h2>{t('contactDialog')}:</h2>
        <Email emailLabel={t('emailLabel')} />
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
