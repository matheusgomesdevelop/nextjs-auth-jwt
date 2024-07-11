import React from 'react';

import Avatar from '../atoms/Avatar';
import Link from '../atoms/Link';

const Header: React.FC = () => {
    return (
        <header className="w-full container flex justify-between items-center">
            <Link href="https://github.com/matheusgrodrigues">
                <Avatar image="/images/a-avatar.jpeg" />
            </Link>
        </header>
    );
};

export default Header;
