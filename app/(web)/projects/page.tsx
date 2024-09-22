import { ProjectCard } from '@/components/projects/ProjectCard'
import { useTranslations } from 'next-intl'
import summerjob from '@/public/web/projects/summerjob.png'
import asciiart from '@/public/web/projects/asciiart.png'
import java from '@/public/web/projects/java.png'
import bomberman from '@/public/web/projects/bomberman.png'
import vue from '@/public/web/projects/vue.png'
import portfolio from '@/public/web/projects/portfolio.png'

export default function Projects() {
  const t = useTranslations('projects')
  return (
    <div className="project-card-group">
      <ProjectCard
        label={t('portfolio.label')}
        content={t('portfolio.content')}
        imgSrc={portfolio}
        imgAlt={t('portfolio.imgAlt')}
        srcHref="https://github.com/AnetaPotomska/About-me-website"
        details={t.raw('portfolio.details')}
      />
      <ProjectCard
        label={t('summerjob.label')}
        content={t('summerjob.content')}
        imgSrc={summerjob}
        imgAlt={t('summerjob.imgAlt')}
        srcHref="https://github.com/AnetaPotomska/summerjob"
        aboutHref="https://summerjob.eu/"
        details={t.raw('summerjob.details')}
      />
      <ProjectCard
        label={t('asciiart.label')}
        content={t('asciiart.content')}
        imgSrc={asciiart}
        imgAlt={t('asciiart.imgAlt')}
        srcHref="https://github.com/AnetaPotomska/ASCIIArt"
        details={t.raw('asciiart.details')}
      />
      <ProjectCard
        label={t('java.label')}
        content={t('java.content')}
        imgSrc={java}
        imgAlt={t('java.imgAlt')}
        srcHref="https://github.com/AnetaPotomska/BI-TJV_Technologie-Java"
        details={t.raw('java.details')}
      />
      <ProjectCard
        label={t('bomberman.label')}
        content={t('bomberman.content')}
        imgSrc={bomberman}
        imgAlt={t('bomberman.imgAlt')}
        srcHref="https://github.com/AnetaPotomska/Bomberman"
        details={t.raw('bomberman.details')}
      />
      <ProjectCard
        label={t('vue.label')}
        content={t('vue.content')}
        imgSrc={vue}
        imgAlt={t('vue.imgAlt')}
        details={t.raw('vue.details')}
      />
    </div>
  )
}
