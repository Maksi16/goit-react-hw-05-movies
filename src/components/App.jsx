import { Route, Routes } from 'react-router-dom';
import { HeaderLayout } from './HeaderLayout/HeaderLayout';
import { NotFound } from '../page/NotFound';
import { lazy } from 'react';
import Home from '../page/Home/Home';
import Movies from '../page/Movies/Movies';
import MovieDetails from '../page/MoviesDetails/MoviesDetails';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// const Home = lazy(() => import('../page/Home/Home'));
// const Movies = lazy(() => import('../page/Movies/Movies'));
// const MovieDetails = lazy(() => import('../page/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyD3H9AcyO8BlDPtPhTD7VDEWTH6E5sLYWE',
    authDomain: 'posterprint-96e2d.firebaseapp.com',
    projectId: 'posterprint-96e2d',
    storageBucket: 'posterprint-96e2d.appspot.com',
    messagingSenderId: '891221140380',
    appId: '1:891221140380:web:82ad0b6dcb41a949019e59',
    measurementId: 'G-LZ5RL1NNHP',
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, 'notification_received');

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
