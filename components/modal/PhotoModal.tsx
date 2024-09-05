import Image, { StaticImageData } from 'next/image'
import { Modal } from './Modal'

interface PhotoModalProps {
  onClose: () => void
  imgSrc: StaticImageData
}

export const PhotoModal = ({ onClose, imgSrc }: PhotoModalProps) => {
  return (
    <>
      <Modal onClose={onClose}>
        <Image className="modal-image" src={imgSrc} alt={''} />
      </Modal>
    </>
  )
}
