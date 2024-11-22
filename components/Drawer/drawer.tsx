import { defineComponent, onMounted, onUnmounted, ref, toRefs } from "vue";
import "./drawer.scss";
const Drawer = defineComponent({
  name: "YDrawer",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const boxRef = ref<HTMLElement | null>(null);
    let index = 0;
    const handleClick = (event: MouseEvent) => {
      if (modelValue.value) {
        if (index == 1)
          if (boxRef.value && boxRef.value.contains(event.target as Node)) {
            index = 0;
          } else {
            index = 0;
            emit("update:modelValue", false);
            return false;
          }
        index++;
      }
    };

    onMounted(() => {
      // 组件挂载时绑定全局点击事件
      document.addEventListener("click", handleClick);
    });

    onUnmounted(() => {
      // 组件卸载时移除全局点击事件
      document.removeEventListener("click", handleClick);
    });

    return () => (
      <div class={["y_drawer_box"]}>
        <div
          ref={boxRef}
          class={["y_drawer", { y_drawer_tran: modelValue.value }]}
        ></div>
        <div
          class={["y_drawer_mask", { y_drawer_mask_tran: modelValue.value }]}
        ></div>
      </div>
    );
  },
});

export default Drawer;
