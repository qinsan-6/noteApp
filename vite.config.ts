import { defineConfig } from 'vite'
import { resolve } from 'path';
import *as path from 'path'
import vue from '@vitejs/plugin-vue'

// // 按需导入element
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // ElementPlus({
    //   // options
    // }),
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    },
  },
  server: {
    proxy: {
      '/api':{
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
