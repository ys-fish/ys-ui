import { defineComponent, provide, toRefs } from "vue";
import "./radio-group.scss";
const RadioGroup = defineComponent({
  name: "YRadioGroup",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit }) {
    const { modelValue } = toRefs(props);

    const radioGroup = "radioGroup" + Math.random();

    const GroupChange = (val: string) => {
      emit("update:modelValue", val);
      emit("change", val);
    };
    provide("value", {
      name: radioGroup,
      value: modelValue,
      GroupChange,
    });

    return () => (
      <div class="radioGroup">{slots.default && slots.default()}</div>
    );
  },
});

export default RadioGroup;
