import { AxiosResponse } from 'axios';
import AuthPortProps from '../ports/authPort';
import httpMiddleware from '../http';
import { AuthResponseSchema, AuthUserSchema } from '@/schemas/AuthSchema';

const authAdapter: AuthPortProps = {
    login: async ({ identifier, password }) => {
        const method = 'POST';

        const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`;

        try {
            const response: AxiosResponse<AuthResponseSchema> = await httpMiddleware({
                method,
                url,
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
        const method = 'GET';

        const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/users/me`;

        try {
            const response: AxiosResponse<AuthUserSchema> = await httpMiddleware({ method, url, token });

            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default authAdapter;
