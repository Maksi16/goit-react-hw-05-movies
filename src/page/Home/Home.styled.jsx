import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  margin: 8px;
  padding: 8px;
  border-top: 1px solid rgba(34, 60, 80, 0.2);
  box-shadow: 0px -4px 8px 4px rgba(34, 60, 80, 0.2);
`;

export const Titile = styled.h1`
  font-size: 26px;
  text-align: center;
  border-bottom: 2px solid rgba(34, 60, 80, 0.2);
`;

export const NavItem = styled(Link)`
  font-size: 18px;
`;
export const Img = styled.img`
  width: 100%;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-top: -16px;
`;
export const Item = styled.li`
  list-style: none;
  margin-left: 16px;
  margin-top: 16px;
  flex-basis: calc(100% / 5 - 16px);
`;
