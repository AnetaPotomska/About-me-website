import { useLocale, useTranslations } from 'next-intl'
import { LanguageSelector } from './LanguageSelector'

export const LanguageSwitch = () => {
  const t = useTranslations('LanguageSelect')
  const locale = useLocale()

  return (
    <LanguageSelector
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en'),
        },
        {
          value: 'cs',
          label: t('de'),
        },
      ]}
      label={t('label')}
    />
  )
}
