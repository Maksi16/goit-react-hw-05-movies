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
import { List, Img, Item, Form, Input, Button } from './Movies.styled';

const Movies = () => {
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const filmPosterUrl = `https://image.tmdb.org/t/p/w500`;
  const noImages = `https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png`;

  const handleChenge = e => {
    setText(e.currentTarget.value.toLowerCase());
    setSearchParams('');
  };

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
  console.log(searchParams);
  useEffect(() => {
    if (searchParams?.get('query')) {
      setQuery(searchParams.get('query'));
    }
  }, [searchParams]);

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
          <Form onSubmit={handleSubmit}>
            <Input
              name="name"
              type="text"
              value={text}
              autoComplete="off"
              placeholder="Search films"
              onChange={handleChenge}
            />
            <Button type="submit">
              <AiOutlineSearch size={20}></AiOutlineSearch>
            </Button>
          </Form>
          {isLoading && <Loader />}
          {films.length !== 0 && (
            <List>
              {films.map(({ id, title, poster_path }) => (
                <Item key={id}>
                  <Link
                    to={`/movies/${id}`}
                    state={{
                      from: location,
                    }}
                  >
                    {poster_path ? (
                      <Img src={`${filmPosterUrl}${poster_path}`} alt={title} />
                    ) : (
                      <Img src={`${noImages}`} alt={title} />
                    )}

                    <p>{title}</p>
                  </Link>
                </Item>
              ))}
            </List>
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
