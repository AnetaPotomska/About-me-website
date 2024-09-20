import { EducationCard } from '@/components/education/EducationCard'
import { EducationType } from '@/lib/types'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Education() {
  const t = useTranslations()
  return (
    <div className="education-card-group">
      {t.raw('educationPage').map((edu: EducationType, index: number) => (
        <React.Fragment key={edu.schoolName + index}>
          <EducationCard
            schoolName={edu.schoolName}
            time={edu.time}
            description={edu.description}
            adittional={edu.adittional}
            details={edu.details}
          />
        </React.Fragment>
      ))}
    </div>
  )
}
