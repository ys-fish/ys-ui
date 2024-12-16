export interface vueYs {
  theme?: ThemeDefinition;
  global?: {};
}

export interface ThemeDefinition {
  defaultTheme?: string;
  themes?: {
    [key: string]: {
      color?: {
        surface?: string;
        asd?: string;
      };
    };
    dark?: {
      color?: {
        surface?: string;
        asd?: string;
      };
    };
  };
}
