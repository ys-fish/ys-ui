/*
 * @Descripttion: App组件主要收集主题，并且切换
 * @version: 在使用途中必须使用app组件包裹这样才有一个样式的效果
 * @Author: cain
 * @Date: 2023-01-11 09:26:17
 * @LastEditors: Andy
 * @LastEditTime: 2023-02-01 15:13:00
 * @FilePath: \cain-ui\package\checkbox\checkbox.tsx
 */
import { defineComponent, ref, toRefs } from "vue";
import "./checkbox.scss";

const Checkbox = defineComponent({
  name: "YCheckbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    ripple: {
      type: String,
      default: "0, 0, 0, 0.3",
    },
    modelValue: {},
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { label, ripple, modelValue } = toRefs(props);
    let colorT = `#78909C`;
    const ids = Math.random();
    const CheckboxChange = (val: Event) => {
      console.log(val);
      emit("update:modelValue", (val.target as any).checked);
      emit("change", (val.target as any).checked);
    };

    return () => (
      <div class="c-checkbox">
        <div class="c-checkbox-sele">
          <div class="c-checkbox-icon">
            <svg
              fill={modelValue.value ? "black" : "white"}
              class="CainCheckboxTie"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          </div>
          <input
            checkbox={modelValue.value}
            type="checkbox"
            id={"checkbox" + ids}
            onChange={CheckboxChange}
            class="checkboxInput"
          ></input>
          <label
            for={"checkbox" + ids}
            class="checkbox_sele_mock"
            v-ripple={colorT}
            accesskey={colorT}
          ></label>
        </div>

        <label for={"checkbox" + ids} class="c-radio-label">
          {label.value}
        </label>
      </div>
    );
  },
});

export default Checkbox;
