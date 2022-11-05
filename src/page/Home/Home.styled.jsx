import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  margin: 8px;
  padding: 8px;
  border-top: 1px solid rgba(34, 60, 80, 0.2);
  box-shadow: 0px -4px 8px 4px rgba(34, 60, 80, 0.2);
`;

export const Titile = styled.h1`
  font-size: 24px;
`;

export const NavItem = styled(Link)`
  font-size: 18px;
`;
