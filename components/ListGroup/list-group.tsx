import { defineComponent, ref } from "vue";
import "./list-group.scss";
const ListGroup = defineComponent({
  name: "YListGroup",
  setup(props, { slots }) {
    const listRef = ref<HTMLInputElement>(null);

    const listHeight = ref<number>(30);

    const isOpen = ref<boolean>(false);

    const activatorProps = ref({
      props: {
        endIcon: "chevron-down",
      },
    });

    const headerClick = () => {
      activatorProps.value.props.endIcon = "chevron-up";
      if (isOpen.value) {
        isOpen.value = false;
        listHeight.value = 30;
      } else {
        listHeight.value = 300;
        // listHeight.value = 32 * (listRef.value.children.length + 1);
        isOpen.value = true;
      }
    };

    return () => (
      <div class={["y_list_group"]}>
        <div
          class="y_list_group_box"
          style={{ maxHeight: listHeight.value + "px" }}
        >
          <div class="y_list_group_header" onClick={headerClick}>
            {slots.activator && slots.activator(activatorProps.value)}
          </div>
          <div ref={listRef} class="y_list_group_list">
            {slots.default && slots.default()}
          </div>
        </div>
      </div>
    );
  },
});

export default ListGroup;
