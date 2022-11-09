import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {fileURLToPath, URL} from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                // this is required for the SCSS modules
                find: /^~(.*)$/,
                replacement: '$1',
            },
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url))
            },
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
});
