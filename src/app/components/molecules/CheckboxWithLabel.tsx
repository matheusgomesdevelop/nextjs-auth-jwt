import React from 'react';

import BaseField from '@/core/components/Field/Field';
import Checkbox, { CheckboxProps } from '../atoms/Checkbox';
import Label from '../atoms/Label';

interface CheckboxWithLabelProps extends CheckboxProps {
    labelText: string;
    name: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({ labelText, name, ...props }) => (
    <div className="items-center flex gap-6">
        <BaseField render={<Checkbox id="checkbox" {...props} />} name={name} type="checkbox" />

        <Label
            onClick={() => {
                const get_checkbox = document.getElementById('checkbox');
                get_checkbox && get_checkbox.click();
            }}
        >
            {labelText}
        </Label>
    </div>
);

export default CheckboxWithLabel;
