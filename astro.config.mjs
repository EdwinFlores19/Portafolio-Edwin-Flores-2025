import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // URL completa donde tu sitio será desplegado.
  // Para GitHub Pages, esta es tu URL de usuario.
  site: 'https://edwinflores19.github.io',

  // El nombre de tu repositorio (el subdirectorio del sitio).
  // Es crucial para que Astro genere las rutas correctas a los assets.
  base: '/Portafolio-Edwin-Flores-2025/',

  integrations: [
    tailwind(),
    react()
  ]
});