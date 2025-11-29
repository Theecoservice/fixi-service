'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Language } from './translations'

type Translations = typeof translations['en']

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl')

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] as Translations
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
