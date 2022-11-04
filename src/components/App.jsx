import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { Home } from '../page/Home/Home';
import { Movies } from '../page/Movies/Movies';
import { MovieDetails } from '../page/MoviesDetails/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { NotFound } from '../page/NotFound';

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
