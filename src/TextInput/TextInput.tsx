import React, { useCallback, useEffect, useState } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type TStylesProps = {
  fontSize: number | string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiInputBase-input': {
      height: 28,
      padding: 0,
      fontSize: 22,
      fontWeight: 300,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },
      [theme.breakpoints.down('xs')]: {
        height: 19,
        fontSize: 14,
      },
    },
    '& .MuiInput-input': {
      marginLeft: theme.spacing(1),
    },
    '& .MuiInputAdornment-root > svg': {
      [theme.breakpoints.down('xs')]: {
        width: 14,
      },
    },
    '& .Mui-focused': {
      '& svg': {
        display: 'none',
      },
    },
  },
  filledUnderline: {
    '&:before': {
      borderBottom: '1px solid #B9BBBD',
      transition: 'none',
    },
  },
  pencil: {
    marginBottom: '5px',
  },
  disabled: {
    '&.MuiInput-underline:before': {
      borderBottomStyle: 'solid',
    },
  },
}));

export type TextInputProps = TextFieldProps & { styles?: TStylesProps };

export const TextInput: React.FC<TextInputProps> = React.memo(({ styles, value, ...rest }) => {
  const classes = useStyles(styles);
  const [inputValue, setValue] = useState<any>(value ?? '');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    setValue(value ?? '');
  }, [value]);
  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      classes={{ root: classes.root }}
      InputProps={{
        classes: {
          underline: inputValue.toString().length > 0 ? classes.filledUnderline : undefined,
          disabled: classes.disabled,
        },
      }}
      value={inputValue}
      onChange={handleChange}
      autoComplete="off"
      {...rest}
    />
  );
});

export default TextInput;
