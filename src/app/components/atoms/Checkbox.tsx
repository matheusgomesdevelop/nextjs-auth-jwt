import React from 'react';

import * as PrCheckbox from 'primereact/checkbox';

export interface CheckboxProps extends PrCheckbox.CheckboxProps {
    checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, ...props }) => (
    <PrCheckbox.Checkbox data-testid="checkbox-testid" checked={checked} {...props} />
);

export default Checkbox;
