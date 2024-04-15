'use client';

import React, { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FormikHelpers, FormikValues } from 'formik';

import * as Yup from 'yup';

import useTranslation from '@/core/hooks/useTranslation';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import Toast, { ToastRef } from '@/core/components/Toast/Toast';
import BlockUI, { BlockUIRef } from '@/core/components/BlockUI/BlockUI';
import BaseForm from '@/core/components/Form/Form';

import { Button, Text, Title, Icon, ButtonRef } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';
import { CheckboxWithLabel, InputWithLabel } from '@/components/molecules';

import { authUseCases } from '@/services/AuthService';

interface HomeProps extends SessionHOCProps {}

function Home({ loading, data, error }: HomeProps) {
    const { session } = data;

    const router = useRouter();

    const toastRef = useRef<ToastRef>(null);
    const btnSubmitRef = useRef<ButtonRef>(null);
    const blockUIRef = useRef<BlockUIRef>(null);

    const { t } = useTranslation();

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

            setTimeout(() => router.push('/welcome'), 3000);
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

    useEffect(() => {
        if (session && !error && !loading) {
            blockUIRef.current?.setIsBlocked(true);
        }
    }, [loading, session, error]);

    return (
        <>
            <main data-testid="page-login" className="page-login">
                <Header />

                <BaseForm
                    initialValues={{
                        email: 'admin@matheusgomesdev.com.br',
                        password: '123456',
                        manter_logado: false,
                    }}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                    onSubmit={handleLogin}
                    data-testid="o-login-form"
                    className={'o_form_login'}
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="page-login__form">
                        <div data-testid="page-login-title-testid" className="page-login__form_title">
                            <Icon icon="pi-lock" />
                            <Title variant="h2">{t('specific.home.label.title')}</Title>
                            <Text variant="fwReg-fs16-gray500">{t('specific.home.label.description')}</Text>
                        </div>

                        <InputWithLabel
                            labelText="Email"
                            name="email"
                            type="email"
                            placeholder={t('specific.home.inputLabel.email')}
                        />

                        <InputWithLabel
                            labelText="Senha"
                            name="password"
                            type="password"
                            placeholder={t('specific.home.inputLabel.senha')}
                        />

                        <CheckboxWithLabel
                            name="manter_logado"
                            labelText={`${t('specific.home.inputLabel.manterConectado')}`}
                            checked={false}
                        />

                        <Button variant="gradient" type="submit" ref={btnSubmitRef}>
                            Entrar
                        </Button>
                    </div>
                </BaseForm>

                <Footer />
            </main>

            <Toast ref={toastRef} position="bottom-center" />
            <BlockUI fullScreen ref={blockUIRef} />
        </>
    );
}

export default withSessionHOC(Home);
