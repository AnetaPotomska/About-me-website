import { formatDate } from '@/lib/utils'

interface ContactFormEmailProps {
  message: string
  senderEmail: string
}

export const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  const time = new Date()

  return (
    <>
      <h2 className="no-text-decorations">od: {senderEmail}</h2>
      <small>{formatDate(time)}</small>
      <p>zpráva: {message}</p>
    </>
  )
}
