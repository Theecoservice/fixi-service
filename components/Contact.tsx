'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { sendTelegramMessage } from '@/lib/telegram'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    applianceType: '',
    message: ''
  })

  const applianceOptions = [
    { value: 'fridge', label: t.contact.appliance.fridge },
    { value: 'washing-machine', label: t.contact.appliance.washingMachine },
    { value: 'dishwasher', label: t.contact.appliance.dishwasher },
    { value: 'air-conditioner', label: t.contact.appliance.airConditioner },
    { value: 'cooktop', label: t.contact.appliance.cooktop },
    { value: 'electric-stove', label: t.contact.appliance.electricStove },
    { value: 'oven', label: t.contact.appliance.oven },
    { value: 'freezer', label: t.contact.appliance.freezer },
    { value: 'dryer', label: t.contact.appliance.dryer }
  ]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const selectedAppliance = applianceOptions.find(opt => opt.value === formData.applianceType)
    const applianceLabel = selectedAppliance?.label || 'Unknown'

    const message = `
✨ <b>Сообщение от FixiService</b> ✨

🛠 <b>Заявка на ремонт</b>

👤 <b>Имя:</b> ${formData.name}
📞 <b>Телефон:</b> ${formData.phone}
🏠 <b>Адрес:</b> ${formData.address || 'Не указано'}
🔧 <b>Тип техники:</b> ${applianceLabel}
📝 <b>Сообщение:</b> ${formData.message}

🔜 <i>Наш специалист свяжется с вами в ближайшее время! Спасибо, что выбрали FixiService!</i>
    `

    const success = await sendTelegramMessage(message)
    setIsLoading(false)

    if (success) {
      setIsModalOpen(true)
      setFormData({ name: '', phone: '', address: '', applianceType: '', message: '' })
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2>{t.contact.header}</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder={t.contact.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder={t.contact.addressPlaceholder}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
              <select
                value={formData.applianceType}
                onChange={(e) => setFormData({ ...formData, applianceType: e.target.value })}
                required
              >
                <option value="" disabled>{t.contact.appliancePlaceholder}</option>
                {applianceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <textarea
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? t.contact.sending : t.contact.submit}
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={() => setIsModalOpen(false)}>&times;</span>
            <div className={styles.checkmarkCircle}>
              <div className={styles.checkmark}></div>
            </div>
            <p className={styles.success}>{t.contact.messageSent}</p>
          </div>
        </div>
      )}
    </section>
  )
}
