'use server'

import React from 'react'
import { Resend } from 'resend'
import { getErrorMessage, validateString } from './utils'
import { ContactFormEmail } from '@/components/contact/ContactFormEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

const email = process.env.EMAIL || ''

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email')
  const message = formData.get('message')
  if (!validateString(senderEmail, 200)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 2000)) {
    return {
      error: 'Invalid sender email',
    }
  }
  let data
  try {
    data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: email,
      subject: 'Portfolio kontaktní formulář',
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }
  return {
    data,
  }
}
