import { defineComponent, ref, toRefs } from "vue";
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
    const mask = ref<boolean>(false);
    const maskClick = () => {
      emit("update:modelValue", false);
      setTimeout(() => {
        mask.value = false;
      }, 100);
    };

    return () => (
      <div class={["y_model"]}>
        <div
          class={[
            "y_model_mask",
            { y_model_tran: modelValue.value, y_model_tran_over: mask.value },
          ]}
          onClick={maskClick}
        ></div>
        <div
          class={["y_model_box", { y_model_box_tran: modelValue.value }]}
        ></div>
      </div>
    );
  },
});

export default Model;
