import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { StyledLink } from "./Link.styles";


interface LinkProps {
    to: string;
    icon: IconProp;
    children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, icon, children }) => (
    <StyledLink to={to}>
        <FontAwesomeIcon icon={icon} />
        {children}
    </StyledLink>
);
