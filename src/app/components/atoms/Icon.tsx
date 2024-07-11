import React from 'react';

interface IconProps {
    icon: 'pi-lock' | 'pi-github' | 'pi-linkedin' | 'pi-sun' | 'pi-spin pi-cog';
}

const Icon: React.FC<IconProps> = ({ icon }) => <i className={`text-white text-lg pi ${icon}`} />;

export default Icon;
