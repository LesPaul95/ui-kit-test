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
      body1: {
        fontFamily: 'Museo Sans, sans-serif',
      },
      body2: {
        fontFamily: 'Museo Sans, sans-serif',
      },
      h5: {
        fontWeight: 600,
        fontFamily: 'Museo Sans, sans-serif',
      },
    },
    MuiButton: {
      root: {
        fontFamily: 'Museo Sans, sans-serif',
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: 'Museo Sans, sans-serif',
        fontWeight: 300,
        letterSpacing: '0.04em',
        color: '#44464B',
        '&::placeholder': {
          color: '#92A7B6',
          opacity: 1,
        },
      },
      root: {
        fontFamily: 'Museo Sans, sans-serif',
        color: '#92A7B6',
        opacity: 1,
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
    MuiFormLabel: {
      root: {
        width: '100%',
        color: '#44464B',
        fontFamily: 'Museo Sans, sans-serif',
        fontWeight: 400,
        fontSize: 18,
        letterSpacing: '0.12em',
        textAlign: 'left',
        lineHeight: '22px',
        disabled: {
          color: '#44464B',
        },
        focused: {
          color: '#44464B',
        },
        '@media (max-width: 1919px)': {
          fontSize: 16,
        },
        '@media (max-width: 1199px)': {
          fontSize: 16,
          fontWeight: 600,
        },
        '@media (max-width: 639px)': {
          fontSize: 12,
          marginRight: -30,
        },
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: 'none',
      }
    },
  },
});
