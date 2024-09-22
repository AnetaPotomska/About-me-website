export const validateString = (str: unknown, maxLength: number) => {
  return str && typeof str === 'string' && str.length <= maxLength
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
