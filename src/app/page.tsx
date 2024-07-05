'use client';

import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';

import * as Yup from 'yup';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import BaseForm, { FormikHelpers, FormikValues } from '@/core/components/Form/Form';
import { GlobalContext } from '@/core/context/GlobalContext';

import { Text, Title, Icon } from '@/components/atoms';
import Button, { ButtonRef } from './components/atoms/Button/Button';

import { Header, Footer } from '@/components/organism';
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
        <>
            <main data-testid="page-login" className="page-login">
                <Header />

                <BaseForm
                    initialValues={{
                        email: 'test@matheusgomesdev.com.br',
                        password: '123456',
                        manter_logado: false,
                    }}
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={true}
                    onSubmit={handleLogin}
                    data-testid="page-login-form-testid"
                    style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    <div className="page-login__form">
                        <div data-testid="page-login-title-testid" className="page-login__form_title">
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
                            {`${t('specific.home.inputLabel.btnEntrar')}`}
                        </Button>
                    </div>
                </BaseForm>

                <Footer />
            </main>
        </>
    );
};

export default withSessionHOC(Home);
