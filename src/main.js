import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./style/ClearDefault.css";
import "amfe-flexible/index.js";

import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
