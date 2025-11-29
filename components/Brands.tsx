'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import styles from './Brands.module.css'

const brands = [
  'samsung', 'lg', 'bosch', 'indesit', 'ariston', 'fujitsu',
  'electrolux', 'liebherr', 'miele', 'candy', 'whirlpool',
  'zanussi', 'aeg', 'ardo', 'beko'
]

export default function Brands() {
  const { t } = useLanguage()

  return (
    <section className={styles.brandIcons}>
      <div className={styles.container}>
        <h2>{t.brands.title}</h2>
        <ul className={styles.brandsList}>
          {brands.map((brand) => (
            <li key={brand} className={styles.brandsItem}>
              <img
                src={`/images/brands/${brand}.png`}
                alt={brand.charAt(0).toUpperCase() + brand.slice(1)}
                className={styles.brandsImg}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
