import React from 'react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/TextInput/TextInput';

export default {
  component: TextInput,
  title: 'inputs/TextInput',
};

export const Default = (args: any) => <TextInput {...args} />;

Default.args = {
  value: '',
  onChange: action('onChange'),
};
