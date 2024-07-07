import React from 'react';

import BaseField from '../templates/BaseField';
import Label from '../atoms/Label';
import Input, { InputProps } from '../atoms/Input';

interface InputWithLabelProps extends InputProps {
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
