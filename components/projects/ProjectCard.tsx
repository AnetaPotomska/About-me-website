'use client'

import summerjob from '@/public/projects/summerjob.png'
import Image, { StaticImageData } from 'next/image'
import { ProjectCardFooter } from './ProjectCardFooter'
import { useState } from 'react'
import { PhotoModal } from '../modal/PhotoModal'

interface ProjectCardProps {
  label: string
  content: string
  imgSrc: StaticImageData
  imgAlt: string
  aboutHref?: string
  srcHref?: string
  liveHref?: string
}

export const ProjectCard = ({
  label,
  content,
  imgSrc,
  imgAlt,
  aboutHref,
  srcHref,
  liveHref,
}: ProjectCardProps) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  return (
    <div className="project-card web-shadow">
      <div className="image-content mb-4" onClick={() => setShowPhotoModal(true)}>
        <Image className="project-image" src={summerjob} alt={imgAlt} />
      </div>
      <div className="project-content-footer">
        <div>
          <h3>{label}</h3>
          <p>{content}</p>
        </div>
        <ProjectCardFooter aboutHref={aboutHref} srcHref={srcHref} liveHref={liveHref} />
      </div>
      {showPhotoModal && (
        <div className="image-content">
          <PhotoModal imgSrc={imgSrc} onClose={() => setShowPhotoModal(false)} />
        </div>
      )}
    </div>
  )
}
