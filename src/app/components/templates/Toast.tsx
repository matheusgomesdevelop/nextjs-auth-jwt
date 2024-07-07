import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import * as PrToast from 'primereact/toast';

export interface ToastRef {
    showToast: (message: PrToast.ToastMessage | PrToast.ToastMessage[]) => void;
}

interface ToastProps extends PrToast.ToastProps {}

const Toast: React.ForwardRefRenderFunction<ToastRef, ToastProps> = (props, ref) => {
    const toastRef = useRef<PrToast.Toast>(null);

    useImperativeHandle(ref, () => ({ showToast: (message) => toastRef.current?.show({ ...message }) }), []);

    return (
        <PrToast.Toast
            ref={toastRef}
            pt={{
                message: {
                    className: 'px-24 py-16',
                },
                content: {
                    className: 'flex gap-16',
                },
                icon: {
                    className: '',
                },
                text: {
                    className: 'flex-col flex gap-6',
                },
            }}
            {...props}
        />
    );
};

export default forwardRef(Toast);
