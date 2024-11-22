import { defineComponent } from "vue";

const Main = defineComponent({
  name: "YMain",
  setup(props, { slots }) {
    return () => (
      <main class={["y_main"]}>{slots.default && slots.default()}</main>
    );
  },
});

export default Main;
