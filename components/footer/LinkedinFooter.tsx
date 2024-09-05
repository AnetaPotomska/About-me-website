'use client'

import Link from 'next/link'
import { LinkedinIcon } from '../icons/LinkedinIcon'

interface LinkedinFooterProps {
  label: string
}

export const LinkedinFooter = ({ label }: LinkedinFooterProps) => {
  return (
    <>
      <Link
        title={label}
        aria-label={label}
        href="https://www.linkedin.com/in/aneta-potomska/"
        target="_blank"
      >
        <LinkedinIcon />
      </Link>
    </>
  )
}
