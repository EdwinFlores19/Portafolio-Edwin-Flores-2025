import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // URL base del sitio donde se desplegará
  site: 'https://edwinflores19.github.io',
  // Subdirectorio donde se encuentra el proyecto
  base: '/Portafolio-Edwin-Flores-2025/',
  
  // Integraciones de Astro
  integrations: [
    tailwind(), 
    react()
  ]
});
