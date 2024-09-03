import { Locale } from '@/lib/i18n/config'
import { setUserLocale } from '@/lib/i18n/func'
import { Language } from '@/lib/types'
import { startTransition } from 'react'

interface LanguageSelectorProps {
  defaultValue: string
  items: Language[]
  label: string
}

export const LanguageSelector = ({ defaultValue, items, label }: LanguageSelectorProps) => {
  function onChange(value: string) {
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <div>
      <select className="form-select" onChange={(event) => onChange(event.target.value)}>
        {items.map((item) => {
          return (
            <option
              {...(item.value === defaultValue && { selected: true })}
              value={item.value}
              key={item.value}
            >
              {item.value}
            </option>
          )
        })}
      </select>
    </div>
  )
}
