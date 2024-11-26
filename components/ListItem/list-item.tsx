import { defineComponent, inject, onMounted, ref, toRefs, watch } from "vue";
import "./list-item.scss";
const ListItem = defineComponent({
  name: "YListItem",
  props: {
    rippleColor: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "black",
    },
    startIcon: {
      type: String,
      default: "",
    },
    endIcon: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    const { color, endIcon, rippleColor, startIcon, value } = toRefs(props);
    const activieColor = ref(color.value);
    let colorT = rippleColor.value ? `rgba(255,255,255,.6)` : "#78909C";
    const injectedData: any = inject("data");
    const injectedListChange: any = inject("dataList");
    watch(
      () => [color.value, injectedData.active],
      () => {
        activieColor.value = color.value;
        if (value.value != injectedData.active) {
          activieColor.value = color.value;
        }
        if (value.value == injectedData.active) {
          activieColor.value = "#1565C0";
        }
      }
    );

    onMounted(() => {
      if (value.value == injectedData.active) {
        activieColor.value = "#1565C0";
      }
      injectedListChange && injectedListChange(value.value);
    });
    return () => (
      <div
        class={[
          "y_list_item",
          { y_list_item_active: value.value == injectedData.active },
        ]}
        v-ripple={colorT}
        accesskey={colorT}
      >
        <div class="y_list_item_left" style={{ color: activieColor.value }}>
          <div v-show={startIcon.value}>
            {startIcon.value ? (
              <y-icon
                size="20"
                color={activieColor.value}
                icon={startIcon.value}
              ></y-icon>
            ) : (
              <span>{slots.startIcon && slots.startIcon()}</span>
            )}
          </div>

          {slots.default && slots.default()}
        </div>

        <div>
          {endIcon.value ? (
            <y-icon
              size="20"
              color={activieColor.value}
              icon={endIcon.value}
            ></y-icon>
          ) : (
            <span>{slots.append && slots.append()}</span>
          )}
        </div>
      </div>
    );
  },
});

export default ListItem;
