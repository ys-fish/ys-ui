import { defineComponent, toRefs } from "vue";
import "./model.scss";
const Model = defineComponent({
  name: "YModel",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);

    const maskClick = () => {
      emit("update:modelValue", true);
      console.log(modelValue.value)
    };

    return () => (
      <div class={["y_model"]}>
        <div class={["y_model_mask"]} onClick={maskClick}></div>
        <div
          class={["y_model_box", { y_model_box_tran: modelValue.value }]}
        ></div>
      </div>
    );
  },
});

export default Model;
