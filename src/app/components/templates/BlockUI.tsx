import React, { forwardRef, useImperativeHandle, useState } from 'react';

import * as PrBlockUI from 'primereact/blockui';

interface BlockUIProps extends PrBlockUI.BlockUIProps {}

export interface BlockUIRef {
    setIsBlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

// TODO: ajustar BlockUI, ele está no GlobalContext, e não está cobrindo a tela toda, está inserindo embaixo do children.
const BlockUI: React.ForwardRefRenderFunction<BlockUIRef, BlockUIProps> = ({ ...props }, ref) => {
    const [isBlocked, setIsBlocked] = useState(false);

    useImperativeHandle(ref, () => ({ setIsBlocked }), []);

    return (
        <>
            {isBlocked && (
                <PrBlockUI.BlockUI
                    id="block-ui-id"
                    {...props}
                    blocked={isBlocked}
                    containerStyle={{ position: 'absolute', top: '0', minHeight: '160vh' }}
                />
            )}
        </>
    );
};

export default forwardRef(BlockUI);
