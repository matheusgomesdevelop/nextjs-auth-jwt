import React from 'react';

import { InputTextProps, InputText } from 'primereact/inputtext';

export interface InputProps extends InputTextProps {}

/*
.p-inputtext {
    width: 100%;
    height: 48px;
    padding: var(--spacing-12) var(--spacing-16);
    font-size: var(--fs-text-md);
    color: var(--text-color);
    background-color: var(--white);
    border: 1px solid var(--gray-300);
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

    &::placeholder {
        color: var(--gray-500);
        font-size: var(--fs-text-md);
        font-weight: var(--fw-regular);
    }
}

*/
const Input: React.FC<InputProps> = ({ ...props }) => (
    <InputText
        className="w-full h-48 px-12 py-16 text-md text-text bg-white border-1 border-solid border-gray-300 rounded-8 placeholder-gray-500 placeholder-text-text"
        {...props}
    />
);

export default Input;
