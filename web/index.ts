import { createApp } from "vue";
import ysui from "../srcipt/index";
import App from "./pages/index.vue";
import router from "./router";
import './style/index.scss'
createApp(App).use(ysui).use(router).mount("#app");
