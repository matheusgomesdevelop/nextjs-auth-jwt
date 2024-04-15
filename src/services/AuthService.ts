import tokenService from '@/core/services/tokenService';

import authAdapter from '@/core/adapters/authAdapter';

import AuthPort from '@/core/ports/authPort';

import { AuthCredentialSchema } from '@/schemas/AuthSchema';

export const authUseCases: AuthPort = {
    login: async ({ identifier, password, manter_logado }: AuthCredentialSchema) => {
        try {
            const response = await authAdapter.login({ identifier, password, manter_logado });

            tokenService.save(response.jwt, manter_logado);

            return response;
        } catch (error) {
            throw error;
        }
    },
    me: async (token: string) => {
        try {
            const response = await authAdapter.me(token);

            return response;
        } catch (error) {
            throw error;
        }
    },
};
