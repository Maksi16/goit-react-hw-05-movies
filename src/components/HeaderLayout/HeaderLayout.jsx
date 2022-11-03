import { Outlet } from 'react-router-dom';
import { Heder, StyledLink } from './HeaderLayout.styled';

export const HeaderLayout = () => {
  return (
    <Heder>
      <nav>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </Heder>
  );
};
