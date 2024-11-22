import { defineComponent } from "vue";
import "./home.scss";
const Home = defineComponent({
  name: "YHome",
  setup(props, { slots }) {
    return () => <div>{slots.default && slots.default()}</div>;
  },
});

export default Home;
