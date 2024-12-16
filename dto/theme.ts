export interface vueYs {
  theme?: ThemeDefinition;
  global?: {};
}

export interface ThemeDefinition {
  defaultTheme?: string;
  themes?: Themes;
}

export interface Themes {
  [key: string]: {
    color?: {
      surface?: string;
      background?: string;
      error?: string;
      info?: string;
      success?: string;
      warning?: string;
    };
  };
  dark?: {
    color?: {
      surface?: string;
      background?: string;
      error?: string;
      info?: string;
      success?: string;
      warning?: string;
    };
  };
  light?: {
    color?: {
      surface?: string;
      background?: string;
      error?: string;
      info?: string;
      success?: string;
      warning?: string;
    };
  };
}
