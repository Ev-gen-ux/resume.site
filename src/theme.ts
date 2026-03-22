const STORAGE_KEY = 'resume-theme'

export type Theme = 'dark' | 'light'

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const v = localStorage.getItem(STORAGE_KEY)
  if (v === 'light' || v === 'dark') return v
  return 'dark'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(STORAGE_KEY, theme)
}

/** Sync <html data-theme> from storage; call before React mount. */
export function initTheme(): void {
  document.documentElement.dataset.theme = getStoredTheme()
}
