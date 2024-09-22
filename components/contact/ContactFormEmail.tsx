import { formatDate } from '@/lib/utils'

interface ContactFormEmailProps {
  message: string
  senderEmail: string
  locale: string
}

export const ContactFormEmail = ({ message, senderEmail, locale }: ContactFormEmailProps) => {
  const time = new Date()

  return (
    <>
      <p className="no-text-decorations">
        <b>od:</b> {senderEmail}
      </p>
      <small>
        <b>v:</b> {formatDate(time)} ({locale})
      </small>
      <hr />
      <p>
        <b>zpráva:</b> {message}
      </p>
    </>
  )
}
