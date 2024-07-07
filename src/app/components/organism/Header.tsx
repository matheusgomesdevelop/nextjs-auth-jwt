import React from 'react';

import useTheme from '@/core/hooks/useTheme';

import { Button, Link } from '@/components/atoms';
import Avatar from '../atoms/Avatar';
import Icon from '../atoms/Icon';

const Header: React.FC = () => {
    const theme = useTheme();

    return (
        <header className="w-full container h-64 px-20 py-16 flex justify-between items-center">
            <Link href="https://github.com/matheusgrodrigues">
                <Avatar image="/images/a-avatar.jpeg" />
            </Link>
            <Button variant="transparent" onClick={theme.toggleTheme}>
                <Icon icon="pi-sun" />
            </Button>
        </header>
    );
};

export default Header;
