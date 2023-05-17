import styled  from "styled-components";
export const NavC = styled.nav`

`;

export const Menu = styled.div`
  position: fixed;
  inset-block: 0;
  left: 0;
  background-color: ${props => props.theme.containerColor};
  width: 100%;
  padding: 3.75rem 1.87rem;
`;

export const List = styled.ul``;

export const Item = styled.li``;

export const Link = styled.a`
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding-block: 0.90rem;
    color: ${props => props.theme.titleColor};
`;

export const Name = styled.h3`
    font-size: 1rem;
    font-weight: ${props => props.theme.weigth500};
`;
