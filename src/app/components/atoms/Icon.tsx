import React from 'react';

interface IconProps {
    icon: 'pi-lock' | 'pi-github' | 'pi-linkedin' | 'pi-sun' | 'pi-spin pi-cog';
}

const Icon: React.FC<IconProps> = ({ icon }) => <i className={`text-gray-900 text-lg pi ${icon}`} />;

export default Icon;
