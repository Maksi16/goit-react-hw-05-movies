import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { NotFound } from '../page/NotFound';
import { lazy } from 'react';
import Home from '../page/Home/Home';
import Movies from '../page/Movies/Movies';
import MovieDetails from '../page/MoviesDetails/MoviesDetails';

// const Home = lazy(() => import('../page/Home/Home'));
// const Movies = lazy(() => import('../page/Movies/Movies'));
// const MovieDetails = lazy(() => import('../page/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
