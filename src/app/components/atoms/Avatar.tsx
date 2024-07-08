import React from 'react';

import * as PrAvatar from 'primereact/avatar';

interface AvatarProps extends PrAvatar.AvatarProps {}

const Avatar: React.FC<AvatarProps> = ({ image }) => (
    <PrAvatar.Avatar
        className="w-32 h-32"
        image={image}
        pt={{
            image: {
                className: 'rounded-[32px]',
            },
        }}
    />
);

export default Avatar;
