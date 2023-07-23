import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    '@red': '#2eb7fe',
                },
            },
        },
    },
    resolve: {
        alias: { find: /^~@vant/, replacement: resolve('node_modules/@vant') },
    },
});
