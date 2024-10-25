import { App } from "vue";
import Button from "../components/Button/index";
import ProgressCircular from "../components/ProgressCircular/index";
import { RippleFuc } from "../directive/ripple";

const ys = [Button, ProgressCircular];

export const install = (app: App) => {
  ys.forEach((v) => {
    app.component(v.name, v);
  });
  app.directive("ripple", {
    mounted(el: any, type: any) {
      RippleFuc(el, type);
    },
  });
};

export default install;
