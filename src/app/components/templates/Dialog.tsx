import React from 'react';

import * as PrDialogProps from 'primereact/dialog';
import { classNames } from 'primereact/utils';

interface DialogProps extends PrDialogProps.DialogProps {}

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => (
    <PrDialogProps.Dialog
        pt={{
            headerTitle: {
                className: 'font-bold text-lg',
            },
            headerIcons: {
                className: 'flex items-center',
            },
            content: ({ state }: PrDialogProps.DialogPassThroughMethodOptions) => ({
                className: classNames(
                    'overflow-y-auto',
                    'bg-white text-gray-700 px-6 pb-8 pt-0',
                    'rounded-bl-lg rounded-br-lg',
                    'dark:bg-gray-900  dark:text-white/80 ',
                    {
                        grow: state.maximized,
                    }
                ),

                style: {
                    padding: '12px 26px',
                },
            }),
            header: {
                className: classNames(
                    'flex items-center justify-between shrink-0',
                    'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6',
                    'dark:bg-gray-900  dark:text-white/80'
                ),
            },

            mask: ({ state }: PrDialogProps.DialogPassThroughMethodOptions) => ({
                className: classNames('transition duration-200', { 'bg-black/40': state.containerVisible }),
            }),
            root: ({ state }: PrDialogProps.DialogPassThroughMethodOptions) => ({
                className: classNames(
                    'rounded-lg shadow-lg border-0',
                    'max-h-[90%] transform scale-100',
                    'm-0 w-auto',
                    'dark:border dark:border-blue-900/40',
                    {
                        'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0':
                            state.maximized,
                    }
                ),
            }),
        }}
        {...props}
    >
        {children}
    </PrDialogProps.Dialog>
);

export default Dialog;
