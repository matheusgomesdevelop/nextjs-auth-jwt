import React from 'react';

import useTheme from '@/app/lib/hooks/useTheme';

import Button from '../atoms/Button';
import Avatar from '../atoms/Avatar';
import Icon from '../atoms/Icon';
import Link from '../atoms/Link';

const Header: React.FC = () => {
    const theme = useTheme();

    return (
        <header className="w-full container flex justify-between items-center">
            <Link href="https://github.com/matheusgrodrigues">
                <Avatar image="/images/a-avatar.jpeg" />
            </Link>
            <Button className="max-w-max" variant="transparent" onClick={theme.toggleTheme}>
                <Icon icon="pi-sun" />
            </Button>
        </header>
    );
};

export default Header;
