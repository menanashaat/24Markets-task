export interface LanguageOption {
  code: string
  label: string
  flag: string
}

export const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '/flags/en.svg' },
  { code: 'ar', label: 'العربية', flag: '/flags/ar.svg' },
  { code: 'it', label: 'Italiano', flag: '/flags/it.svg' },
  { code: 'es', label: 'Español', flag: '/flags/es.svg' }
]
