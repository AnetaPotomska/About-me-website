'use client'

import Link from 'next/link'
import { EmailIcon } from '../icons/EmailIcon'

interface EmailFooterProps {
  label: string
  email: string
}

export const EmailFooter = ({ label, email }: EmailFooterProps) => {
  return (
    <>
      <Link title={label} aria-label={label} href={`mailto:${email}`} target="_blank">
        <EmailIcon />
      </Link>
    </>
  )
}
