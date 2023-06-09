import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";
import plugin from "./utils/plugin";
import "./style/ClearDefault.css";
import "amfe-flexible/index.js";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(plugin).mount("#app");
