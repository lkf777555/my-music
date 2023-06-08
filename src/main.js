import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./style/ClearDefault.css";
import "amfe-flexible/index.js";

createApp(App).use(router).mount("#app");
