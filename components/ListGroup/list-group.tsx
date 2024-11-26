import {
  defineComponent,
  inject,
  onMounted,
  provide,
  ref,
  Transition,
} from "vue";
import "./list-group.scss";
const ListGroup = defineComponent({
  name: "YListGroup",
  setup(props, { slots }) {
    // 父组件传值
    const injectedData: any = inject("data");
    // 通讯代码
    const dataItemList = ref([]);

    const dataItemListChange = (v) => {
      dataItemList.value.push(v);
    };

    provide("dataList", dataItemListChange);

    const listRef = ref<HTMLInputElement>(null);

    const listHeight = ref<number>(30);

    const isOpen = ref<boolean>(false);

    const listTeanstion = ref<number>(0.6);

    const activatorProps = ref({
      props: {
        endIcon: "chevron-down",
        color: "#37474F",
      },
    });

    const headerClick = () => {
      activatorProps.value.props.endIcon = "chevron-up";
      activatorProps.value.props.color = "#1565C0";
      if (isOpen.value) {
        isOpen.value = false;
        listTeanstion.value = 0.2;
        listHeight.value = 32;
        activatorProps.value.props.endIcon = "chevron-down";
        activatorProps.value.props.color = "#37474F";
      } else {
        listHeight.value = 300;
        listTeanstion.value = 0.4;
        activatorProps.value.props.endIcon = "chevron-up";
        activatorProps.value.props.color = "#1565C0";
        isOpen.value = true;
      }
    };

    onMounted(() => {
      if (dataItemList.value.includes(injectedData.active)) {
        listHeight.value = 300;
        listTeanstion.value = 0.4;
        activatorProps.value.props.endIcon = "chevron-up";
        activatorProps.value.props.color = "#1565C0";
        isOpen.value = true;
      }
    });

    return () => (
      <div class={["y_list_group"]}>
        <div
          class="y_list_group_box"
          style={{
            maxHeight: listHeight.value + "px",
            transition: `${listTeanstion.value}s`,
          }}
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
