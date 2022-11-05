import { fetchFilms } from '../../API';
import { useState, useEffect, Suspense } from 'react';
import {} from './Movies.styled';
import {
  useParams,
  Outlet,
  useSearchParams,
  useLocation,
  Link,
} from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const handleChenge = e => {
    setText(e.currentTarget.value.toLowerCase());
    setSearchParams('');
  };
  console.log(searchParams);
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      toast.info('Please, write the correct query!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setQuery(e.target.name.value.toLowerCase());
    setSearchParams({ query: e.target.name.value.toLowerCase() });
  };
  useEffect(() => {
    setFilms([]);
  }, [text]);
  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);
    fetchFilms(query)
      .then(data => {
        setFilms(data.data.results);
      })
      .catch(error => {
        console.log(error);
        toast.error('Oops, something went wrong. Repeat one more time!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      {!movieId && (
        <>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              value={text}
              autoComplete="off"
              placeholder="Search films"
              onChange={handleChenge}
            />
            <button type="submit">
              <AiOutlineSearch></AiOutlineSearch>
            </button>
          </form>
          {isLoading && <Loader />}
          {films.length !== 0 && (
            <ul>
              {films.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={`/movies/${id}`}
                    state={{
                      from: location,
                    }}
                  >
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Movies;
