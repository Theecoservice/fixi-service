'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Services.module.css'

const services = [
  { key: 'fridge', icon: '/images/icons/fridge.png' },
  { key: 'washingMachine', icon: '/images/icons/washing-machine.png' },
  { key: 'dishwasher', icon: '/images/icons/dishwasher.png' },
  { key: 'airConditioner', icon: '/images/icons/air-conditioner.png' },
  { key: 'cooktop', icon: '/images/icons/cooktop.png' },
  { key: 'electricStove', icon: '/images/icons/electric-stove.png' },
  { key: 'oven', icon: '/images/icons/oven.png' },
  { key: 'freezer', icon: '/images/icons/freezer.png' },
  { key: 'dryer', icon: '/images/icons/dryer.png' }
] as const

export default function Services() {
  const { t } = useLanguage()

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2>{t.services.header}</h2>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.key} className={styles.serviceCard}>
              <img src={service.icon} alt={t.services.servicesList[service.key].title} />
              <h3>{t.services.servicesList[service.key].title}</h3>
              <p>{t.services.servicesList[service.key].description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
