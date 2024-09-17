import { useTranslations } from 'next-intl'
import Image from 'next/image'
import profile from '@/public/web/about/digitalPortrait.png'
import cvut from '@/public/web/about/CVUT_FIT.jpg'

export default function About() {
  const t = useTranslations('aboutPage')
  return (
    <>
      <div className="about-card-group">
        <section className="about-card">
          <div className="about-text">
            <h2>{t('header1')}</h2>
            <div className="paragraph">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
            </div>
          </div>
          <div className="image-content">
            <Image className="web-img" src={cvut} alt={t('imgAlt1')} />
          </div>
        </section>
        <hr className="divider" />
        <section className="about-card">
          <div className="image-content">
            <Image className="web-img" src={profile} alt={t('imgAlt2')} />
          </div>
          <div className="about-text">
            <h2>{t('header2')}</h2>
            <div className="paragraph">
              <p>{t('paragraph3')}</p>
              <p>{t('paragraph4')}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
