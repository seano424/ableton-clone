import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        'theme-yellow': '#fbffa7',
        'theme-orange': '#ff764d',
        'theme-blue-light': '#b1c5ff',
        'theme-purple': '#d5b3ff',
        'theme-green': '#b6ffc0',
        'theme-blue': '#0000ff',
      }
    }
  },
  plugins: [],
}
export default config
