import { GetServerSidePropsContext } from 'next';

import nookies from 'nookies';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

const saveStorage = (value: string, manter_logado: boolean, ctx?: GetServerSidePropsContext) => {
    if (manter_logado) {
        globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, value);

        nookies.set(ctx, ACCESS_TOKEN_KEY, value, {
            maxAge: ONE_YEAR,
            path: '/',
        });
    } else {
        globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, value);
    }
};

const getStorage = (ctx?: GetServerSidePropsContext) => {
    const localStorage = globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
    const sessionStorage = globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY);
    const cookie = nookies.get(ctx);

    let in_use_token = '';

    if (cookie[ACCESS_TOKEN_KEY]) {
        in_use_token = cookie[ACCESS_TOKEN_KEY];
    } else if (localStorage) {
        in_use_token = localStorage;
    } else if (sessionStorage) {
        in_use_token = sessionStorage;
    }

    return in_use_token;
};

const deleteStorage = (ctx?: GetServerSidePropsContext) => {
    globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
    globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);

    nookies.destroy(ctx, ACCESS_TOKEN_KEY);
};

const token = {
    save: (value: string, manter_logado: boolean, ctx?: GetServerSidePropsContext) => {
        return saveStorage(value, manter_logado, ctx);
    },
    get: (ctx?: GetServerSidePropsContext) => getStorage(ctx),
    delete: (ctx?: GetServerSidePropsContext) => deleteStorage(ctx),
};

export default token;
