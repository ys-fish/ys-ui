/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2023-01-12 15:14:33
 * @LastEditors: 黎明 3111345436@qq.com
 * @LastEditTime: 2023-01-12 22:07:57
 * @FilePath: \cain-ui\directive\ripple\ripple.tsx
 */
import { defineComponent, onMounted, ref, toRefs, VNodeRef, watch } from "vue";

export default defineComponent({
  name: "CRipple",
  props: ["top", "left", "width", "height", "opacity", "scale", "color"],
  setup(props, { emit }) {
    const { left, top, width, height, opacity, scale, color } = toRefs(props);
    const Cainscale = ref<number>(scale.value);
    const Cainopacity = ref<number>(opacity.value);
    const rippleref = ref<VNodeRef>();
    setTimeout(() => {
      Cainscale.value = 1;
      Cainopacity.value = 0.3;
    }, 10);

    setTimeout(() => {
      Cainopacity.value = 0;
    }, 300);
    setTimeout(() => {
      emit("destroy");
    }, 400);
    return () => (
      <span
        class="c-ripple"
        ref={rippleref.value}
        style={{
          left: left.value + "px",
          top: top.value + "px",
          width: width.value + "px",
          height: height.value + "px",
          opacity: Cainopacity.value,
          backgroundColor: `${color.value}`,
          transform: `translate(-50%, -50%) scale(${Cainscale.value})`,
        }}
      ></span>
    );
  },
});
