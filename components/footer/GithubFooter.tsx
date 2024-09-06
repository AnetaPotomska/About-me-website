'use client'

import Link from 'next/link'
import { GitHubIcon } from '../icons/GitHubIcon'

interface GithubFooterProps {
  label: string
  href: string
}

export const GithubFooter = ({ label, href }: GithubFooterProps) => {
  return (
    <>
      <Link title={label} aria-label={label} href={href} target="_blank">
        <GitHubIcon />
      </Link>
    </>
  )
}
