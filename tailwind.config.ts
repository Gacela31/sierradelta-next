import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './messages/**/*.json'
  ],
  theme: {
    extend: {
      colors: {
        corporativo: "#1F3B49",
      },
    },
  },
  plugins: [],
}
export default config
