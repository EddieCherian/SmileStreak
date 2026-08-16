/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        navy: {
          50: '#f6f8fb',
          100: '#eef3f7',
          200: '#dfe9f0',
          300: '#c3d6e6',
          400: '#9fb3c8',
          500: '#6f84a0',
          600: '#435668',
          700: '#2b3a49',
          800: '#18242e',
          900: '#0b1116'
        },
        slate: {
          50: '#fbfcfd',
          100: '#f6f7f8',
          200: '#eef0f2',
          300: '#e1e5e8',
          400: '#c9ced3',
          500: '#9aa3ad',
          600: '#6f7983',
          700: '#4c555d',
          800: '#2f373c',
          900: '#0f1417'
        },
        surface: {
          50: '#FFFFFF',
          100: '#F8FAFA',
          200: '#F5F7F7',
          300: '#DDE1E0',
          400: '#E8ECEC',
          500: '#F0F3F3'
        },

        accent: {
          50: '#F8FAFA',
          100: '#EAF6F6',
          200: '#DFF2F2',
          300: '#53C6C8',
          400: '#53C6C8',
          500: '#2BB8BD',
          600: '#28A9AB',
          700: '#1E7A7B',
          800: '#155657',
          900: '#0E3B3C'
        },

        indigo: {
          50: '#f5f7ff',
          100: '#eef2ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#a5b4fc',
          500: '#7c8af7',
          600: '#5861e0',
          700: '#3f3fb8',
          800: '#2a2a80',
          900: '#15143f'
        }
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'Lora', '"IBM Plex Sans"', 'system-ui', '-apple-system'],
        heading: ['"Playfair Display"', 'Space Grotesk', 'Syne', 'serif']
      },
      borderRadius: {
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2rem'
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem'
      },
      boxShadow: {
        soft: '0 1px 0 rgba(15, 23, 42, 0.03)',
        elevated: '0 2px 6px rgba(15, 23, 42, 0.04)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.5)'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(.2,.9,.3,1)'
      },
      animation: {
        pop: "pop 0.28s var(--tw-transition-timing-function)",
        fade: "fade 0.32s ease-out"
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '60%': { transform: 'scale(1.03)', opacity: '1' },
          '100%': { transform: 'scale(1)' }
        },
        fade: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
};
