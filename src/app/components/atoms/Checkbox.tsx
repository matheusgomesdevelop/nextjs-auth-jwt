import React from 'react';

import * as PrCheckbox from 'primereact/checkbox';

export interface CheckboxProps extends PrCheckbox.CheckboxProps {
    checked: boolean;
}

/*
.p-checkbox {
    &-box {
        & svg {
            width: 14px;
            height: 14px;
        }
    }

    & input {
        opacity: 0;
        position: absolute;
    }

    &-icon {
        background-color: var(--primary-color);
    }
}

*/

const Checkbox: React.FC<CheckboxProps> = ({ checked, ...props }) => (
    <PrCheckbox.Checkbox className="appearance-none checked:bg-secondary" checked={checked} {...props} />
);

export default Checkbox;
