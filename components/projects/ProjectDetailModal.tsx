import { Modal } from '../modal/Modal'

interface ProjectDetailModalProps {
  label: string
  content: string
  usedTechnologies: string[]
  onClose: () => void
}

export const ProjectDetailModal = ({
  label,
  content,
  usedTechnologies,
  onClose,
}: ProjectDetailModalProps) => {
  return (
    <Modal onClose={onClose} title={label}>
      <div className="project-detail-modal-content">
        <p>{content}</p>
        <div className="pill-group align-self-end">
          {usedTechnologies.map((tech) => {
            return <div className="pill-tech">{tech}</div>
          })}
        </div>
      </div>
    </Modal>
  )
}
