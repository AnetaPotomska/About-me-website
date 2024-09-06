import Image, { StaticImageData } from 'next/image'
import { Modal } from './Modal'

interface PhotoModalProps {
  onClose: () => void
  imgSrc: StaticImageData
  label: string
}

export const PhotoModal = ({ onClose, imgSrc, label }: PhotoModalProps) => {
  return (
    <>
      <Modal onClose={onClose} title={label}>
        <Image className="modal-image" src={imgSrc} alt={''} />
      </Modal>
    </>
  )
}
