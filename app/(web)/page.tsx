import Image from 'next/image'
import Link from 'next/link'
import profilePic from '@/public/headShot.png'
import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { GoToIcon } from '@/components/icons/GoToIcon'
import { useTranslations } from 'next-intl'

export default function Welcome() {
  const t = useTranslations('welcomePage')

  return (
    <>
      <div className="container-fluid page-container">
        <section className="page-content">
          <div className="hero">
            <div className="hero-left-column">
              <div>
                <h1 className="no-wrap">{t('name')}</h1>
                <p>{t('mainContent')}</p>
              </div>
              <div className="btn-group">
                <Link className="web-btn web-btn-primary web-shadow" href="/projects">
                  <div className="label-btn">
                    <span>{t('primaryAction')}</span>
                    <GoToIcon />
                  </div>
                </Link>
                <Link
                  className="web-btn web-btn-secondary web-shadow"
                  href={`/Aneta_Potomska_CV_${t('cvLang')}.pdf`}
                  download={true}
                  target="_blank"
                >
                  <div className="label-btn">
                    <span>{t('secondaryAction')}</span>
                    <DownloadIcon />
                  </div>
                </Link>
              </div>
            </div>
            <div className="image-content">
              <Image className="web-img" src={profilePic} alt={t('picAlt')} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
