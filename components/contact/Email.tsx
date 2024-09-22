'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface EmailProps {
  emailLabel: string
}

export const Email = ({ emailLabel }: EmailProps) => {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const user = 'aneta.potomska'
    const domain = 'seznam.cz'

    setEmail(`${user}@${domain}`)
  }, [])

  return (
    <Link
      title={emailLabel}
      aria-label={emailLabel}
      href={`mailto:${email}`}
      target="_blank"
      className="no-text-decorations"
    >
      <h2 className="no-wrap important-text">
        aneta.
        <wbr />
        <span className="display-none">duwlanv</span>
        potomska@
        <wbr />
        seznam.cz
      </h2>
    </Link>
  )
}
