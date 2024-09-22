import { EducationDetails, Semester } from '@/lib/types'
import { Modal } from '../modal/Modal'
import React from 'react'

interface EducationDetailModalProps {
  content: EducationDetails
  onClose: () => void
}

export const EducationDetailModal = ({ content, onClose }: EducationDetailModalProps) => {
  return (
    <Modal onClose={onClose} title={content.label}>
      <div className="project-detail-modal-content">
        <div className="paragraph">
          {content.paragraphs.map((paragraph: string, index) => (
            <p key={index + 'paragraph'}>{paragraph}</p>
          ))}
        </div>
        {content.semesters && (
          <div className="semester-group">
            {content.semesters.map((semester: Semester, index) => (
              <div key={index + 'semester'} className="semester">
                <div>
                  <p>{semester.label}</p>
                </div>
                <div className="pill-group">
                  {semester.content.map((item, index) => (
                    <div key={item + index} className="pill-edu">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}
