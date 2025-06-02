import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-project/',
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    federation({
      name: 'vue-project',
      filename: 'remoteEntry.js',
      // 暴露的模块
      exposes: {
        // 暴露一个组件
        './Button': './src/components/Button.vue',
        // 暴露一个工具函数
        './utils': './src/utils/index.ts',
      },
      // 远程模块
      remotes: {
        // 这里可以配置其他应用的远程模块
        // 'remote-app': 'http://localhost:5001/assets/remoteEntry.js',
      },
      // 共享依赖
      shared: ['vue', 'vue-router', 'pinia'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 构建配置
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
})
