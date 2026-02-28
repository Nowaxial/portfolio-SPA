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
        },
        build: {
            chunkSizeWarningLimit: 6000,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            if (id.includes('@mantine')) return 'mantine';
                            if (id.includes('@tabler/icons') || id.includes('react-icons')) return 'icons';
                            if (id.includes('framer-motion')) return 'animation';
                            if (id.includes('react') || id.includes('react-dom')) return 'vendor';
                            return 'vendor';
                        }
                    }
                }
            }
        }
    }
});
