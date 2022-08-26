import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
      ],
    }),
    Components({
      resolvers: [HeadlessUiResolver()],
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
