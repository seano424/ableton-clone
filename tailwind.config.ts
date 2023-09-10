import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2.25rem',
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1600px',
      },
    },
    extend: {
      colors: {
        'theme-yellow': '#fbffa7',
        'theme-orange': '#ff764d',
        'theme-red': '#FD5948',
        'theme-blue-light': '#b1c5ff',
        'theme-purple': '#d5b3ff',
        'theme-green': '#b6ffc0',
        'theme-blue': '#0000ff',
      },
    },
  },
  plugins: [],
}
export default config
