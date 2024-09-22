'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface EmailProps {
  emailLabel: string
}

export const Email = ({ emailLabel }: EmailProps) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [domain, setDomain] = useState('')

  useEffect(() => {
    const name = 'aneta'
    const surname = 'potomska'
    const domain = 'seznam.cz'

    setName(name)
    setSurname(surname)
    setDomain(domain)
    setEmail(`${name}.${surname}@${domain}`)
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
        {name}.
        <wbr />
        <span className="display-none">duwlanv</span>
        {surname}@
        <wbr />
        {domain}
      </h2>
    </Link>
  )
}
