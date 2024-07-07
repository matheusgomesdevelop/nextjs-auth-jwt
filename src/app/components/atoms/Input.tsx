import React from 'react';

import { InputTextProps, InputText } from 'primereact/inputtext';

const Input: React.FC<InputTextProps> = ({ ...props }) => <InputText {...props} />;

export default Input;
