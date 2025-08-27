// tailwind.config.ts
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'   // ⬅️ nuevo

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './messages/**/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        // todo lo que use `font-sans` ahora tomará Roboto Flex (var(--font-sans))
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        // opcional: para títulos si definís --font-heading
        // heading: ['var(--font-heading)', 'var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        corporativo: '#1F3B49',
      },
    },
  },
  plugins: [],
}

export default config
