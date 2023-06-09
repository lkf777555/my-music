import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import postCssPxToRem from "postcss-pxtorem";
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
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
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@u": resolve(__dirname, "src/utils"),
      "@a": resolve(__dirname, "src/api"),
      "@c": resolve(__dirname, "src/components"),
      "@s": resolve(__dirname, "src/store"),
    },
  },
});
