interface SkillCardProps {
  header: string
  list: string[]
}

export const SkillCard = ({ header, list }: SkillCardProps) => {
  return (
    <section key={header} className="skill-card">
      <h2>{header}</h2>
      <span className="dots"></span>
      <div className="pill-group">
        {list.map((item: string, index) => (
          <div key={header + index} className="pill-tech">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
