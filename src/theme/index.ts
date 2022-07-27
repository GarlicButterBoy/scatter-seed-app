import { DefaultTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";

// Default Theme, can use different theme for dark vs light mode
const scatterSeedTheme: Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#e2f2fb",
  },
};

export default scatterSeedTheme;
