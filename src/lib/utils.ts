import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAcceptLanguageHeader(locale?: string): string {
  // Default to 'az' if no locale is provided
  // Locale should be explicitly passed from components using useLocale()
  const currentLocale = locale || 'az'
  
  const localeMap: Record<string, string> = {
    'az': 'az-AZ,az;q=0.9,en;q=0.8',
    'en': 'en-US,en;q=0.9,az;q=0.8',
    'ru': 'ru-RU,ru;q=0.9,en;q=0.8'
  }
  
  return localeMap[currentLocale] || localeMap['az']
}