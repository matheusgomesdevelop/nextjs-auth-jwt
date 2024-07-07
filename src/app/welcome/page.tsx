'use client';

import React, { useImperativeHandle, useCallback, useContext, forwardRef, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import useTranslation from '@/app/hooks/useTranslation';
import { GlobalContext } from '@/app/components/GlobalContext';
import token from '../lib/token';

import Button, { ButtonRef } from '../components/atoms/Button';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Header from '../components/organism/Header';
import Footer from '../components/organism/Footer';
import Dialog from '../components/templates/Dialog';
import { SessionHOCProps, withSessionHOC } from '../components/SessionHOC';

interface ConfirmButtonProps {
    onConfirm: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ onConfirm }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { t } = useTranslation();

    return (
        <Button
            variant="gradient"
            loading={isLoading}
            onClick={() => {
                setIsLoading(true);
                onConfirm();
            }}
        >
            {!isLoading && t('specific.welcome.modal.logoutDialog.btnConfirm')}
        </Button>
    );
};

interface LogoutDialogRef {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutDialog: React.ForwardRefExoticComponent<object & React.RefAttributes<LogoutDialogRef>> = forwardRef(
    (props, ref) => {
        const [visible, setVisible] = useState(false);
        const router = useRouter();
        const { t } = useTranslation();

        const btnLogoutRef = useRef<ButtonRef>(null);

        const onConfirm = useCallback(() => {
            btnLogoutRef.current?.setLoading(true);
            token.delete();
            router.push('/');
        }, []);

        const onReject = useCallback(() => setVisible(false), []);

        useImperativeHandle(ref, () => ({ setVisible }), []);

        return (
            <Dialog className="text-center my-0 mx-20" showHeader={false} visible={visible} onHide={() => null}>
                <div className="flex-col flex gap-8">
                    <Title variant="h2">{t('specific.welcome.modal.logoutDialog.title')}</Title>
                    <Text variant="fwReg-fs20-lh30-gray500">
                        {t('specific.welcome.modal.logoutDialog.description')}
                    </Text>
                </div>

                <div className="flex gap-12">
                    <ConfirmButton onConfirm={onConfirm} />
                    <Button variant="fwMd-fs16-colGray700-bgWhite" onClick={onReject}>
                        {t('specific.welcome.modal.logoutDialog.btnReject')}
                    </Button>
                </div>
            </Dialog>
        );
    }
);

LogoutDialog.displayName = 'LogoutDialog';

interface WelcomeProps extends SessionHOCProps {}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
    const logoutDialogRef = useRef<LogoutDialogRef>(null);
    const { blockUIRef } = useContext(GlobalContext);

    const { session } = data;

    const { t } = useTranslation();

    useEffect(() => {
        blockUIRef.current?.setIsBlocked(false);
    }, []);

    return (
        <>
            <section className="page-welcome">
                <Header />

                {session && (
                    <main className="page-welcome__content">
                        <div className="page-welcome__content_heading">
                            <Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
                                {t('specific.welcome.label.title')}
                            </Text>

                            <Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
                                {session.username}
                            </Title>
                        </div>

                        <Text
                            data-testid="a-text-description"
                            variant="fwReg-fs20-lh30-gray500"
                            id="a-text-description"
                        >
                            {t('specific.welcome.label.description')}
                        </Text>

                        <Button
                            variant="fwMd-fs16-colGray700-bgWhite"
                            data-testid="a-button-logout"
                            onClick={() => logoutDialogRef.current?.setVisible(true)}
                        >
                            {t('specific.welcome.label.btnLogout')}
                        </Button>
                    </main>
                )}

                <Footer />
            </section>

            <LogoutDialog ref={logoutDialogRef} />
        </>
    );
};

export default withSessionHOC(Welcome);
