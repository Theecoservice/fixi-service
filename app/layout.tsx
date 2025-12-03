import type { Metadata } from 'next'
import Script from 'next/script'
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16884350550"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16884350550');
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
