import { defineComponent } from "vue";
import "./header.scss";
const Header = defineComponent({
  name: "YHeader",
  props: {},
  setup(props, { slots }) {
    return () => (
      <div>
        <header class={["y_header"]}>
          <div class="y_header_left" v-show={slots.prepend}>
            <div class="y_header_icon" v-show={slots.icon}>
              {slots.icon && slots.icon()}
            </div>
            <div class="y_header_title" v-show={slots.title}>
              {slots.title && slots.title()}
            </div>
            {slots.prepend && slots.prepend()}
          </div>
          <div class="y_header_right" v-show={slots.append}>
            {slots.append && slots.append()}
          </div>
        </header>
        <div style="height:64px"></div>
      </div>
    );
  },
});

export default Header;
