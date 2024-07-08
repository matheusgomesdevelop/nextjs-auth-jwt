import React from 'react';

import { InputTextProps, InputText } from 'primereact/inputtext';

export interface InputProps extends InputTextProps {}

const Input: React.FC<InputProps> = ({ ...props }) => (
    <InputText
        pt={{
            root: {
                className:
                    'w-full h-48 text-md text-text bg-white border-1 border-solid border-gray-300 rounded-8 placeholder-gray-500 placeholder-text-text',
                style: {
                    padding: '0 12px',
                },
            },
        }}
        {...props}
    />
);

export default Input;
