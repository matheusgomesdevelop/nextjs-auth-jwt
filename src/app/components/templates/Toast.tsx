import React, { useImperativeHandle, forwardRef, useRef } from 'react';

import * as PrToast from 'primereact/toast';
import { classNames } from 'primereact/utils';

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
                root: {
                    className: 'min-w-96 opacity-90',
                    style: {
                        right: '30px',
                    },
                },

                message: ({ state, index }: PrToast.ToastPassThroughMethodOptions & { index: number }) => ({
                    className: classNames('my-4 rounded-md w-full', {
                        'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700':
                            state.messages[index] && state.messages[index].message.severity == 'info',
                        'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700':
                            state.messages[index] && state.messages[index].message.severity == 'success',
                        'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700':
                            state.messages[index] && state.messages[index].message.severity == 'warn',
                        'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700':
                            state.messages[index] && state.messages[index].message.severity == 'error',
                    }),
                    style: {
                        margin: '0 20px',
                        padding: '8px',
                    },
                }),
                summary: {
                    className: 'font-bold block',
                },
                content: {
                    className: 'flex items-center py-5 px-7',
                },
                detail: {
                    className: 'mt-1 block',
                },
                icon: {
                    className: 'w-6 h-6 text-lg mr-2',
                },
                text: {
                    className: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
                },
            }}
            {...props}
        />
    );
};

export default forwardRef(Toast);
