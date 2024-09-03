import Image from 'next/image'
import Link from 'next/link'
import profilePic from '@/public/aneta.png'
import { DownloadIcon } from '@/components/icons/DownloadIcon'
import { GoToIcon } from '@/components/icons/GoToIcon'

export default function Welcome() {
  return (
    <>
      <div className="container-fluid page-container">
        <section className="page-content">
          <div className="hero">
            <div className="hero-left-column">
              <div>
                <h1 className="no-wrap">Aneta Potomská</h1>
                <p>Zdravím, jsem softwarový inženýr se zájmem o web development.</p>
              </div>
              <div className="btn-group">
                <Link className="web-btn web-btn-primary web-shadow" href="/projects">
                  <div className="label-btn">
                    <span>Čím se zabývám</span>
                    <GoToIcon />
                  </div>
                </Link>
                <Link
                  className="web-btn web-btn-secondary web-shadow"
                  href="/Aneta_Potomska_CV.pdf"
                  download={true}
                  target="_blank"
                >
                  <div className="label-btn">
                    <span>Stáhnout životopis</span>
                    <DownloadIcon />
                  </div>
                </Link>
              </div>
            </div>
            <div className="image-content">
              <Image className="web-img" src={profilePic} alt="Profile picture" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
