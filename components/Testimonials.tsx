'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <h2>{t.testimonials.header}</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.statsBox}>
            <span className={styles.percentage}>97%</span>
            <p className={styles.positiveReviews}>{t.testimonials.positive} →</p>
            <p className={styles.reviewCount}>400+ {t.testimonials.totalReviews}</p>
          </div>
          {t.testimonials.items.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <p>{testimonial.feedback}</p>
              <div className={styles.testimonialFooter}>
                <div className={styles.authorLocation}>
                  <span className={styles.author}>{testimonial.name}</span>
                  <span className={styles.location}>{testimonial.location}</span>
                </div>
                <span className={styles.date}>{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
