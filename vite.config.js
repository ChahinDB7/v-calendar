import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/plugin.ts', import.meta.url)), // Entry point of your plugin
      name: 'VCalendar', // Library name for UMD builds
      fileName: format => `v-calendar.${format}.js`, // Output file naming
      formats: ['es', 'umd'], // Specify both ES module and UMD formats
    },
    rollupOptions: {
      external: ['vue'], // Vue is marked as an external dependency (not bundled)
      output: {
        globals: {
          vue: 'Vue', // Vue global variable for UMD build
        },
        exports: 'named', // Ensure Rollup uses named exports
      },
    },
    sourcemap: true, // Enable sourcemaps for debugging (optional)
  },
});
