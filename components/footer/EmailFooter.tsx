'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { EmailIcon } from '../icons/EmailIcon'

interface EmailFooterProps {
  label: string
}

export const EmailFooter = ({ label }: EmailFooterProps) => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const user = 'aneta.potomska'
    const domain = 'seznam.cz'

    setEmail(`${user}@${domain}`)
  }, [])

  return (
    <>
      <Link title={label} aria-label={label} href={`mailto:${email}`} target="_blank">
        <EmailIcon />
      </Link>
    </>
  )
}
