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
      <h3 className="no-wrap important-text">{content.time}</h3>
      <div className="project-detail-modal-content">
        <div className="paragraph">
          {content.paragraphs.map((paragraph: string, index) => (
            <p key={index + 'paragraph'}>{paragraph}</p>
          ))}
        </div>
        <div className="project-detail-footer">
          <div className="pill-group">
            {content.technologies.map((tech: string, index) => (
              <div key={index + 'tech'} className="pill-tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}
