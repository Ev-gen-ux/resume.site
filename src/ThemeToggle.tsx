import type { Theme } from './theme'
import { applyTheme } from './theme'

type Props = {
  theme: Theme
  onThemeChange: (t: Theme) => void
}

export function ThemeToggle({ theme, onThemeChange }: Props) {
  const set = (next: Theme) => {
    onThemeChange(next)
    applyTheme(next)
  }

  return (
    <div
      className="resume__theme-toggle"
      role="group"
      aria-label="Тема оформления"
      data-node-id="136:182"
    >
      <button
        type="button"
        className={
          theme === 'dark'
            ? 'resume__theme-segment resume__theme-segment--active'
            : 'resume__theme-segment'
        }
        aria-pressed={theme === 'dark'}
        aria-label="Тёмная тема"
        onClick={() => set('dark')}
      >
        <span className="material-symbols-outlined resume__theme-icon" aria-hidden>
          brightness_2
        </span>
      </button>
      <button
        type="button"
        className={
          theme === 'light'
            ? 'resume__theme-segment resume__theme-segment--active'
            : 'resume__theme-segment'
        }
        aria-pressed={theme === 'light'}
        aria-label="Светлая тема"
        onClick={() => set('light')}
      >
        <span className="material-symbols-outlined resume__theme-icon" aria-hidden>
          wb_sunny
        </span>
      </button>
    </div>
  )
}
