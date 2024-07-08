'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import useTranslation from '@/app/lib/hooks/useTranslation';

import Text from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';

/*
@import '../../util/breakpoints';

.page-unauthorized {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__content {
        width: 100%;
        max-width: $tablet;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        max-width: 768px;

        padding: var(--spacing-64) var(--spacing-16);

        @include d(tablet) {
            padding: var(--spacing-96) 0;
        }

        & button {
            margin-top: var(--spacing-64);
            max-width: 140px;
        }
    }

    & > [id='footer'] {
        margin-top: auto;
    }
}

*/

/*
.t_401 {
    width: 100%;
    max-width: 768px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    gap: var(--spacing-24);
    text-align: center;
}

.t_401 > button {
    width: 124px;
    margin-top: var(--spacing-48);
}

.t_401 > p {
    line-height: 30px;
}

*/
const PageUnauthorized = () => {
    const router = useRouter();

    const { t } = useTranslation();

    return (
        <main data-testid="p-401" className="page-unauthorized">
            <Header />

            <main data-testid="t-401" className="page-unauthorized__content" id="t-401">
                <Text variant="fwSb-fs16-primary">{t('specific.unauthorized.label.title')}</Text>
                <Title variant="fwSB-fs48-lh60-lspN2-gray900">{t('specific.unauthorized.label.naoAutorizado')}</Title>
                <Text variant="fwReg-fs20-lh30-gray500">{t('specific.unauthorized.label.description')}</Text>
                <Button variant="gradient" onClick={() => router.push('/')}>
                    {t('specific.unauthorized.label.facaLogin')}
                </Button>
            </main>

            <Footer />
        </main>
    );
};

export default PageUnauthorized;
