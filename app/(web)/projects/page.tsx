import { ProjectCard } from '@/components/projects/ProjectCard'
import { useTranslations } from 'next-intl'
import summerjob from '@/public/projects/summerjob.png'
import asciiart from '@/public/projects/asciiart.png'
import java from '@/public/projects/java.png'

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
            details={t('summerjob.details')}
            usedTechnologies={['TYPESCRIPT', 'NEXT.JS', 'PRISMA', 'HTML', 'CSS', 'FIGMA']}
          />
          <ProjectCard
            label={t('asciiart.label')}
            content={t('asciiart.content')}
            imgSrc={asciiart}
            imgAlt={t('asciiart.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/ASCIIArt"
            details={t('asciiart.details')}
            usedTechnologies={['SCALA', 'MOCKITO']}
          />
          <ProjectCard
            label={t('java.label')}
            content={t('java.content')}
            imgSrc={java}
            imgAlt={t('java.imgAlt')}
            srcHref="https://github.com/AnetaPotomska/BI-TJV_Technologie-Java"
            details={t('java.details')}
            usedTechnologies={['JAVA']}
          />
        </div>
      </section>
    </div>
  )
}
