import { defineComponent, toRefs } from "vue";
import "./Input.scss";
const buttonType = ["default", "text", "line"] as const;
const Input = defineComponent({
  name: "YInput",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value: any) => {
        return buttonType.includes(value);
      },
    },
    placeholder: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#b0bec5",
    },
  },
  setup(props) {
    const { type, placeholder, color } = toRefs(props);
    console.log(color.value);
    return () => (
      <div class="input">
        <div class={["input_box", "input_box_" + type.value]} tabindex="0">
          <input
            class="input_text"
            id="input"
            required
            placeholder={placeholder.value}
            style={{ borderColor: color.value }}
          ></input>
          {type.value != "solo" ? (
            <label for="input" class="input_label">
              默认占位
            </label>
          ) : (
            ""
          )}
          <div class="input_line"></div>
          <div class="input_hint">1231123</div>
        </div>
      </div>
    );
  },
});

export default Input;
