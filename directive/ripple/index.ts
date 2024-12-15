/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2023-01-12 15:14:42
 * @LastEditors: Andy
 * @LastEditTime: 2023-01-30 15:13:01
 * @FilePath: \cain-ui\directive\ripple\index.ts
 */

import { createVNode, reactive, ref, render } from "vue";
import Ripple from "./ripple";
export const getRippleSize = (arg: { width: string; height: string }) => {};
import "./ripple.scss";

interface RippleOption {
  left: string;
  top: string;
  width: number;
  height: number;
  opacity: number;
  scale: number;
  color: any;
}

const opt = reactive<RippleOption>({
  left: "",
  top: "",
  width: 64,
  height: 64,
  opacity: 1,
  scale: 0.8,
  color: [0, 0, 0, 0.3],
});

export const RippleFuc = (el: HTMLElement | any,type:string) => {
  const elWidth = el.offsetWidth / 2;
  el.onmousedown = (e: any) => {
    opt.left = e!.layerX;
    opt.top = e.layerY;
    if (elWidth >= e.layerX) {
      opt.width = (el.offsetWidth - e.layerX) * 2.3;
      opt.height = (el.offsetWidth - e.layerX) * 2.3;
    } else {
      opt.width = e.layerX * 2.3;
      opt.height = e.layerX * 2.3;
    }
    if (opt.scale != 0) {
      opt.scale -= 0.1;
    }


    opt.color = el.getAttribute("accesskey").split(",");
    const container = document.createElement("span");
    const vm = createVNode(Ripple, opt);
    (vm as any).props.onDestroy = () => {
      if (opt.scale != 0.6) {
        opt.scale += 0.1;
      }
      render(null, container);
    };
    render(vm, container);
    el.appendChild(container.firstElementChild);
  };
  el.onmouseup = (el: any) => {};
};
