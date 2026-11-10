/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iris: {
          50: '#f7f5ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#8b7cf6',
          500: '#7a6df1',
          600: '#695de3',
          700: '#5846f6',
          800: '#4338ca',
          900: '#1e1b4b',
          950: '#18153b',
        },
        brand: {
          orange: '#fa6008',
          orangeHover: '#e05300',
          orangeLight: '#fff7ed',
          orangeBorder: '#fed7aa',
          dark: '#0f172a',
          slate: '#1e293b',
          muted: '#64748b',
          lightBg: '#f7f5ff',
          card: '#ffffff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Outfit"', '"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'iris': '0 20px 50px -10px rgba(105, 93, 227, 0.25)',
        'orange': '0 20px 40px -10px rgba(250, 96, 8, 0.3)',
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'card': '0 12px 35px -5px rgba(24, 21, 59, 0.06)',
      }
    },
  },
  plugins: [],
}
