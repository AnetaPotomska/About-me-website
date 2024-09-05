import { ProjectCard } from '@/components/projects/ProjectCard'
import { useTranslations } from 'next-intl'
import summerjob from '@/public/projects/summerjob.png'

export default function Projects() {
  const t = useTranslations('projects')
  return (
    <div className="container-fluid page-container">
      <section className="page-content">
        <div className="project-card-group">
          <ProjectCard
            label={t('summerjob.label')}
            content={t('summerjob.content')}
            imgSrc={summerjob}
            imgAlt={t('summerjob.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/summerjob"
            aboutHref="https://summerjob.eu/"
          />
          <ProjectCard
            label={t('summerjob.label')}
            content={t('summerjob.content')}
            imgSrc={summerjob}
            imgAlt={t('summerjob.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/summerjob"
            aboutHref="https://summerjob.eu/"
          />
          <ProjectCard
            label={t('summerjob.label')}
            content={t('summerjob.content')}
            imgSrc={summerjob}
            imgAlt={t('summerjob.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/summerjob"
            aboutHref="https://summerjob.eu/"
          />
          <ProjectCard
            label={t('summerjob.label')}
            content={t('summerjob.content')}
            imgSrc={summerjob}
            imgAlt={t('summerjob.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/summerjob"
            aboutHref="https://summerjob.eu/"
          />
          <ProjectCard
            label={t('summerjob.label')}
            content={t('summerjob.content')}
            imgSrc={summerjob}
            imgAlt={t('summerjob.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/summerjob"
            aboutHref="https://summerjob.eu/"
          />
        </div>
      </section>
    </div>
  )
}
