import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    output: 'static',
    // MonsterASP.NET domain
    site: 'http://mts.tryasp.net/',
    // Build output directory (default is 'dist')
    outDir: './dist',
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:5073',
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    }
});
