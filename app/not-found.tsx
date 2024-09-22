'use client'

import { GoToIcon } from '@/components/icons/GoToIcon'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const t = useTranslations('notFound')
  const router = useRouter()

  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>{t('label')}</h2>
      </div>
      <span className="vertical-line"></span>
      <button className="web-btn web-btn-primary web-shadow" onClick={() => router.back()}>
        <div className="label-btn">
          <span>{t('goBack')}</span>
          <GoToIcon />
        </div>
      </button>
    </div>
  )
}

export default NotFound
