import React from 'react';

import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';

import Header from '@/app/components/organism/Header';

describe('Deve renderizar o Header corretamente', () => {
    it('Deve renderizar o Avatar, corretamente', () => {
        render(<Header />);

        const getAvatar = screen.getByTestId('avatar-testid');

        expect(getAvatar).toBeInTheDocument();
    });

    it('Deve preservar a estrutura visual do componente', () => {
        const three = renderer.create(<Header />).toJSON();

        expect(three).toMatchSnapshot();
    });
});
