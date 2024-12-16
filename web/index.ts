import { createApp } from "vue";
import App from "./pages/index.vue";
import router from "./router";
import "../styles/main.scss";
import "../global/style/global.scss";
import "./style/index.scss";
// import { createYs } from "../srcipt/index";
import { createVueys } from "../srcipt/vueys";

const Ysui = createVueys({
  theme: {
    defaultTheme: "app",
    themes: {
      dark: {
        color: {
        },
      },
      ak: {
        color: {
          surface: "red",
        },
      },
    },
  },
});
createApp(App).use(Ysui).use(router).mount("#app");
