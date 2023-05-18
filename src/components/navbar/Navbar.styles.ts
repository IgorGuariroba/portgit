import styled  from "styled-components";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`

`;

interface ToggleProps {
    isOpen: boolean;
}

export const Menu = styled.div<ToggleProps>`
  position: fixed;
  inset-block: 0;
  left: ${props => props.isOpen ? '0' : '-100%'};
  background-color: ${props => props.theme.containerColor};
  width: 100%;
  padding: 3.75rem 1.87rem;
`;



export const List = styled.ul``;

export const Item = styled.li`
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  padding-block: 0.90rem;
  color: ${props => props.theme.titleColor};
  &:active > *{
    color: ${props => props.theme.firstColor};
  }
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: ${props => props.theme.weigth500};
`;


export const Toggle = styled(FontAwesomeIcon)`
  position: fixed;
  top: 1.4rem;
  right: 1.4rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: ${props => props.theme.containerColor};
`;