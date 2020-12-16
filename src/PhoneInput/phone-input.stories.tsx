import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { StyledPhoneInput as PhoneInput } from './phone-input';

export default {
  component: PhoneInput,
  title: 'inputs/PhoneInput',
};

export const Default = (args: any) => <PhoneInput {...args} />;

Default.args = {
  id: 0,
  value: '',
  label: 'Телефон',
  onBlur: action('onBlur'),
  disabled: false,
};
