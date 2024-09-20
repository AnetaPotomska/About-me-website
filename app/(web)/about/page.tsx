import { AboutCard } from '@/components/about/AboutCard'
import cvut from '@/public/web/about/CVUT_FIT.jpg'
import profile from '@/public/web/about/digitalPortrait.png'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('aboutPage')

  return (
    <div className="about-card-group">
      <AboutCard
        header={t('education.header')}
        paragraphs={t.raw('education.paragraphs')}
        imgSrc={cvut}
        imgAlt={t('education.imgAlt')}
      />
      <hr className="divider" />
      <AboutCard
        header={t('hobbies.header')}
        paragraphs={t.raw('hobbies.paragraphs')}
        imgSrc={profile}
        imgAlt={t('hobbies.imgAlt')}
      />
    </div>
  )
}
