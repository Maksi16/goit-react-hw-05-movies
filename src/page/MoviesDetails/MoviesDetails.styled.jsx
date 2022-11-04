import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  margin: 8px;
  border-top: 1px solid rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 4px rgba(34, 60, 80, 0.2);
`;
export const WrapImg = styled.div`
  margin-right: 16px;
`;

export const Img = styled.img`
  width: 300px;
`;
export const Titile = styled.h1`
  font-size: 26px;
`;
export const SubTitile = styled.h1`
  font-size: 22px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const LinkBack = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  display: block;
  width: 60px;
  padding: 8px;
  margin: 8px;
  text-decoration: none;
  text-align: center;
  color: black;
  border: 1px solid rgba(34, 60, 80, 0.2);
  border-radius: 8px;
  :hover,
  :focus {
    scale: 1.2;
    color: yellow;
    background: blue;
  }
`;
export const NavItem = styled(NavLink)`
  font-size: 18px;
`;
