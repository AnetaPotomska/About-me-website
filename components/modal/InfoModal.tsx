import { Modal } from './Modal'

interface InfoModalProps {
  content: string
  onClose: () => void
}

export const InfoModal = ({ content, onClose }: InfoModalProps) => {
  return (
    <Modal onClose={onClose}>
      <p>hello</p>
      <p>{content}</p>
    </Modal>
  )
}
