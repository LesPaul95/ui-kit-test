import React from 'react';
import { TextFieldProps } from '@material-ui/core';
declare type TStylesProps = {
    fontSize: number | string;
};
export declare type TextInputProps = TextFieldProps & {
    styles?: TStylesProps;
};
export declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
