import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from "styled-components";
import { theme } from "../src";

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      {storyFn()}
    </ThemeProvider>
  </MuiThemeProvider>
);

export const decorators = [withGlobalStyle];
