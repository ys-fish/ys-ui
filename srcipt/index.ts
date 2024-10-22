import { App } from "vue";
import Button from "../components/Button/button";

export const install = (app: App) => {
  app.component(Button.name as string, Button);
};

export default install;
