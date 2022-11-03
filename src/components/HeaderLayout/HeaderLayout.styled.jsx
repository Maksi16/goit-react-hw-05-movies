import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Heder = styled.header`
  /* border-bottom: 1px solid rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2); */
  font-size: 26px;
  font-weight: 700;
  padding: 24px;
`;
export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
