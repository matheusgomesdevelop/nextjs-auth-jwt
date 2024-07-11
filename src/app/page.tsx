'use client';

import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';

import * as Yup from 'yup';

import { GlobalContext } from '@/app/components/GlobalContext';
import useTranslation from '@/app/lib/hooks/useTranslation';

import { authUseCases } from '@/services/AuthService';

import Button, { ButtonRef } from './components/atoms/Button';
import Header from './components/organism/Header';
import Footer from './components/organism/Footer';
import Title from './components/atoms/Title';
import Text from './components/atoms/Text';
import Icon from './components/atoms/Icon';
import InputWithLabel from './components/molecules/InputWithLabel';
import { SessionHOCProps, withSessionHOC } from './components/SessionHOC';
import BaseForm, { FormikHelpers, FormikValues } from './components/templates/BaseForm';

import i18n_home from '@/config/i18n/Specific/home/home';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(`${i18n_home.home.inputErrorMessage.invalid_email}`)
        .email(`${i18n_home.home.inputErrorMessage.invalid_email}`),
    password: Yup.string()
        .required(`${i18n_home.home.inputErrorMessage.invalid_email_password}`)
        .min(4, `${i18n_home.home.inputErrorMessage.invalid_password_min_length}`),
});

interface HomeProps extends SessionHOCProps {}

const Home: React.FC<HomeProps> = ({ loading, error, data }) => {
    const router = useRouter();

    const { blockUIRef, toastRef } = useContext(GlobalContext);
    const btnSubmitRef = useRef<ButtonRef>(null);
    const { t } = useTranslation();

    const { session } = data;

    useMemo(() => {
        if (session && !error && !loading) {
            blockUIRef.current?.setIsBlocked(true);
        }
    }, [loading, session, error]);

    const handleLogin = useCallback(async (values: FormikValues, actions: FormikHelpers<FormikValues>) => {
        const { manter_logado, password, email } = values;

        actions.setSubmitting(true);
        btnSubmitRef.current?.setLoading(true);

        try {
            await authUseCases.login({
                identifier: email,
                password,
                manter_logado,
            });

            actions.setSubmitting(false);
            btnSubmitRef.current?.setLoading(false);

            toastRef.current?.showToast({
                severity: 'success',
                summary: `${t('specific.home.toast.success_title')}`,
                detail: `${t('specific.home.toast.redirect_message')}`,
            });

            router.push('/welcome');
        } catch {
            actions.setSubmitting(false);
            btnSubmitRef.current?.setLoading(false);

            toastRef.current?.showToast({
                severity: 'error',
                summary: `${t('specific.home.toast.error_title')}`,
                detail: `${t('specific.home.inputErrorMessage.invalid_email_password')}`,
            });
        }
    }, []);

    return (
        <main
            className="bg-slate-800 items-center justify-between flex-col gap-y-48 flex h-[100vh]"
            style={{
                padding: '20px 16px',
            }}
        >
            <Header />

            <BaseForm
                initialValues={{
                    manter_logado: false,
                    password: '123456',
                    email: 'teste@test.com',
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={true}
                className="flex-col flex gap-20"
                onSubmit={handleLogin}
            >
                <div className="max-w-lg flex-col flex gap-32 px-64 py-16 md:px-96 md:py-0">
                    <div className="justify-center items-center flex-col flex text-center">
                        <Icon icon="pi-lock" />
                        <Title variant="h2">{t('specific.home.label.title')}</Title>
                        <Text variant="fwReg-fs16-gray500">{t('specific.home.label.description')}</Text>
                    </div>

                    <InputWithLabel
                        placeholder={t('specific.home.inputLabel.email')}
                        labelText="Email"
                        name="email"
                        type="email"
                    />

                    <InputWithLabel
                        placeholder={t('specific.home.inputLabel.senha')}
                        labelText="Senha"
                        name="password"
                        type="password"
                    />

                    <Button variant="gradient" type="submit" ref={btnSubmitRef}>
                        {`${t('specific.home.inputLabel.btnEntrar')}`}
                    </Button>
                </div>
            </BaseForm>

            <Footer />
        </main>
    );
};

export default withSessionHOC(Home);
