'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInfo}>
          <h3>{t.contact.contactInfo}</h3>
          <div className={styles.footerDetails}>
            <p><strong>{t.contact.workingHours}:</strong> {t.contact.workingHoursValue}</p>
            <p><strong>{t.contact.phone}:</strong> <a href="tel:+48733928772">+48 733 928 772</a></p>
            <p><strong>{t.contact.email}:</strong> <a href="mailto:contact@fixiservice.pl">contact@fixiservice.pl</a></p>
            <p><strong>{t.contact.address}:</strong> {t.contact.addressValue}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
