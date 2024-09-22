'use client'

import { useFormStatus } from 'react-dom'
import { EmailIcon } from '../icons/EmailIcon'

interface SubmitButtonProps {
  label: string
}

export const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <>
      <button
        disabled={pending}
        type="submit"
        className="web-btn web-btn-primary web-shadow align-self-end mt-4"
      >
        <div className="label-btn">
          <span>{label}</span>
          <EmailIcon />
        </div>
      </button>
    </>
  )
}
