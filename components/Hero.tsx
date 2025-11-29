'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <h2 className={styles.subtitle}>{t.hero.subtitle}</h2>

          <div className={styles.contactInfo}>
            <p>
              <span className={styles.phoneIcon}>📞</span>
              <a href="tel:+48575453995"> +48 (575) 453-995</a>
            </p>
          </div>

          <button className={styles.repairButton} onClick={scrollToForm}>
            {t.hero.orderRepair}
          </button>
        </div>
      </div>
    </section>
  )
}
