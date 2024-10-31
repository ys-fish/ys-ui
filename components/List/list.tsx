import { defineComponent, toRefs } from "vue";
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
  },
  setup(props, { slots }) {
    const { nav, size } = toRefs(props);
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
