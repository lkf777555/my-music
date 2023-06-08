import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import postCssPxToRem from "postcss-pxtorem";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"], // 自动引入vue/vue-router/pinia相关函数
      dts: "src/auto-imports.d.ts", // 生成auto-imports.d.ts全局声明
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 192,
          propList: ["*"],
        }),
      ],
    },
  },
  server: {
    host: "localhost",
    open: true,
    port: 3000,
  },
});
