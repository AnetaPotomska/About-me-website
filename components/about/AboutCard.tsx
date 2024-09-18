import Image, { StaticImageData } from 'next/image'

interface AboutCardProps {
  header: string
  paragraphs: string[]
  imgSrc: StaticImageData
  imgAlt: string
}

export const AboutCard = ({ header, paragraphs, imgSrc, imgAlt }: AboutCardProps) => {
  return (
    <section key={header} className="about-card">
      <div className="about-text">
        <h2>{header}</h2>
        <div className="paragraph">
          {paragraphs.map((paragraph: string, index) => (
            <p key={header + index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="image-content">
        <Image className="web-img" src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  )
}
