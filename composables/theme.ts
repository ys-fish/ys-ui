import { ThemeDefinition } from "../dto/ys";
import { nextTick } from "vue";

let defaultThemeColor = {
  dark: {
    color: {
      surface: "#ffffff",
    },
  },
};

const createTheme = (theme: ThemeDefinition) => {
  let defautlTheme = theme?.defaultTheme || "vueYs";

  let defaultThemeName = defautlTheme;

  for (const key in theme.themes) {
    // 如果 mainObj 中没有该键，则直接新增
    if (!defaultThemeColor[key]) {
      defaultThemeColor[key] = {};
    }

    // 如果 mainObj[key] 和 dynamicObj[key] 都有 color 属性，合并 color 属性
    if (theme.themes[key].color) {
      defaultThemeColor[key].color = {
        ...defaultThemeColor[key].color, // 保留 mainObj 中的 color 属性
        ...theme.themes[key].color, // 合并 dynamicObj 中的 color，覆盖同名属性
      };
    } else {
      // 如果没有 color 属性，直接添加 dynamicObj 的内容
      defaultThemeColor[key] = {
        ...defaultThemeColor[key],
        ...theme.themes[key],
      };
    }
  }

  let newDefaultTheme =
    defaultThemeColor[defaultThemeName] || defaultThemeColor.dark;

  console.log(newDefaultTheme);

  Object.keys(newDefaultTheme.color).forEach((v: string) => {
    setProperty("#vueYs", v, newDefaultTheme.color[v]);
  });
  //   Object.keys(defaultThemeColor[defaultThemeName]).forEach((v: string) => {});
};

const setProperty = (dom: string, color: string, value: string) => {
  nextTick(() => {
    const Ydom: any = document.querySelector(dom);
    Ydom.style.setProperty(`--y-theme-${color}`, value);
  });
};

export { createTheme };
