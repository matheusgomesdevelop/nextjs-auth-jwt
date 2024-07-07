'use client';

import React, { useRef } from 'react';

import BlockUI, { BlockUIRef } from '../components/BlockUI/BlockUI';
import Toast, { ToastRef } from '@/app/components/templates/Toast';

interface GlobalContextValuesProps {
    blockUIRef: React.RefObject<BlockUIRef>;
    toastRef: React.RefObject<ToastRef>;
}

export const GlobalContext = React.createContext({} as GlobalContextValuesProps);

interface GlobalContextProps {
    children: React.ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProps> = ({ children }) => {
    const blockUIRef = useRef<BlockUIRef>(null);
    const toastRef = useRef<ToastRef>(null);

    return (
        <GlobalContext.Provider value={{ blockUIRef, toastRef }}>
            {children}

            <BlockUI ref={blockUIRef} />
            <Toast ref={toastRef} />
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
