import React from 'react';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { AppRouterContextProviderMock } from '@/utils/test-utils/app-router-ctx-provider';

import Home from '@/app/page';

describe('Deve renderizar a pagina de login, corretamente.', () => {
    const push = jest.fn();

    beforeEach(() => {
        render(
            <AppRouterContextProviderMock router={{ push }}>
                <Home />
            </AppRouterContextProviderMock>
        );
    });

    it('Deve preservar a estrutura visual da pagina de login.', () => {
        const pageLogin = renderer
            .create(
                <AppRouterContextProviderMock router={{ push }}>
                    <Home />
                </AppRouterContextProviderMock>
            )
            .toJSON();

        expect(pageLogin).toMatchSnapshot();
    });

    describe('Deve renderizar o formulário de login corretamente.', () => {
        it('Deve renderizar o Formulario.', () => {
            const getLoginForm = screen.getByTestId('page-login-form-testid');

            expect(getLoginForm).toBeInTheDocument();
        });

        it('Deve renderizar o campo E-mail.', () => {
            const getFieldEmail = screen.getByTestId('input-with-label-email-testid');

            expect(getFieldEmail).toBeInTheDocument();
        });

        it('Deve renderizar o campo Senha.', () => {
            const getFieldPassword = screen.getByTestId('input-with-label-password-testid');

            expect(getFieldPassword).toBeInTheDocument();
        });
    });
});
