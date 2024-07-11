import React from 'react';

interface TitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    variant: 'h1' | 'h2' | 'fwSB-fs48-lh60-lspN2-gray900';
}

const Title: React.FC<TitleProps> = ({ variant, children, className }) => {
    return (
        <>
            {variant === 'h1' && <h1 className={`text-white text-lg ${className}`}>{children}</h1>}
            {variant === 'h2' && <h2 className={`text-white text-display-sm ${className}`}>{children}</h2>}
            {variant === 'fwSB-fs48-lh60-lspN2-gray900' && (
                <h2
                    className={`text-display-md font-semibold leading-48 tracking-[-2%] text-white md:text-display-lg md:leading-64 ${className}`}
                >
                    {children}
                </h2>
            )}
        </>
    );
};
export default Title;
