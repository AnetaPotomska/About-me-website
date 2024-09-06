'use server'

import { cookies, headers } from 'next/headers'
import { defaultLocale, Locale } from './config'

const COOKIE_NAME = 'NEXT_LOCALE'

export async function getUserLocale() {
  const fromCookies = cookies().get(COOKIE_NAME)?.value
  if (fromCookies !== undefined) return fromCookies
  const headersList = headers()
  const lang = headersList.get('accept-language')
  return lang?.includes('cs') ? 'cs' : lang?.includes('en') ? 'en' : defaultLocale
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale)
}
