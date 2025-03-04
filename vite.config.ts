/* eslint import/no-default-export: 0 */
/* eslint import/no-cycle: 0 */
/**
 * Made with ❤️ and adobo by Kurocado Studio
 * Copyright (c) 2024. All Rights Reserved.
 *
 * Learn more about Kurocado Studio: {@link https://www.kurocado.studio}
 *
 * Explore our open-source projects: {@link https://github.com/kurocado-studio}
 */
import { viteWebConfig } from '@kurocado-studio/styleguide';
import { defineConfig } from 'vite';

export default defineConfig({
  ...viteWebConfig,
  server: {
    // mostly to allow CodeSandbox URLs
    allowedHosts: true,
    port: 3000,
  },
  define: {
    'process.env.VITE_AUTH_DOMAIN': 'import.meta.env.VITE_AUTH_DOMAIN',
    'process.env.VITE_AUTH_CLIENT_ID': 'import.meta.env.VITE_AUTH_CLIENT_ID',
    'process.env.VITE_AUTH_REDIRECT_URI':
      'import.meta.env.VITE_AUTH_REDIRECT_URI',
  },
  optimizeDeps: {
    exclude: ['remix:manifest'],
  },
});
