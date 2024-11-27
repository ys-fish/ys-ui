import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        // 这里可以放置全局 SCSS 变量、混合等
      },
    },
  },
});
