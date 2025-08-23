import { defineConfig } from 'astro/config';

// Importa las integraciones que estás utilizando
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Configuración específica para el despliegue en GitHub Pages
  site: 'https://edwinflores19.github.io',
  base: '/Portafolio-Edwin-Flores-2025/',

  // Lista de todas las integraciones que tu proyecto necesita
  integrations: [
    tailwind(), 
    react()
  ]
});