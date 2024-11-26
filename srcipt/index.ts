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
import Drawer from "../components/Drawer";
import Home from "../components/Home";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Chip from "../components/Chip";
import Checkbox from "../components/Checkout";
import Table from "../components/Table";
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
  Drawer,
  Home,
  Header,
  Main,
  Menu,
  Chip,
  Checkbox,
  Table,
];

// 注册入口
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
