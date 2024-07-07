import React from 'react';

import { Link, Icon } from '@/components/atoms';

const Footer: React.FC = () => {
    const date = new Date();

    return (
        <footer className="flex justify-between items-center w-full h-64">
            <div className="opacity-0" />

            <p className="text-gray-500 flex gap-6">
                © {date.getFullYear()}
                <Link href={'https://matheusgomesdev.com.br'}>matheusgomesdev.</Link>
            </p>

            {/* TODO: Corrigir aparecimento dos Icon */}
            <div className="flex gap-24">
                <Link href={'https://github.com/matheusgrodrigues/nextjs-auth-jwt'}>
                    <Icon icon="pi-github" />
                </Link>

                <Link href={'https://www.linkedin.com/in/matheusgomes/'}>
                    <Icon icon="pi-linkedin" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
