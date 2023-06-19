import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros/vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

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
  css: {},
  server: {
    host: "0.0.0.0",
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
  build: {
    rollupOptions: {
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      },
    },
  },
});
