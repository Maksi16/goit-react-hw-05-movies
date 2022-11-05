import axios from 'axios';

export const API_KEY = `221cb337db26a9a327cdabf040d8baa3`;
export const URL = `https://api.themoviedb.org`;

export const API_QVERY = {
  trendingMovie: '/3/trending/movie/day',
  searchMovie: '/3/search/movie',
  movieDetails: `/3/movie/`,
};

export const fetchFilmsHomepage = async () => {
  return axios.get(`${URL}${API_QVERY.trendingMovie}?api_key=${API_KEY}`);
};

export const fetchFilms = async query => {
  return axios.get(
    `${URL}${API_QVERY.searchMovie}?api_key=${API_KEY}&page=1&query=${query}`
  );
};

export const fetchFilmsDetails = async id => {
  return axios.get(`${URL}${API_QVERY.movieDetails}${id}?api_key=${API_KEY}`);
};

export const fetchFilmsCast = async id => {
  return axios.get(
    `${URL}${API_QVERY.movieDetails}${id}/credits?api_key=${API_KEY}`
  );
};

export const fetchReviews = async id => {
  return axios.get(
    `${URL}${API_QVERY.movieDetails}${id}/reviews?api_key=${API_KEY}&page=1`
  );
};
