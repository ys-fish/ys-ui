import { ThemeDefinition, Themes } from "../dto/theme";
import { nextTick } from "vue";

let defaultThemeColor: Themes = {
  dark: {
    color: {
      surface: "#000000",
    },
  },
  light: {
    color: {
      surface: "#ffffff",
    },
  },
};

const createTheme = (theme: ThemeDefinition) => {
  let defautlTheme = theme?.defaultTheme || "light";

  let defaultThemeName = defautlTheme;

  for (const key in theme.themes) {
    if (!defaultThemeColor[key]) {
      defaultThemeColor[key] = {};
    }

    if (theme.themes[key].color) {
      defaultThemeColor[key].color = {
        ...defaultThemeColor[key].color,
        ...theme.themes[key].color,
      };
    } else {
      defaultThemeColor[key] = {
        ...defaultThemeColor[key],
        ...theme.themes[key],
      };
    }
  }

  let newDefaultTheme =
    defaultThemeColor[defaultThemeName] || defaultThemeColor.light;

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

const useTheme = () => {
  let themeObj = {
    switch(theme: string) {
      let newDefaultTheme = defaultThemeColor[theme] || defaultThemeColor.light;

      Object.keys(newDefaultTheme.color).forEach((v: string) => {
        setProperty("#vueYs", v, newDefaultTheme.color[v]);
      });
    },
  };
  return themeObj;
};

export { createTheme, useTheme };
