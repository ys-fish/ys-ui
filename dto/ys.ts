export interface vueYs {
  theme?: ThemeDefinition;
  global?: {};
}

export interface ThemeDefinition {
  defaultTheme?: string;
  themes?: {
    [key: string]: {
      color: {
        surface: string;
      };
    };
    dark?: {
      color: {
        surface: string;
      };
    };
  };
}
