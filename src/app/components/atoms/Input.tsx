import React from 'react';

import { InputTextProps, InputText } from 'primereact/inputtext';

export interface InputProps extends InputTextProps {}

const Input: React.FC<InputProps> = ({ ...props }) => <InputText {...props} />;

export default Input;
