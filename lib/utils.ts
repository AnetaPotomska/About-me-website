export const validateString = (str: unknown, maxLength: number) => {
  return str && typeof str === 'string' && str.length <= maxLength
}

export const getErrorMessage = (error: unknown): string => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Prague',
  }
  return new Intl.DateTimeFormat('cs-CZ', options).format(date)
}
