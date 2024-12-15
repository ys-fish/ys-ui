import { ThemeDefinition } from "../dto/ys";
import { nextTick } from "vue";
const createTheme = (theme: ThemeDefinition) => {
  let defautlTheme = theme?.defaultTheme || "vueYs";

  let defaultThemeName = defautlTheme;

  nextTick(() => {
    const vueYs = document.getElementById("vueYs");
    vueYs.className = defaultThemeName;
    console.log(vueYs);
  });
};

export { createTheme };
