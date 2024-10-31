import { defineComponent, toRefs } from "vue";
import "./list-item.scss";
const ListItem = defineComponent({
  name: "YListItem",
  props: {
    color: {
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
  },
  setup(props, { slots }) {
    const { color, endIcon } = toRefs(props);
    let colorT = color.value ? `rgba(255,255,255,.6)` : "#78909C";
    return () => (
      <div class="y_list_item" v-ripple={colorT} accesskey={colorT}>
        <div class="y_list_item_left">
          <div v-show={slots.prepend}>{slots.prepend && slots.prepend()}</div>
          {slots.default && slots.default()}
        </div>

        <div>
          {endIcon.value ? (
            <y-icon icon={endIcon.value}></y-icon>
          ) : (
            <span>{slots.append && slots.append()}</span>
          )}
        </div>
      </div>
    );
  },
});

export default ListItem;
