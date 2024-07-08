import React from 'react';

interface LinkProps {
    href: string;
    children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children }) => (
    <a href={href} className="text-primary decoration-0">
        {children}
    </a>
);

export default Link;
