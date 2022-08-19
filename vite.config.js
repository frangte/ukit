import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ],
    }),
  ],
  build: {
    lib: {
      name: 'ukit',
      entry: path.resolve(__dirname, 'lib/index.js'),
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        minifyInternalExports: true,
      },
    },
  },
})
