import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 1200,
      lg: 1920,
      xl: 2400,
    },
  },
  overrides: {
    MuiTypography: {
      h5: {
        fontWeight: 600,
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: 300,
        letterSpacing: '0.04em',
        color: '#44464B',
      },
    },
    MuiLink: {
      root: {
        color: '#4E90CF',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: '1px solid #B9BBBD',
        },
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: '1px solid #92A7B6',
        },
        '&:after': {
          borderBottom: '1px solid #1061D8',
        },
      },
    },
  },
});
