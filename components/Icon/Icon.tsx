import { defineComponent, toRefs } from "vue";
import "./icon.scss";
const Icon = defineComponent({
  name: "YIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "14",
    },
    color: {
      type: String,
      default: "black",
    },
  },
  setup(props) {
    const { icon, size, color } = toRefs(props);
    return () => (
      <div
        class="y_icon"
        style={{ width: size.value + "px", height: size.value + "px" }}
      >
        <span
          class={["mdi", "mdi-" + icon.value, "y_mdi_icon"]}
          style={{ fontSize: size.value + "px", color: color.value }}
        ></span>
      </div>
    );
  },
});

export default Icon;
