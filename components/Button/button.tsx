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
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "",
    },
    // 圆角
    rounded: {
      type: String,
      default: "",
    },
    startIcon: {
      type: String,
      default: "",
    },
    endIcon: {
      type: String,
      default: "",
    },
    icon: {
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
      icon,
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
          "y_rounded_" + rounded.value,
          color.value,
          {
            y_block: block.value,
            y_button_icon: icon.value,
          },
        ]}
        style={{ background: color.value, color: isColors ? "black" : "white" }}
        v-ripple={ripple.value ? colorT : ""}
        accesskey={ripple.value ? colorT : ""}
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
            <y-icon
              v-show={startIcon.value}
              color={isColors ? "black" : "white"}
              icon={startIcon.value}
            ></y-icon>
            <y-icon size="20" v-show={icon.value} icon={icon.value}></y-icon>
            <span v-show={!icon.value}>{slots.default && slots.default()}</span>
            <y-icon v-show={endIcon.value} icon={endIcon.value}></y-icon>
          </div>
        )}
      </button>
    );
  },
});

export default Button;
