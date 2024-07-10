'use client';

import React, { useImperativeHandle, useCallback, useContext, forwardRef, useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import useTranslation from '@/app/lib/hooks/useTranslation';
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
            className="max-w-[182px]"
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
            <Dialog className="text-center" showHeader={false} visible={visible} onHide={() => null}>
                <div className="flex-col flex gap-8">
                    <Title variant="h2">{t('specific.welcome.modal.logoutDialog.title')}</Title>
                    <Text variant="fwReg-fs20-lh30-gray500">
                        {t('specific.welcome.modal.logoutDialog.description')}
                    </Text>
                </div>

                <div
                    className="flex justify-center gap-12"
                    style={{
                        marginTop: '12px',
                    }}
                >
                    <ConfirmButton onConfirm={onConfirm} />
                    <Button className="max-w-[82px]" variant="fwMd-fs16-colGray700-bgWhite" onClick={onReject}>
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
            <section
                className="items-center justify-between flex-col gap-y-48 flex h-[100vh]"
                style={{
                    padding: '20px 16px',
                }}
            >
                <Header />

                {session && (
                    <div className="max-w-2xl flex-col flex gap-32 px-64 py-16 md:px-96 md:py-0">
                        <div className="justify-center items-center flex-col flex text-center">
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
                    </div>
                )}

                <Footer />
            </section>

            <LogoutDialog ref={logoutDialogRef} />
        </>
    );
};

export default withSessionHOC(Welcome);
