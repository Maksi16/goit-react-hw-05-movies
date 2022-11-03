import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrap = styled(Link)`
  font-size: 20px;
  color: black;
  text-decoration: none;
  padding: 8px;
  border: 1px solid rgba(34, 60, 80);
  display: block;
  margin: 4px;
  width: 100px;
  text-align: center;
  box-shadow: 4px -4px 36px 0px rgba(34, 60, 80, 0.2) inset;
`;

export const NotFound = () => {
  return (
    <div>
      <LinkWrap to="/">Go home</LinkWrap>
      <img
        src="https://images.hdqwalls.com/download/error-404-page-3k-1366x768.jpg"
        alt="404 not found"
      />
    </div>
  );
};
