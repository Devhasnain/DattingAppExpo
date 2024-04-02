import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <React.Fragment>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </React.Fragment>
  );
};

export default ThemeProvider;
