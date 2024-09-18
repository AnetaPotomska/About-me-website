import { useTranslations } from 'next-intl'
import { SkillsContent } from '@/lib/types'
import { SkillCard } from '@/components/skills/SkillCard'
import React from 'react'

export default function Skills() {
  const t = useTranslations()

  return (
    <div className="skill-card-group">
      {t.raw('skillsPage').map((item: SkillsContent, index: number) => (
        <React.Fragment key={item.header + index}>
          <SkillCard header={item.header} list={item.list} />
        </React.Fragment>
      ))}
    </div>
  )
}
