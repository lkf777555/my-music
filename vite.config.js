import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import postCssPxToRem from "postcss-pxtorem";
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
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
    port: 3001,
  },
  resolve: {
    extensions: [".vue", ".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": resolve(__dirname, "src"),
      "@u": resolve(__dirname, "src/utils"),
      "@a": resolve(__dirname, "src/api"),
      "@c": resolve(__dirname, "src/components"),
      "@s": resolve(__dirname, "src/store"),
    },
  },
});
