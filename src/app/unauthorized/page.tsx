'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import useTranslation from '@/app/lib/hooks/useTranslation';

import Text from '../components/atoms/Text';
import Title from '../components/atoms/Title';
import Button from '../components/atoms/Button';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';

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
