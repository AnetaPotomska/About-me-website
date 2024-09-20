import { ProjectDetails } from '@/lib/types'
import { Modal } from '../modal/Modal'

interface ProjectDetailModalProps {
  label: string
  content: ProjectDetails
  onClose: () => void
}

export const ProjectDetailModal = ({ label, content, onClose }: ProjectDetailModalProps) => {
  return (
    <Modal onClose={onClose} title={label}>
      <div className="project-detail-modal-content">
        <div className="paragraph">
          {content.paragraphs.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}
        </div>
        <div className="project-detail-footer">
          <p className="no-wrap important-text">{content.time}</p>
          <div className="pill-group align-self-end">
            {content.technologies.map((tech: string) => {
              return <div className="pill-tech">{tech}</div>
            })}
          </div>
        </div>
      </div>
    </Modal>
  )
}
