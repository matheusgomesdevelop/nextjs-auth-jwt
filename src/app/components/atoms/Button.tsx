import React, { forwardRef, useImperativeHandle, useState } from 'react';

import * as PrButton from 'primereact/button';

interface ButtonProps extends PrButton.ButtonProps {
    'data-testid'?: string;
    variant: 'fwMd-fs16-colGray700-bgWhite' | 'gradient' | 'transparent';
}

export interface ButtonRef {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: React.ForwardRefRenderFunction<ButtonRef, ButtonProps> = ({ variant, children, className }, ref) => {
    const [loading, setLoading] = useState(false);

    useImperativeHandle(ref, () => ({ setLoading }), []);

    return (
        <PrButton.Button
            loading={loading}
            className={`px-[10px] py-[14px] h-[44px] w-full rounded-8 border-1 border-solid hover:opacity-90 transition duration-150 ${
                variant === 'transparent'
                    ? 'border-none bg-transparent text-gray-900'
                    : variant === 'fwMd-fs16-colGray700-bgWhite'
                      ? 'text-md text-gray-700 bg-white border-gray-100 hover:border-primary'
                      : variant === 'gradient'
                        ? 'bg-gradient-to-r from-primary to-secondary font-semibold text-white border-secondary'
                        : ''
            } 
   ${className} `}
        >
            {!loading && children}
        </PrButton.Button>
    );
};

export default forwardRef(Button);
