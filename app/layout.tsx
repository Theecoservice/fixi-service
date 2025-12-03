import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

export const metadata: Metadata = {
  title: 'FixiService - Professional Appliance Repair',
  description: 'Professional appliance repair services in Warsaw. Fast, reliable, and guaranteed repairs for all major brands.',
  icons: {
    icon: '/images/main-logo.png',
    apple: '/images/main-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
