'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './About.module.css'

const aboutItems = [
  { key: 'masterVisit', icon: '/images/icons/diagnostics.png' },
  { key: 'warranty', icon: '/images/icons/guarantee.png' },
  { key: 'fastRepair', icon: '/images/icons/fast-repair.png' },
  { key: 'originalParts', icon: '/images/icons/original-parts.png' },
  { key: 'experiencedMasters', icon: '/images/icons/experienced-team.png' },
  { key: 'largestService', icon: '/images/icons/largest-service.png' }
] as const

export default function About() {
  const { t } = useLanguage()

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{t.about.header}</h2>
        <div className={styles.aboutContent}>
          {aboutItems.map((item) => (
            <div key={item.key} className={styles.aboutItem}>
              <img src={item.icon} alt={t.about.servicesList[item.key].title} />
              <h3>{t.about.servicesList[item.key].title}</h3>
              <p>{t.about.servicesList[item.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
