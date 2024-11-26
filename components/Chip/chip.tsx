import { defineComponent } from "vue";
import "./chip.scss";
const Chip = defineComponent({
  name: "YChip",
  setup(props, { slots }) {
    return () => <div class="chip">{slots.default && slots.default()}</div>;
  },
});

export default Chip;
