import React from 'react';

import { InputTextProps } from 'primereact/inputtext';

import BaseField from '@/core/components/Field/Field';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface InputWithLabelProps extends InputTextProps {
    labelText: string;
    type: React.HTMLInputTypeAttribute;
    name: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ labelText, type, name, placeholder, ...props }) => (
    <div className="flex-col flex gap-6">
        <Label className="font-medium text-sm" htmlFor={name}>
            {labelText}
        </Label>

        <BaseField
            render={<Input placeholder={placeholder} type={type} name={name} {...props} />}
            name={name}
            type={type}
        />
    </div>
);

export default InputWithLabel;
