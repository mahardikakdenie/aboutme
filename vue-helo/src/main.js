import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

import "./assets/style/style.css";

createApp(App).use(router).mount("#app");
