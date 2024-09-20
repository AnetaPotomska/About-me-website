'use client'

import { EducationDetails } from '@/lib/types'
import { useState } from 'react'
import { InfoIcon } from '../icons/InfoIcon'
import { EducationDetailModal } from './EducationDetailModal'

interface EducationCardProps {
  schoolName: string
  time: string
  description: string
  adittional?: string
  details: EducationDetails
}

export const EducationCard = ({
  schoolName,
  time,
  description,
  adittional,
  details,
}: EducationCardProps) => {
  const [detailModal, setDetailModal] = useState(false)

  return (
    <section key={schoolName + time} className="education-card">
      <span className="dot"></span>
      <div className="education-card-content web-shadow">
        <h2>{schoolName}</h2>
        <h3>{time}</h3>
        <p>{description}</p>
        <div className="education-footer">
          {adittional && <small>{adittional}</small>}
          <div className="align-self-end" onClick={() => setDetailModal(true)}>
            <InfoIcon />
          </div>
        </div>
        <span className="arrow"></span>
      </div>
      {detailModal && (
        <EducationDetailModal content={details} onClose={() => setDetailModal(false)} />
      )}
    </section>
  )
}

/*
education-card-group = timeline
education-card = container
education-card-content = text-box
*/
