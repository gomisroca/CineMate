import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: ['class'],
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
