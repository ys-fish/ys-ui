import { defineComponent } from "vue";
const Button = defineComponent({
  name: "YButton",
  setup() {
    return () => (
      <div class="y_button">
        <div></div>
      </div>
    );
  },
});

export default Button;
