import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#007ACC', // SAP Blue
        'background': '#0b1120', // Un azul noche más oscuro y profundo
        'card': '#171f2f', // Un fondo de tarjeta sutilmente más claro
        'text-primary': '#f0f4f8', // Un blanco más suave para el texto
        'text-secondary': '#a0aec0', // Un gris azulado para subtítulos
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [
    // Plugin personalizado para añadir la utilidad `text-gradient`
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #007ACC, #38bdf8)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      });
    }),
  ],
};