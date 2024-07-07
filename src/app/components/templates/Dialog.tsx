import React from 'react';

import * as PrDialogProps from 'primereact/dialog';

interface DialogProps extends PrDialogProps.DialogProps {}

/*
    backdrop-filter: var(--blur-md);
    */

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => (
    <PrDialogProps.Dialog
        pt={{
            root: {
                className: 'w-full max-w-md bg-white rounded-12 p-24',
            },
            mask: {
                className: 'bg-dialog-bg-mask',
            },
        }}
        {...props}
    >
        {children}
    </PrDialogProps.Dialog>
);

export default Dialog;
