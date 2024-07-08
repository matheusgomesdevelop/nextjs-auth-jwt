import React from 'react';

interface TextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    variant: 'error' | 'fwSb-fs16-primary' | 'fwReg-fs20-lh30-gray500' | 'fwReg-fs16-gray500';
}

const Text: React.FC<TextProps> = ({ variant, children }) => (
    <p
        data-testid="text-testid"
        className={`${
            variant === 'error'
                ? 'text-red-500 text-sm'
                : variant === 'fwSb-fs16-primary'
                  ? 'text-primary font-semibold text-md'
                  : variant === 'fwReg-fs20-lh30-gray500'
                    ? 'text-gray-500 font-regular leading-32 text-xl'
                    : variant === 'fwReg-fs16-gray500'
                      ? 'text-gray-500 font-regular text-md'
                      : ''
        }`}
    >
        {children}
    </p>
);

export default Text;
