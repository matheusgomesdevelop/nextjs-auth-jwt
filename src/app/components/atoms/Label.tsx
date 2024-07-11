import React from 'react';

import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => (
    <label className="text-white font-medium text-sm" {...props}>
        {children}
    </label>
);

export default Label;
