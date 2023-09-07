import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import plugin from "./utils/plugin.js";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./style/ClearDefault.css";
import "./style/flex.css";
import "./style/index.css";

createApp(App).use(router).use(store).use(plugin).mount("#app");
