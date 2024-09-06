'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { GithubFooter } from '../footer/GithubFooter'
import { InfoIcon } from '../icons/InfoIcon'
import { OutsideWebsiteIcon } from '../icons/OutsideWebsiteIcon'
import { QuestionMarkIcon } from '../icons/QuestionMarkIcon'
import { ProjectDetailModal } from './ProjectDetailModal'

interface ProjectCardFooterProps {
  aboutHref?: string
  srcHref?: string
  liveHref?: string
  onInfoClick: () => void
}

export const ProjectCardFooter = ({
  aboutHref,
  srcHref,
  liveHref,
  onInfoClick,
}: ProjectCardFooterProps) => {
  const t = useTranslations('cardFooter')
  return (
    <div className="project-footer">
      <div className="project-footer-group">
        {srcHref && <GithubFooter label={t('src')} href={srcHref} />}
        {aboutHref && (
          <Link title={t('about')} aria-label={t('about')} href={aboutHref} target="_blank">
            <QuestionMarkIcon />
          </Link>
        )}
        {liveHref && (
          <Link title={t('live')} aria-label={t('live')} href={liveHref} target="_blank">
            <OutsideWebsiteIcon />
          </Link>
        )}
      </div>
      <span onClick={onInfoClick}>
        <InfoIcon />
      </span>
    </div>
  )
}
