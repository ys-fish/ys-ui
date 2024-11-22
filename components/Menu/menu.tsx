import {
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
} from "vue";
import "./menu.scss";
const Menu = defineComponent({
  name: "YMenu",
  setup(props, { slots }) {
    const btnRef = ref(null);
    const menuTop = ref<number>(0);
    const meunTran = ref<boolean>(false);
    const menuMove = ref<boolean>(false);
    const menuRight = ref<number>(0);
    const boxRef = ref<HTMLElement | null>(null);

    const menuBox = reactive<{
      height: number;
      width: number;
      opacity: number;
    }>({
      width: 0,
      height: 0,
      opacity: 0,
    });
    let index = 0;
    const menuClick = ref<boolean>(false);
    onMounted(() => {
      nextTick(() => {
        menuTop.value = btnRef.value.offsetTop + btnRef.value.offsetHeight;
        menuRight.value = btnRef.value.offsetLeft + btnRef.value.offsetWidth;
      });
      document.addEventListener("click", handleClick);
    });

    const handleClick = (event: MouseEvent) => {
      if (menuClick.value) {
        if (index == 1)
          if (boxRef.value && boxRef.value.contains(event.target as Node)) {
            index = 0;
          } else {
            index = 0;
            menuClick.value = false;
            menuExit();
            // emit("update:modelValue", false);
            return false;
          }
        index++;
      }
    };

    const menuCalculation = () => {
      menuBox.width = 200;
      menuBox.height = (boxRef.value.children[0] as any).offsetHeight;
      menuBox.opacity = 1;
    };

    const menuExit = () => {
      menuBox.width = 0;
      menuBox.height = 0;
      menuBox.opacity = 0;
    };

    onUnmounted(() => {
      // 组件卸载时移除全局点击事件
      document.removeEventListener("click", handleClick);
    });

    // 点击事件
    const MenuClick = () => {
      menuCalculation();
      menuClick.value = true;
      meunTran.value = true;
    };

    // 触摸事件
    const Mousemove = () => {
      if (!menuClick.value) {
        menuCalculation();
        menuMove.value = false;
      }
    };

    // 离开触摸事件
    const onMouseout = () => {
      if (!menuClick.value) {
        menuMove.value = true;
        setTimeout(() => {
          if (menuMove.value) {
            menuExit();
          }
        }, 100);
      }
    };

    return () => (
      <div>
        <div
          ref={btnRef}
          onClick={MenuClick}
          onMousemove={Mousemove}
          onMouseout={onMouseout}
          class={[""]}
        >
          {slots.activator && slots.activator()}
        </div>
        <div
          ref={boxRef}
          onMousemove={Mousemove}
          onMouseout={onMouseout}
          class={["menu"]}
          style={{
            width: menuBox.width + "px",
            height: menuBox.height + "px",
            opacity: menuBox.opacity,
            top: menuTop.value + "px",
            left: menuRight.value + "px",
            transform: `translateX(-100%)`,
          }}
        >
          {slots.default && slots.default()}
        </div>
      </div>
    );
  },
});

export default Menu;
