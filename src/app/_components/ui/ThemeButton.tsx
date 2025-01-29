'use client';

/**
 * Button to toggle the theme between light and dark mode.
 *
 * @example
 * <ThemeButton />
 */

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa6';


function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <FaMoon
        name="light"
        size={20}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <FaSun
        name="dark"
        size={20}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}
export default ThemeButton;
