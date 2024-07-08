'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import useTranslation from '@/app/lib/hooks/useTranslation';

import Button from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';

const PageUnauthorized = () => {
    const router = useRouter();

    const { t } = useTranslation();

    return (
        <main
            className="items-center justify-between flex-col gap-y-48 flex h-[100vh]"
            style={{
                padding: '20px 16px',
            }}
        >
            <Header />

            <section className="max-w-lg flex-col flex gap-32 px-64 py-16 md:px-96 md:py-0 text-center">
                <Text variant="fwSb-fs16-primary">{t('specific.unauthorized.label.title')}</Text>
                <Title variant="fwSB-fs48-lh60-lspN2-gray900">{t('specific.unauthorized.label.naoAutorizado')}</Title>
                <Text variant="fwReg-fs20-lh30-gray500">{t('specific.unauthorized.label.description')}</Text>
                <Button variant="gradient" onClick={() => router.push('/')}>
                    {t('specific.unauthorized.label.facaLogin')}
                </Button>
            </section>

            <Footer />
        </main>
    );
};

export default PageUnauthorized;
