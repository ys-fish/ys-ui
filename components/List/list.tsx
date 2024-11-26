import { defineComponent, provide, reactive, toRefs } from "vue";
import "./list.scss";
const sizeType = ["small", "default", "large"] as const;
const List = defineComponent({
  name: "YList",
  props: {
    nav: {
      type: Boolean,
      default: false,
      validator: (value: boolean) => {
        if (typeof value == "boolean") {
          return true;
        } else {
          return false;
        }
      },
    },
    size: {
      type: String,
      default: "default",
      validator: (value: any) => {
        return sizeType.includes(value);
      },
    },
    active: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    const { nav, size, active } = toRefs(props);

    let data = reactive({
      active: active,
    });

    provide("data", data);
    return () => (
      <div
        class={["y_list", "y_list_" + size.value, { y_list_nav: nav.value }]}
      >
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default List;
