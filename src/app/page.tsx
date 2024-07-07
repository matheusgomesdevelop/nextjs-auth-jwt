'use client';

import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';

import * as Yup from 'yup';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import BaseForm, { FormikHelpers, FormikValues } from '@/core/components/Form/Form';
import { GlobalContext } from '@/core/context/GlobalContext';

import { Text } from '@/components/atoms';
import Button, { ButtonRef } from './components/atoms/Button';
import Header from './components/organism/Header';
import Footer from './components/organism/Footer';
import Title from './components/atoms/Title';
import Icon from './components/atoms/Icon';

import { CheckboxWithLabel, InputWithLabel } from '@/components/molecules';

import useTranslation from '@/core/hooks/useTranslation';

import { authUseCases } from '@/services/AuthService';

interface HomeProps extends SessionHOCProps {}

const Home: React.FC<HomeProps> = ({ loading, error, data }) => {
    const { session } = data;

    const { blockUIRef, toastRef } = useContext(GlobalContext);

    const router = useRouter();

    const btnSubmitRef = useRef<ButtonRef>(null);

    const { t } = useTranslation();

    useMemo(() => {
        if (session && !error && !loading) {
            blockUIRef.current?.setIsBlocked(true);
        }
    }, [loading, session, error]);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required(`${t('specific.home.inputErrorMessage.invalid_email')}`)
            .email(`${t('specific.home.inputErrorMessage.invalid_email')}`),
        password: Yup.string()
            .required(`${t('specific.home.inputErrorMessage.invalid_password_empty')}`)
            .min(4, `${t('specific.home.inputErrorMessage.invalid_password_min_length')}`),
    });

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
        <main className="items-center justify-between flex-col flex h-[100vh] w-full">
            <Header />

            <BaseForm
                initialValues={{
                    manter_logado: false,
                    password: '123456',
                    email: 'test@matheusgomesdev.com.br',
                }}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={handleLogin}
                style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}
            >
                <div className="max-w-sm flex-col flex gap-32 px-64 py-16 md:px-96 md:py-0">
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

                    <CheckboxWithLabel
                        labelText={`${t('specific.home.inputLabel.manterConectado')}`}
                        checked={false}
                        name="manter_logado"
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
