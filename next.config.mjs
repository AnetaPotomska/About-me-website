/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')

const nextConfig = {
  distDir: 'build',
}

export default withNextIntl(nextConfig)
