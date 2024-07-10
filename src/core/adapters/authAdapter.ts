import { AxiosResponse } from 'axios';
import AuthPortProps from '../ports/authPort';
import httpMiddleware from '../http';
import { AuthResponseSchema, AuthUserSchema } from '@/schemas/AuthSchema';

const authAdapter: AuthPortProps = {
    login: async ({ identifier, password }) => {
        try {
            const response: AxiosResponse<AuthResponseSchema> = await httpMiddleware({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
                body: {
                    identifier,
                    password,
                },
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
    me: async (token: string) => {
        try {
            const response: AxiosResponse<AuthUserSchema> = await httpMiddleware({
                method: 'GET',
                url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me`,
                token,
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default authAdapter;
