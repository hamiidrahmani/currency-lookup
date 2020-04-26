// Get default language locale
export function getDefaultLanguage(localeObject) {
  return getAllLanguages(localeObject)[0];
}

// Get all language lists from locale. returns object
export function getAllLanguages(localeObject) {
  return Object.keys(localeObject);
}

// Format language name se-SE => SE
export function formatLanguageName(language) {
  return language.split('-')[0].toUpperCase();
}
