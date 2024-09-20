'use client'

import { ContactFormType } from '@/lib/types'
import { SubmitButton } from './SubmitButton'
import { sendEmail } from '@/lib/sendEmail'

interface ContactFormProps {
  label: string
  textInput: ContactFormType
  textBoxInput: ContactFormType
  submitLabel: string
}

export const ContactForm = ({ label, textInput, textBoxInput, submitLabel }: ContactFormProps) => {
  return (
    <>
      <h3>{label}:</h3>
      <form className="web-form" action={sendEmail}>
        <div className="form-group">
          <label htmlFor="email">{textInput.label}</label>
          <input
            id="email"
            name="email"
            className="form-control"
            type="email"
            placeholder={textInput.placeholder}
            required
            maxLength={300}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="message">{textBoxInput.label}</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder={textBoxInput.placeholder}
            required
            maxLength={3000}
            rows={5}
          />
        </div>
        <SubmitButton label={submitLabel} />
      </form>
    </>
  )
}
