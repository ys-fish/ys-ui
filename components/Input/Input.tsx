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
  },
  setup(props) {
    const { type } = toRefs(props);
    return () => (
      <div class="input">
        <div class={["input_box", "input_box_" + type.value]} tabindex="0">
          <input class="input_text" id="input" required></input>
          <label for="input" class="input_label">
            默认占位
          </label>
          <div class="input_line"></div>
        </div>
      </div>
    );
  },
});

export default Input;
