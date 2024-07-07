'use client';

import React, { ComponentType, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { AuthUserSchema } from '@/schemas/AuthSchema';

import useSession from '@/app/hooks/useSession';

export interface SessionHOCProps {
    data: {
        session: AuthUserSchema | undefined;
    };
    error: boolean;
    loading: boolean;
}

export const withSessionHOC = <P extends object>(Component: ComponentType<P & SessionHOCProps>): React.FC<P> => {
    const Wrapper: React.FC<P> = (props) => {
        const { data, loading, error } = useSession();

        const router = useRouter();

        useEffect(() => {
            if (!loading && error) {
                if (window.location.pathname === '/') {
                    router.push('/');
                } else {
                    router.push('/unauthorized');
                }
            } else if (!loading && !error && data.session && window.location.pathname === '/') {
                router.push('/welcome');
            }
        }, [loading, error, router, data.session]);

        const modifiedProps = {
            ...props,
            data,
            error,
            loading,
        };

        return <Component {...modifiedProps} />;
    };

    return Wrapper;
};
