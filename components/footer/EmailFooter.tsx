'use client'

import Link from 'next/link'
import { EmailIcon } from '../icons/EmailIcon'

interface EmailFooterProps {
  label: string
}

export const EmailFooter = ({ label }: EmailFooterProps) => {
  const email = process.env.EMAIL || 'aneta.potomska@seznam.cz'

  return (
    <>
      <Link title={label} aria-label={label} href={`mailto:${email}`} target="_blank">
        <EmailIcon />
      </Link>
    </>
  )
}
