'use server'

import { ContactFormEmail } from '@/components/contact/ContactFormEmail'
import { getLocale, getTranslations } from 'next-intl/server'
import React from 'react'
import { Resend } from 'resend'
import { validateString } from './utils'

const resend = new Resend(process.env.RESEND_API_KEY)

const email = process.env.EMAIL || ''

export const sendEmail = async (formData: FormData) => {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'toast' })
  const senderEmail = formData.get('email')
  const message = formData.get('message')

  if (!validateString(senderEmail, 200)) {
    return {
      error: t('email.failure.sender'),
    }
  }
  if (!validateString(message, 2000)) {
    return {
      error: t('email.failure.message'),
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
        locale: locale,
      }),
    })
  } catch (error: unknown) {
    return {
      error: t('email.failure.default'),
    }
  }
  return {
    data,
  }
}
