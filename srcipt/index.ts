import { App } from "vue";
import Button from "../components/Button/index";
import ProgressCircular from "../components/ProgressCircular/index";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";
import Input from "../components/Input";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListGroup from "../components/ListGroup";
import { RippleFuc } from "../directive/ripple";
import "@mdi/font/css/materialdesignicons.css";
import Icon from "../components/Icon";
import Model from "../components/Model";
const ys = [
  Button,
  ProgressCircular,
  RadioGroup,
  Radio,
  Input,
  Icon,
  List,
  ListItem,
  ListGroup,
  Model,
];

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
