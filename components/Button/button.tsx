import { defineComponent, toRefs } from "vue";
import "./button.scss";
import { isContrastSufficient } from "../../utils/color/color";

const buttonType = ["default", "outlined", "text"] as const;
const sizeType = ["x-small", "small", "default", "large", "x-large"] as const;

// type ButtonType = "default" | "outlined" | "disable";
const Button = defineComponent({
  name: "YButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value: any) => {
        return buttonType.includes(value);
      },
    },
    size: {
      type: String,
      default: "default",
      validator: (value: any) => {
        return sizeType.includes(value);
      },
    },
    disable: {
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
    block: {
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
    loading: {
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
    ripple: {
      type: String,
      default: "#78909C",
    },
    color: {
      type: String,
      default: "",
    },
    // 圆角
    rounded: {
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
    startIcon: {
      type: String,
      default: "",
    },
    endIcon: {
      type: String,
      default: "",
    },
  },

  setup(props, { slots }) {
    const {
      type,
      ripple,
      rounded,
      startIcon,
      endIcon,
      color,
      disable,
      size,
      block,
      loading,
    } = toRefs(props);
    let colorD = color.value ? color.value : "#78909C";
    let colorT = color.value ? `rgba(255,255,255,.6)` : "#78909C";
    const isColors = isContrastSufficient(colorD, "#000000");
    return () => (
      <button
        onClick=""
        class={[
          "y_button",
          "y_button_" + type.value,
          "y_button_size_" + size.value,
          { y_rounded: rounded.value, y_block: block.value },
        ]}
        style={{ background: color.value, color: isColors ? "black" : "white" }}
        v-ripple={colorT}
        accesskey={colorT}
        disable={disable.value}
      >
        {loading.value ? (
          <div class="loading">
            <div class="loading_box"></div>
            <span style={{ opacity: 0 }}>
              {slots.default && slots.default()}
            </span>
          </div>
        ) : (
          <div class="y_button_flex">
            <y-icon icon={startIcon.value}></y-icon>
            <span>{slots.default && slots.default()}</span>
            <y-icon icon={endIcon.value}></y-icon>
          </div>
        )}
      </button>
    );
  },
});

export default Button;
