import { defineComponent, inject, ref, toRefs } from "vue";
import "./radio.scss";
const Radio = defineComponent({
  name: "YRadio",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    ripple: {
      type: String,
      default: "#455A64",
    },
  },
  setup(props) {
    const { label, value, ripple } = toRefs(props);
    const ids = Math.random();
    const GroupValue: any = inject("value");
    if (GroupValue == undefined) {
      console.warn("请与radio-group配合使用");
    }
    const c_ripple = ref<string>(ripple.value);
    const checked = ref<boolean>(value.value == GroupValue.value.value);

    const radioref = ref<HTMLElement>();

    const RadioChange = (val: Event) => {
      GroupValue.GroupChange((val.target as any).defaultValue);
    };
    return () => (
      <div
        class={{
          "c-radio": true,
          c_radio_checked: value.value == GroupValue.value.value,
        }}
      >
        <div class="c-radio-sele">
          <div class="c_radio_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#64B5F6"
              viewBox="0 0 24 24"
            >
              <path
                fill="#64B5F6"
                d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
              <circle class="iconcircle" cx="12" cy="12" r="5" fill="#64B5F6" />
            </svg>
          </div>
          <input
            type="radio"
            ref={radioref}
            name={GroupValue.name}
            class="radiobtn"
            value={value.value}
            id={"cradio" + ids}
            onChange={RadioChange}
            checked={checked.value}
          />
          <label
            accesskey={c_ripple.value}
            for={"cradio" + ids}
            class="radio_sele_mock"
            v-ripple="radio"
          ></label>
        </div>
        <label class="c-radio-label" for={"cradio" + ids}>
          {label.value}{" "}
        </label>
      </div>
    );
  },
});

export default Radio;
