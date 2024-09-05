import { Locale } from '@/lib/i18n/config'
import { setUserLocale } from '@/lib/i18n/func'
import { Language } from '@/lib/types'
import { startTransition, useState } from 'react'

interface LanguageSelectorProps {
  defaultValue: string
  items: Language[]
  label: string
}

export const LanguageSelector = ({ defaultValue, items, label }: LanguageSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  function onChange(value: string) {
    setSelectedValue(value)
    const locale = value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <div>
      <select
        className="web-form-select web-btn-tertiary"
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        title={label}
        aria-label={label}
      >
        {items.map((item) => {
          return (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          )
        })}
      </select>
    </div>
  )
}
