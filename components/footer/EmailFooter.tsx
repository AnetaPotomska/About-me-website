'use client'

import Link from 'next/link'
import { EmailIcon } from '../icons/EmailIcon'

interface EmailFooterProps {
  label: string
}

export const EmailFooter = ({ label }: EmailFooterProps) => {
  return (
    <>
      <Link title={label} aria-label={label} href="mailto:aneta.potomska@seznam.cz" target="_blank">
        <EmailIcon />
      </Link>
    </>
  )
}
