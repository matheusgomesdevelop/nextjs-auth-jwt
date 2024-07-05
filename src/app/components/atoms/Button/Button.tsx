import React, { forwardRef, useImperativeHandle, useState } from 'react';

import * as PrButton from 'primereact/button';

interface ButtonProps extends PrButton.ButtonProps {
    'data-testid'?: string;
    variant: 'fwMd-fs16-colGray700-bgWhite' | 'gradient' | 'transparent';
}

export interface ButtonRef {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.ForwardRefRenderFunction<ButtonRef, ButtonProps> = ({ variant, children, ...props }, ref) => {
    const [loading, setLoading] = useState(false);

    useImperativeHandle(ref, () => ({ setLoading }), []);

    return (
        <PrButton.Button
            data-testid="button-testid"
            {...props}
            loading={loading}
            className={`
        ${
            variant === 'transparent'
                ? 'w-auto h-auto border-none bg-transparent text-gray-900'
                : variant === 'fwMd-fs16-colGray700-bgWhite'
                  ? 'text-md text-gray-700 bg-white border-1 border-solid border-gray-100 hover:opacity-90 hover:border-primary lg:max-w-[82px]'
                  : variant === 'gradient'
                    ? 'w-full max-w-[82px] bg-gradient-to-r from-primary to-secondary font-semibold text-white border-1 border-solid border-secondary hover:opacity-90 transition duration-150'
                    : ''
        }
    `}
        >
            {loading ? '' : children}
        </PrButton.Button>
    );
};

export default forwardRef(Button);
