import { defineComponent, toRefs } from "vue";
import "./home.scss";
import { useTheme } from "../../composables/theme";
const Home = defineComponent({
  name: "YHome",
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },

  setup(props, { slots }) {
    const themeObj = useTheme();

    const { theme } = toRefs(props);

    if (theme.value != "") themeObj.switch(theme.value);

    return () => (
      <div id="vueYs" class="vueysTheme">
        {slots.default && slots.default()}
      </div>
    );
  },
});

export default Home;
