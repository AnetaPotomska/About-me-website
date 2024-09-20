'use client'

import Image, { StaticImageData } from 'next/image'
import { ProjectCardFooter } from './ProjectCardFooter'
import { useState } from 'react'
import { PhotoModal } from '../modal/PhotoModal'
import { ProjectDetailModal } from './ProjectDetailModal'
import { ProjectDetails } from '@/lib/types'

interface ProjectCardProps {
  label: string
  content: string
  imgSrc: StaticImageData
  imgAlt: string
  aboutHref?: string
  srcHref?: string
  liveHref?: string
  details: ProjectDetails
}

export const ProjectCard = ({
  label,
  content,
  imgSrc,
  imgAlt,
  aboutHref,
  srcHref,
  liveHref,
  details,
}: ProjectCardProps) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)

  return (
    <section key={label} className="project-card web-shadow">
      <div className="project-content-footer">
        <div>
          <h2>{label}</h2>
          <div className="image-content mb-4" onClick={() => setShowPhotoModal(true)}>
            <Image className="project-image" src={imgSrc} alt={imgAlt} />
          </div>
          <p>{content}</p>
        </div>
        <ProjectCardFooter
          aboutHref={aboutHref}
          srcHref={srcHref}
          liveHref={liveHref}
          onInfoClick={() => setShowInfoModal(true)}
        />
      </div>
      {showPhotoModal && (
        <div className="image-content">
          <PhotoModal imgSrc={imgSrc} onClose={() => setShowPhotoModal(false)} label={label} />
        </div>
      )}
      {showInfoModal && (
        <ProjectDetailModal
          onClose={() => setShowInfoModal(false)}
          label={label}
          content={details}
        />
      )}
    </section>
  )
}
