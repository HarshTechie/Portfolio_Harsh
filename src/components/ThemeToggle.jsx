import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from './ThemeProvider.jsx';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg border border-border/10 bg-surface text-muted transition-all duration-200 hover:border-border/20 hover:text-text active:scale-95 ${className}`}
    >
      <span className="relative h-4 w-4">
        <FiSun
          className={`absolute inset-0 h-4 w-4 transition duration-300 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <FiMoon
          className={`absolute inset-0 h-4 w-4 transition duration-300 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </span>
    </button>
  );
}
