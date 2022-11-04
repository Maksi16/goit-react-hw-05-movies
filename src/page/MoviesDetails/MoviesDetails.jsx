import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchFilmsDetails } from '../../API';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import {
  Wrap,
  Img,
  Titile,
  Text,
  SubTitile,
  WrapImg,
  LinkBack,
  NavItem,
  Box,
} from './MoviesDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;
  const noImages = `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;

  useEffect(() => {
    setIsLoading(true);
    fetchFilmsDetails(movieId)
      .then(data => {
        setFilm(data.data);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  // console.log(movieId);
  if (!film) {
    return;
  }
  const { poster_path, original_title, release_date, overview } = film;
  const procent = Math.round(Number(film.vote_average) * 10);

  return (
    <>
      <LinkBack to={location.state.from}>Go Back</LinkBack>
      <Wrap>
        {isLoading && <Loader />}
        {film && (
          <>
            <WrapImg>
              {poster_path ? (
                <Img
                  src={`${filmPosterUrl}${poster_path}`}
                  alt={original_title}
                />
              ) : (
                <Img src={`${noImages}`} alt={original_title} />
              )}
            </WrapImg>
            <div>
              <Titile>
                {original_title} ({release_date.slice(0, 4)})
              </Titile>
              <Text>User score: {procent}%</Text>
              <SubTitile>Overview</SubTitile>
              <Text>{overview}</Text>
              <SubTitile>Genres</SubTitile>
              <Text>
                {film.genres.length > 0
                  ? film.genres.map(item => item.name).join(', ')
                  : 'no info'}
              </Text>
            </div>
          </>
        )}
      </Wrap>
      <Box>
        <SubTitile>Additional Information</SubTitile>
        <ul>
          <li>
            <NavItem
              to="cast"
              state={location.state?.from ? location.state : '/'}
            >
              Cast
            </NavItem>
          </li>
          <li>
            <NavItem
              to="reviews"
              state={location.state?.from ? location.state : '/'}
            >
              Reviews
            </NavItem>
          </li>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};
