import { GetServerSidePropsContext } from 'next';

import { authUseCases } from '@/services/AuthService';

import token from './token';

const getSession = async (ctx?: GetServerSidePropsContext) => {
    try {
        const user = await authUseCases.me(token.get(ctx));

        return user;
    } catch (error) {
        throw error;
    }
};

export default getSession;
