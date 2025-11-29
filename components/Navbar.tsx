'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Language } from '@/lib/i18n/translations'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const languages: { code: Language; label: string }[] = [
    { code: 'pl', label: 'PL' },
    { code: 'ua', label: 'UA' },
    { code: 'en', label: 'EN' }
  ]

  return (
    <nav className={styles.navbar}>
      <a className={styles.brand} href="#">
        <img src="/images/main-logo.png" alt="FixiService Logo" className={styles.logo} />
        FixiService
      </a>

      <button
        className={styles.toggler}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        <span className={styles.togglerIcon}></span>
      </button>

      <div className={`${styles.collapse} ${isMenuOpen ? styles.show : ''}`}>
        <ul className={styles.nav}>
          <li><a onClick={() => scrollToSection('hero')}>{t.navbar.home}</a></li>
          <li><a onClick={() => scrollToSection('services')}>{t.navbar.services}</a></li>
          <li><a onClick={() => scrollToSection('about')}>{t.navbar.about}</a></li>
          <li><a onClick={() => scrollToSection('testimonials')}>{t.navbar.testimonials}</a></li>
          <li><a onClick={() => scrollToSection('contact')}>{t.navbar.contact}</a></li>
          <li className={styles.langSwitcher}>
            <div className={styles.langBtns}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? styles.active : ''}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
