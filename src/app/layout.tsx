import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import i18n_metadata from '@/config/i18n/Metadata/metadata';
import GlobalContextProvider from '@/app/components/GlobalContext';

import './global.css';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    description: i18n_metadata.metadata.description,
    title: i18n_metadata.metadata.title,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={inter.className}>
            <link rel="icon" href="/images/lock.svg" sizes="any" />
            <body>
                <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
                    <GlobalContextProvider>{children}</GlobalContextProvider>
                </PrimeReactProvider>
            </body>
        </html>
    );
}
