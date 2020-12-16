import React, { useState } from 'react';
import clsx from 'clsx';
import PhoneInput from 'react-phone-input-2';
import ru from 'react-phone-input-2/lang/ru.json';
import { InputLabel, FormControl } from '@material-ui/core';
import useStyles from './PhoneInputStyles';
import 'react-phone-input-2/lib/style.css';

const preferredCountries = ['ru', 'ua', 'kz', 'by'];
const buttonStyle = { backgroundColor: 'unset', border: 0, borderRadius: 0 };
const inputStyle = {
  color: '#44464B',
  fontFamily: 'Museo Sans',
  fontSize: '16px',
  height: '32px',
  fontWeight: 300,
};

export type PhoneInputProps = {
  id: any;
  value: any;
  label?: string;
  onBlur: any;
  disabled: any;
}

export function StyledPhoneInput({ id, value, label, onBlur, disabled }: PhoneInputProps) {
  const classes = useStyles();
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const handleBlur = (event: any) => {
    setFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <FormControl fullWidth className={classes.root}>
      <InputLabel shrink id={id}>
        {label}
      </InputLabel>
      <div id={id} className={classes.phoneWithIcon}>
        <PhoneInput
          inputProps={{ id: `${id}__input` }}
          localization={ru}
          value={value}
          preferredCountries={preferredCountries}
          containerClass={classes.container}
          buttonStyle={buttonStyle}
          inputStyle={inputStyle}
          placeholder=""
          onFocus={onFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </div>
      <span className={clsx(classes.underline, focus ? classes.underline_focused : '')} />
    </FormControl>
  );
}
