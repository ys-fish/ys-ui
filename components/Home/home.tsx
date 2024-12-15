import { defineComponent } from "vue";
import "./home.scss";
const Home = defineComponent({
  name: "YHome",
  setup(props, { slots }) {
    return () => (
      <div id="vueYs" class="vueysTheme">
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default Home;
