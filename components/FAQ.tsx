'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './FAQ.module.css'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <h2>{t.faq.header}</h2>
        {t.faq.items.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className={styles.toggleIcon}>{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
